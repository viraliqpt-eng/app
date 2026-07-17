# PROMPT10 AI MVP

Base funcional para um gerador de vídeos de 10 segundos a partir de texto e de uma imagem opcional.

## O que já funciona

1. Interface responsiva em português europeu.
2. Prompt com melhoramento assistido.
3. Carregamento de JPG, PNG e WEBP até 10 MB.
4. Validação do prompt, formato, estilo e imagem.
5. API assíncrona de gerações.
6. Progresso consultável em tempo real.
7. Histórico persistente em ficheiro JSON.
8. Modo demonstrativo com vídeo local.
9. Adaptador HTTP preparado para um motor de vídeo real.
10. Proteções básicas por cabeçalhos, limites e controlo de pedidos.

## Requisitos

Node.js 20 ou superior e npm.

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

### Motor real por HTTP

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
