# SHITAGRAM™

Projeto separado a partir do ficheiro principal enviado.

## Estrutura

- `index.html` — página principal
- `css/style.css` — estilos extraídos do HTML
- `js/app.js` — lógica JavaScript extraída do HTML
- `manifest.json` — instalação PWA
- `service-worker.js` — cache básica offline
- `assets/` — imagens, ícones e sons

## Publicação

Podes enviar esta pasta para GitHub Pages, Netlify, Vercel ou alojamento normal.

## Nota

O projeto ainda usa CDN externas para Tailwind, FontAwesome e Google Fonts. Para produção profissional, convém instalar/empacotar esses recursos localmente.


## v32 - Login e Registo
- Página inicial antes das batalhas.
- Registo e login local por email/password para protótipo.
- Após registo, abre automaticamente o Meu Perfil.
- Duelos, IA e Perfil pedem conta antes de entrar.
- Perfil continua editável em tempo real e sincroniza com a conta local.

Nota: este login é localStorage para demonstração. Para produção, substituir por Supabase Auth.
