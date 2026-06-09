<!DOCTYPE html>
<html lang="pt-PT">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SHITAGRAM™ — Reset PWA</title>
<style>
body{margin:0;min-height:100vh;background:#090302;color:#fff7ed;font-family:system-ui,Segoe UI,sans-serif;display:grid;place-items:center;padding:24px}
.card{max-width:680px;border:1px solid rgba(255,122,0,.25);background:linear-gradient(180deg,rgba(255,122,0,.08),rgba(0,0,0,.25));border-radius:24px;padding:34px;box-shadow:0 25px 80px rgba(0,0,0,.4)}
h1{font-size:36px;margin:0 0 12px}p{color:rgba(255,247,237,.72);line-height:1.55}
button,a{display:inline-block;margin-top:14px;margin-right:10px;border:0;border-radius:14px;padding:14px 18px;background:linear-gradient(90deg,#ffb000,#ff6a00,#f2352f);color:#160602;font-weight:1000;text-decoration:none}
.secondary{background:rgba(255,255,255,.08);color:#fff7ed;border:1px solid rgba(255,122,0,.2)}
</style>
</head>
<body>
<div class="card">
<h1>🔥 Reset SHITAGRAM™ PWA</h1>
<p>Esta página limpa o Service Worker antigo que ficou preso em cache e pode estar a mostrar código em vez das páginas.</p>
<button onclick="reset()">Limpar agora</button>
<a class="secondary" href="index.html">Voltar ao início</a>
<p id="status"></p>
</div>
<script>
async function reset(){
  const s=document.getElementById("status");
  s.textContent="A limpar...";
  try{
    if("serviceWorker" in navigator){
      const regs=await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map(r=>r.unregister()));
    }
    if(window.caches){
      const keys=await caches.keys();
      await Promise.all(keys.map(k=>caches.delete(k)));
    }
    localStorage.clear();
    sessionStorage.clear();
    s.textContent="Limpo. A recarregar...";
    setTimeout(()=>location.href="index.html?reset="+Date.now(),800);
  }catch(e){
    s.textContent="Erro ao limpar. Usa F12 → Application → Service Workers → Unregister.";
  }
}
</script>
</body>
</html>