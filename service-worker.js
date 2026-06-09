SHITAGRAM™ v34.2 — PWA Real Install

Esta versão corrige a instalação no PC.

Inclui:
- manifest.json
- service-worker.js
- icons/icon-192.png
- icons/icon-512.png
- link rel=manifest em todas as páginas
- registo automático do service worker

Como publicar no GitHub Pages / domínio:
1. Envia TODOS os ficheiros e pastas deste pacote para a raiz do site.
2. Não envies só o index.html.
3. Confirma que existem na raiz:
   - manifest.json
   - service-worker.js
   - icons/icon-192.png
   - icons/icon-512.png
4. Abre o site em HTTPS.
5. No Chrome/Edge, espera alguns segundos e procura o ícone de instalar na barra de endereço.
6. Também podes abrir /instalar.html.

Notas:
- Em alguns browsers, o botão “Instalar SHITAGRAM™” só funciona depois de o browser disparar o evento beforeinstallprompt.
- Se não aparecer, usa o menu do Chrome/Edge → Instalar página como app.
- No iPhone, a instalação é manual: Partilhar → Adicionar ao ecrã principal.
