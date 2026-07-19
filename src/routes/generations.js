import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';
import { SHOP_ANGLES, SHOP_CTAS } from '../services/tiktokShopPrompt.js';

const ASPECT_RATIOS = new Set(['9:16', '16:9', '1:1']);
const STYLES = new Set(['Cinematográfico', 'UGC', 'Produto', 'Anime']);
const COST_MODES = new Set(['automatico', 'economico', 'premium']);
const IMAGE_TYPES = new Map([
  ['image/jpeg', '.jpg'],
  ['image/png', '.png'],
  ['image/webp', '.webp']
]);

async function removeUpload(file) {
  if (!file?.path) return;
  await fs.unlink(file.path).catch(() => {});
}

export function createGenerationsRouter({ service, creditStore, config }) {
  const router = Router();
  const upload = multer({
    storage: multer.diskStorage({
      destination: config.uploadsDir,
      filename: (request, file, callback) => {
        callback(null, `${crypto.randomUUID()}${IMAGE_TYPES.get(file.mimetype) || ''}`);
      }
    }),
    limits: {
      fileSize: config.maxImageBytes,
      files: 1,
      fields: 12
    },
    fileFilter: (request, file, callback) => {
      if (!IMAGE_TYPES.has(file.mimetype)) {
        const error = new Error('A imagem deve estar em JPG, PNG ou WEBP');
        error.status = 400;
        return callback(error);
      }
      callback(null, true);
    }
  });

  router.get('/', (request, response) => {
    const limit = Math.max(1, Math.min(50, Number(request.query.limit) || 12));
    response.json({ generations: service.list(limit, request.walletId) });
  });

  router.get('/:id', (request, response) => {
    const generation = service.get(request.params.id, request.walletId);
    if (!generation) return response.status(404).json({ message: 'Geração não encontrada' });
    response.json({ generation });
  });

  router.post('/', upload.single('image'), async (request, response, next) => {
    try {
      const prompt = String(request.body.prompt || '').trim();
      const aspectRatio = String(request.body.aspectRatio || '9:16');
      const style = String(request.body.style || 'Cinematográfico');
      const camera = String(request.body.camera || 'Aproximação lenta').slice(0, 80);
      const costMode = String(request.body.costMode || 'automatico');
      const tiktokShop = String(request.body.tiktokShop || 'false') === 'true';
      const productName = String(request.body.productName || '').replace(/\s+/g, ' ').trim().slice(0, 100);
      const sellingPoint = String(request.body.sellingPoint || '').replace(/\s+/g, ' ').trim().slice(0, 180);
      const salesAngle = String(request.body.salesAngle || 'demonstracao');
      const cta = String(request.body.cta || 'ver_produto');

      if (prompt.length < 5 || prompt.length > 1000) {
        await removeUpload(request.file);
        return response.status(400).json({ message: 'O prompt deve ter entre 5 e 1000 caracteres' });
      }

      if (!ASPECT_RATIOS.has(aspectRatio) || !STYLES.has(style) || !COST_MODES.has(costMode)) {
        await removeUpload(request.file);
        return response.status(400).json({ message: 'Formato ou estilo inválido' });
      }

      if (costMode === 'economico' && !request.file) {
        return response.status(400).json({ message: 'Adiciona uma imagem do produto para usar o modo Económico' });
      }

      if (tiktokShop && (productName.length < 2 || sellingPoint.length < 3)) {
        await removeUpload(request.file);
        return response.status(400).json({ message: 'Indica o nome do produto e o benefício principal' });
      }

      if (tiktokShop && (!SHOP_ANGLES.has(salesAngle) || !SHOP_CTAS.has(cta))) {
        await removeUpload(request.file);
        return response.status(400).json({ message: 'Ângulo de venda ou chamada para ação inválida' });
      }

      const generationId = crypto.randomUUID();
      const charged = await creditStore.debit(
        request.walletId,
        config.generationCreditCost,
        'Geração de vídeo de 10 segundos',
        generationId
      );
      if (!charged) {
        await removeUpload(request.file);
        return response.status(402).json({
          message: 'Créditos insuficientes. Escolhe um pacote para continuar.',
          code: 'INSUFFICIENT_CREDITS'
        });
      }

      let generation;
      try {
        generation = await service.create({
          id: generationId,
          walletId: request.walletId,
          creditsCharged: config.generationCreditCost,
          prompt,
          aspectRatio,
          style,
          camera,
          costMode,
          tiktokShop,
          productName,
          sellingPoint,
          salesAngle,
          cta,
          inputImagePath: request.file?.path || null,
          inputImageName: request.file?.originalname || null,
          inputImageMimeType: request.file?.mimetype || null
        });
      } catch (error) {
        await creditStore.refund(
          request.walletId,
          config.generationCreditCost,
          'Reembolso de pedido não iniciado',
          generationId
        );
        throw error;
      }

      response.status(202).json({
        generation,
        wallet: creditStore.toPublic(charged)
      });
    } catch (error) {
      await removeUpload(request.file);
      next(error);
    }
  });

  return router;
}
