const ANGLES = Object.freeze({
  demonstracao: 'Nos primeiros 2 segundos, mostrar o produto em destaque. Entre 2 e 8 segundos, demonstrar o benefício principal com movimento natural. Nos últimos 2 segundos, terminar num plano limpo do produto.',
  problema_solucao: 'Nos primeiros 2 segundos, apresentar visualmente uma dificuldade comum. Entre 2 e 8 segundos, mostrar o produto a resolver essa dificuldade. Nos últimos 2 segundos, terminar com o resultado e o produto em destaque.',
  ugc: 'Criar uma apresentação UGC natural. Começar com uma reação autêntica, demonstrar rapidamente o produto e terminar com o criador a apontar para a área do carrinho.',
  premium: 'Criar uma apresentação publicitária premium, com iluminação elegante, planos de detalhe e movimento de câmara suave, terminando num hero shot do produto.'
});

const CTAS = Object.freeze({
  ver_produto: 'Ver o produto no carrinho',
  saber_mais: 'Descobrir todos os detalhes',
  experimentar: 'Experimentar o produto'
});

function clean(value, maxLength) {
  return String(value || '').replace(/\s+/g, ' ').trim().slice(0, maxLength);
}

function sentence(value) {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : value;
}

export const SHOP_ANGLES = new Set(Object.keys(ANGLES));
export const SHOP_CTAS = new Set(Object.keys(CTAS));

export function buildTikTokShopPrompt(input) {
  const originalPrompt = clean(input.prompt, 1000);
  if (!input.tiktokShop) return originalPrompt;

  const productName = clean(input.productName, 100);
  const sellingPoint = clean(input.sellingPoint, 180);
  const salesAngle = SHOP_ANGLES.has(input.salesAngle) ? input.salesAngle : 'demonstracao';
  const cta = SHOP_CTAS.has(input.cta) ? input.cta : 'ver_produto';

  return [
    'Vídeo publicitário vertical 9:16 com duração exata de 10 segundos para TikTok Shop.',
    `Produto: ${productName}.`,
    `Benefício principal a demonstrar: ${sellingPoint}.`,
    ANGLES[salesAngle],
    `Chamada final sugerida: ${CTAS[cta]}.`,
    originalPrompt ? `Direção criativa adicional: ${originalPrompt}.` : '',
    'Preservar fielmente a aparência, embalagem, cores e proporções do produto da imagem. Não inventar características, resultados, marcas ou texto ilegível.'
  ].filter(Boolean).join(' ').slice(0, 1000);
}

export function buildPublicationKit(input) {
  if (!input.tiktokShop) return null;
  const productName = clean(input.productName, 100);
  const sellingPoint = clean(input.sellingPoint, 180);
  const cta = SHOP_CTAS.has(input.cta) ? input.cta : 'ver_produto';
  const spokenCta = CTAS[cta];

  return {
    hook: `Olha o que ${productName} consegue fazer.`,
    voiceover: `${productName}. ${sentence(sellingPoint)}. ${spokenCta}.`,
    caption: `${productName}: ${sellingPoint}. ${spokenCta}.`,
    hashtags: '#TikTokShop #AchadosTikTok #ProdutoViral'
  };
}
