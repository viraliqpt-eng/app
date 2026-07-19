# PROMPT10 AI MVP 0.8

Base funcional para um gerador de vídeos de 10 segundos a partir de texto e de uma imagem opcional.

## Créditos PROMPT10

A versão 0.8 inclui uma carteira inicial por navegador. Cada novo navegador recebe 10 créditos gratuitos e cada vídeo utiliza 10 créditos. Se o motor de vídeo falhar, o saldo é devolvido automaticamente.

```env
FREE_CREDITS=10
GENERATION_CREDIT_COST=10
```

Esta carteira em ficheiro serve para validar o MVP. Antes de ativar pagamentos, deve ser substituída por autenticação com email, base de dados persistente e checkout Stripe com webhooks.

## O que já funciona

1. Interface responsiva em português europeu.
2. Prompt com melhoramento assistido.
3. Carregamento de JPG, PNG e WEBP até 3 MB.
4. Validação do prompt, formato, estilo e imagem.
5. API assíncrona de gerações.
6. Progresso consultável em tempo real.
7. Histórico persistente em ficheiro JSON.
8. Modo demonstrativo com vídeo local.
9. Roteamento inteligente entre Runway Gen 4 Turbo e Gen 4.5.
10. Adaptador HTTP preparado para outros motores de vídeo.
11. Proteções básicas por cabeçalhos, limites e controlo de pedidos.
12. TikTok Shop Studio com produto, benefício, ângulo de venda e chamada para ação.
13. Prompt comercial estruturado automaticamente para 10 segundos.
14. Kit de publicação com gancho, voz sugerida, legenda e hashtags.
15. Três variações gratuitas de prompt antes de escolher o vídeo.
16. Confirmação obrigatória do custo antes de cada geração.
17. Estatísticas de vídeos concluídos, custo e créditos estimados.
18. Instruções reforçadas contra logótipos, marcas e texto inventados.

## TikTok Shop Studio

Ativar `TikTok Shop Studio` na parte superior do gerador e preencher:

1. Nome do produto.
2. Benefício principal que pode ser demonstrado visualmente.
3. Ângulo de venda: demonstração, problema e solução, UGC ou premium.
4. Chamada para ação.

O botão `Criar prompt comercial` prepara uma cena vertical de 10 segundos. O servidor acrescenta uma estrutura temporal, preserva a imagem do produto e inclui uma instrução para não inventar características ou marcas.

Depois da geração, a interface apresenta um kit de publicação com:

* gancho para os primeiros segundos;
* texto curto para voz;
* legenda;
* hashtags.

### Variações sem gastar créditos

O botão `Criar 3 variações grátis` prepara três abordagens para o mesmo produto:

1. Demonstração.
2. Problema e solução.
3. UGC natural.

Escolher uma variação apenas altera o prompt. Nenhum pedido é enviado à Runway até o utilizador clicar em gerar e confirmar o custo apresentado no ecrã.

### Controlo de utilização

A área de projetos calcula, a partir das gerações concluídas guardadas no histórico:

1. Número de vídeos concluídos.
2. Custo estimado total.
3. Créditos estimados utilizados.

Os números são estimativas locais e não substituem o saldo e o relatório oficial do fornecedor.

## Requisitos

Node.js 20 ou superior e npm.

## Integração TikTok

A versão 0.7 inclui páginas públicas de Termos, Privacidade e Contacto, Login Kit e a base do Content Posting API. Os tokens ficam apenas na memória do servidor e são removidos ao reiniciar a instância.

No Render, adiciona estas variáveis sem expor os valores no GitHub:

```env
PUBLIC_BASE_URL=https://prompt10-ai-pedro.onrender.com
SUPPORT_EMAIL=teu-email-publico@example.com
TIKTOK_CLIENT_KEY=
TIKTOK_CLIENT_SECRET=
TIKTOK_REDIRECT_URI=https://prompt10-ai-pedro.onrender.com/api/tiktok/callback
TIKTOK_SCOPES=user.info.basic,video.publish
```

No TikTok Developers, adiciona exatamente o mesmo redirect URI ao Login Kit. Enquanto a aplicação não for aprovada e auditada, o TikTok restringe as publicações a `SELF_ONLY`.

## Instalação

```bash
npm install
cp .env.example .env
npm start
```

Abrir `http://localhost:3000`.

## Modos do motor de vídeo

### Modo demonstrativo

O valor padrão é:

```env
VIDEO_PROVIDER=mock
```

Este modo permite testar todo o percurso sem gastar créditos externos. Após alguns segundos, devolve o vídeo incluído em `storage/outputs/demo-prompt10.mp4`.

### Runway com controlo de custo

Criar uma conta de programador no Runway, obter a chave da API e configurar:

```env
VIDEO_PROVIDER=runway
RUNWAY_API_SECRET=chave_secreta
RUNWAY_MODEL=gen4.5
```

Depois, iniciar normalmente:

```bash
npm start
```

O adaptador envia prompts e imagens diretamente para o endpoint oficial, acompanha o estado da tarefa e guarda o MP4 concluído em `storage/outputs`.

Na interface existem três modos:

| Modo | Modelo usado | Imagem | Custo estimado para 10 s |
| --- | --- | --- | --- |
| Automático | Gen 4 Turbo com imagem, Gen 4.5 sem imagem | Opcional | US$ 0,50 ou US$ 1,20 |
| Económico | Gen 4 Turbo | Obrigatória | US$ 0,50 |
| Premium | Gen 4.5 | Opcional | US$ 1,20 |

Para vídeos de TikTok Shop, o percurso recomendado é formato 9:16, estilo Produto ou UGC, uma fotografia nítida do produto e modo Automático. Assim, o sistema escolhe o Turbo e reduz o custo.

O Gen 4 Turbo exige imagem. O Gen 4.5 aceita texto ou imagem e suporta vídeos de 10 segundos. No modelo Gen 4.5, o formato quadrado requer uma imagem de referência. Para texto sem imagem, usar 9:16 ou 16:9.

O limite padrão de 3 MB mantém a imagem dentro do limite oficial para envio em base64.

Documentação oficial:

`https://docs.dev.runwayml.com/guides/using-the-api/`

Preços oficiais:

`https://docs.dev.runwayml.com/guides/pricing/`

### Outro motor real por HTTP

Configurar:

```env
VIDEO_PROVIDER=http
VIDEO_API_URL=https://gateway.exemplo.com
VIDEO_API_KEY=chave_secreta
```

O gateway deve aceitar o seguinte contrato.

### Criar uma geração

`POST /generations`

```json
{
  "prompt": "Descrição da cena",
  "image": "data:image/jpeg;base64,...",
  "durationSeconds": 10,
  "aspectRatio": "9:16",
  "style": "Cinematográfico",
  "camera": "Aproximação lenta"
}
```

Resposta:

```json
{
  "id": "generation_123",
  "status": "queued",
  "progress": 0
}
```

### Consultar uma geração

`GET /generations/generation_123`

Resposta durante o processamento:

```json
{
  "id": "generation_123",
  "status": "processing",
  "progress": 52
}
```

Resposta final:

```json
{
  "id": "generation_123",
  "status": "succeeded",
  "progress": 100,
  "outputUrl": "https://cdn.exemplo.com/video.mp4"
}
```

Os estados aceites são `queued`, `processing`, `succeeded` e `failed`.

## API interna

| Método | Rota | Finalidade |
| --- | --- | --- |
| GET | `/api/health` | Estado do servidor |
| POST | `/api/generations` | Criar geração com `multipart/form-data` |
| GET | `/api/generations/:id` | Consultar progresso |
| GET | `/api/generations` | Consultar histórico |

## Estrutura

```text
prompt10-ai-mvp/
  public/
    index.html
  src/
    middleware/
    providers/
    routes/
    services/
    storage/
  data/
  storage/
    uploads/
    outputs/
  server.js
```

## Próxima evolução recomendada

Substituir o armazenamento JSON por PostgreSQL, guardar os conteúdos num serviço de objetos, acrescentar autenticação, créditos, pagamentos, moderação avançada e um adaptador específico para o fornecedor de vídeo escolhido.
