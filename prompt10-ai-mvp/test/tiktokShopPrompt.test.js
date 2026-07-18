import assert from 'node:assert/strict';
import test from 'node:test';
import { buildPublicationKit, buildTikTokShopPrompt } from '../src/services/tiktokShopPrompt.js';

test('mantém o prompt original fora do modo TikTok Shop', () => {
  assert.equal(buildTikTokShopPrompt({
    prompt: '  Uma cena cinematográfica   com luz dourada  ',
    tiktokShop: false
  }), 'Uma cena cinematográfica com luz dourada');
});

test('cria um prompt comercial estruturado de 10 segundos', () => {
  const prompt = buildTikTokShopPrompt({
    prompt: 'Usar uma cozinha luminosa',
    tiktokShop: true,
    productName: 'Mini liquidificador portátil',
    sellingPoint: 'prepara bebidas em poucos segundos',
    salesAngle: 'problema_solucao',
    cta: 'ver_produto'
  });

  assert.match(prompt, /TikTok Shop/);
  assert.match(prompt, /Mini liquidificador portátil/);
  assert.match(prompt, /prepara bebidas em poucos segundos/);
  assert.match(prompt, /resolver essa dificuldade/);
  assert.match(prompt, /Ver o produto no carrinho/);
  assert.ok(prompt.length <= 1000);
});

test('cria o kit de publicação para o produto', () => {
  const kit = buildPublicationKit({
    tiktokShop: true,
    productName: 'Escova iónica',
    sellingPoint: 'ajuda a alisar o cabelo rapidamente',
    cta: 'saber_mais'
  });

  assert.match(kit.hook, /Escova iónica/);
  assert.match(kit.voiceover, /Descobrir todos os detalhes/);
  assert.match(kit.caption, /ajuda a alisar/);
  assert.match(kit.hashtags, /#TikTokShop/);
});
