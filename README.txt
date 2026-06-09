<!DOCTYPE html>
<html lang="pt-PT">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SHITAGRAM™ — Meu Perfil — Single File</title>
  <style>

:root{
  --bg:#090302;
  --bg2:#140706;
  --panel:#160d0a;
  --panel2:#21100b;
  --line:rgba(255,132,32,.18);
  --line2:rgba(255,255,255,.08);
  --text:#fff7ed;
  --muted:rgba(255,247,237,.68);
  --muted2:rgba(255,247,237,.45);
  --orange:#ff7a00;
  --orange2:#ff4d00;
  --yellow:#ffb800;
  --red:#f2352f;
  --brown:#3a160d;
  --green:#26d66b;
}
*{box-sizing:border-box}
html,body{margin:0;min-height:100%;background:radial-gradient(circle at 50% -10%,rgba(255,122,0,.13),transparent 30%),radial-gradient(circle at 15% 30%,rgba(255,77,0,.08),transparent 34%),linear-gradient(180deg,#120504,#070201 70%);color:var(--text);font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
body{overflow-x:hidden}
a{text-decoration:none;color:inherit}
button,input,textarea{font-family:inherit}
button{cursor:pointer;color:inherit}
button:active{transform:scale(.985)}
.app-header{height:82px;display:flex;align-items:center;justify-content:space-between;padding:0 30px;border-bottom:1px solid rgba(255,122,0,.16);background:rgba(17,6,4,.82);backdrop-filter:blur(18px);position:sticky;top:0;z-index:20}
.logo{display:flex;align-items:center;gap:12px;min-width:245px}
.logo-mark{width:54px;height:54px;border-radius:18px;background:linear-gradient(180deg,#ff9a1f,#ff3b17);display:grid;place-items:center;font-size:30px;box-shadow:0 0 30px rgba(255,122,0,.22)}
.logo-title{font-weight:1000;font-size:30px;letter-spacing:-.055em;line-height:.92;background:linear-gradient(90deg,#ffbf38,#ff5f23,#ff9b77);-webkit-background-clip:text;color:transparent}
.logo-sub{font-weight:900;font-size:11px;color:#ff9a1f;letter-spacing:.12em;margin-top:2px}
.nav{display:flex;align-items:center;gap:27px;color:rgba(255,247,237,.72);font-size:17px;font-weight:800}
.nav a{display:flex;align-items:center;gap:8px;padding:28px 0 25px;border-bottom:3px solid transparent}
.nav a.active{color:#ff9a1f;border-color:#ff7a00}
.nav a:hover{color:#fff}
.header-actions{display:flex;align-items:center;gap:14px}
.coin-pill{height:45px;border-radius:999px;padding:0 18px;display:flex;align-items:center;gap:8px;background:rgba(255,184,0,.10);border:1px solid rgba(255,184,0,.30);font-size:18px;font-weight:1000;color:#ffd35a}
.user-pill{height:45px;border-radius:999px;padding:0 16px;display:flex;align-items:center;gap:10px;background:rgba(255,77,0,.10);border:1px solid rgba(255,122,0,.18);font-weight:800;color:#ffb17d;max-width:205px}
.container{max-width:1500px;margin:0 auto;padding:40px 26px}
.hero{text-align:center;max-width:820px;margin:0 auto 36px}
.kicker{display:inline-flex;align-items:center;gap:8px;padding:8px 20px;border-radius:999px;background:rgba(255,122,0,.14);border:1px solid rgba(255,122,0,.25);color:#ffb17d;font-weight:1000;font-size:13px;letter-spacing:.10em;text-transform:uppercase}
.hero h1{font-size:54px;line-height:.95;margin:16px 0 12px;font-weight:1000;letter-spacing:-.055em}
.hero h1 span{color:#ff7a00}
.hero p{color:var(--muted);font-size:18px;line-height:1.48;margin:0}
.panel{background:linear-gradient(180deg,rgba(255,255,255,.035),rgba(255,255,255,.012));border:1px solid var(--line);border-radius:24px;box-shadow:0 30px 90px rgba(0,0,0,.38)}
.center-panel{max-width:860px;margin:0 auto;padding:28px}
.sort-box{background:rgba(0,0,0,.55);border:1px solid rgba(255,122,0,.16);border-radius:17px;padding:35px 22px;text-align:center}
.sort-box .dice{font-size:54px;margin-bottom:8px}
.btn-main{width:100%;height:64px;border:0;border-radius:15px;background:linear-gradient(90deg,#ffb000,#ff6b00,#f2352f);color:#120604;font-size:18px;font-weight:1000;text-transform:uppercase;letter-spacing:.02em;box-shadow:0 15px 45px rgba(255,77,0,.20)}
.btn-small{border:0;border-radius:12px;background:linear-gradient(180deg,#ff7a00,#ff4d00);color:#160602;font-weight:1000;padding:11px 20px}
.section-title{display:flex;align-items:center;justify-content:space-between;margin:42px 0 18px}
.section-title h2{font-size:24px;margin:0;font-weight:1000}
.grid-2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
.theme-card{padding:20px;border-radius:17px;background:rgba(255,255,255,.025);border:1px solid rgba(255,122,0,.16);display:grid;grid-template-columns:74px 1fr auto;gap:18px;align-items:center}
.theme-icon{width:60px;height:60px;border-radius:15px;display:grid;place-items:center;font-size:34px;background:rgba(255,122,0,.10)}
.theme-card h3{font-size:20px;margin:0 0 5px;font-weight:1000}
.theme-card p{font-size:14px;color:var(--muted);margin:0 0 10px;line-height:1.35}
.bonus{font-size:12px;color:#ffbe43;font-weight:900}
.label{font-size:11px;font-weight:1000;color:#ffa05a;background:rgba(255,122,0,.12);padding:6px 10px;border-radius:999px;text-transform:uppercase}
.duel-layout{display:grid;grid-template-columns:minmax(0,1fr)430px;gap:24px}
.battle-card{overflow:hidden}
.scorebar{height:54px;display:grid;grid-template-columns:1fr 90px 1fr;background:linear-gradient(90deg,#ee2727,#ff6a00,#ffb000);align-items:center;font-size:22px;font-weight:1000}
.scorebar div{padding:0 22px}.scorebar .vs{height:38px;border-radius:999px;background:#d9322f;display:grid;place-items:center;align-self:center;box-shadow:0 8px 25px rgba(0,0,0,.35);padding:0}
.mission{padding:24px 30px;border-bottom:1px solid rgba(255,122,0,.14);display:flex;align-items:center;justify-content:space-between;gap:20px}
.mission h2{margin:0;font-size:24px}.mission p{margin:6px 0 0;color:var(--muted)}
.bonus-box{padding:14px 18px;border-radius:14px;background:rgba(255,184,0,.12);border:1px solid rgba(255,184,0,.25);font-weight:900;color:#ffd76e;text-align:center}
.players{display:grid;grid-template-columns:1fr 1fr}
.player{min-height:480px;position:relative;background:#180805;border-right:1px solid rgba(255,122,0,.12);display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden}
.player:last-child{border-right:0}
.player-img{position:absolute;inset:0;background-size:cover;background-position:center;opacity:.82}
.player:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.65))}
.player-content{position:relative;z-index:2;padding:28px}
.tag-red{display:inline-block;background:#e33434;color:#fff;border-radius:8px;padding:6px 12px;font-size:12px;font-weight:1000;margin-bottom:12px}
.player h2{font-size:32px;margin:0 0 8px;font-weight:1000}
.player p{color:rgba(255,247,237,.80);line-height:1.35;margin:0 0 20px}
.vote-row{display:grid;grid-template-columns:1fr 130px;gap:12px}
.vote-a{background:linear-gradient(90deg,#f2352f,#ff6a00)}.vote-b{background:linear-gradient(90deg,#ffb000,#e59300)}
.gifts{padding:18px 26px 24px;border-top:1px solid rgba(255,122,0,.14)}
.gift-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.gift-card{min-height:110px;border-radius:16px;background:rgba(255,122,0,.055);border:1px solid rgba(255,122,0,.13);display:grid;place-items:center;text-align:center;font-weight:900}
.gift-card .emoji{font-size:35px}.gift-card small{display:block;color:#ffd260;margin-top:5px}
.side-panel{padding:22px}.side-panel h2{margin:0 0 20px;font-size:22px}
.chat-list{height:380px;overflow-y:auto;display:flex;flex-direction:column;gap:14px;color:rgba(255,247,237,.82);line-height:1.45}
.chat-list b{color:#ff9a1f}.chat-input{margin-top:20px;display:flex;gap:12px}.chat-input input{flex:1;height:52px;border-radius:14px;background:rgba(0,0,0,.45);border:1px solid rgba(255,122,0,.16);color:#fff;padding:0 18px;outline:none;font-size:16px}
.send-btn{width:56px;border:0;border-radius:14px;background:#ff5a00;font-size:26px}
.pk-list{margin-top:24px}.pk-item{height:70px;border-radius:15px;border:1px solid rgba(255,122,0,.18);background:rgba(255,122,0,.045);display:flex;align-items:center;justify-content:space-between;padding:0 18px;margin-bottom:12px}
.rank-panel{max-width:1120px;margin:40px auto;padding:54px}.rank-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:40px}.rank-head h1{font-size:46px;margin:0;font-weight:1000;letter-spacing:-.04em}.rank-head p{margin:6px 0 0;color:#ffb347;font-size:18px}
.rank-row{height:136px;border-radius:20px;border:1px solid rgba(255,122,0,.19);background:rgba(255,122,0,.035);display:grid;grid-template-columns:70px 110px 1fr 250px;align-items:center;gap:22px;padding:0 28px;margin-bottom:18px}
.medal{width:48px;height:48px;border-radius:999px;display:grid;place-items:center;font-weight:1000;font-size:20px;color:#150802}.gold{background:#ffbf26}.silver{background:#d9e1ed}.bronze{background:#f0872c}.rank-avatar{width:86px;height:86px;border-radius:16px;background:linear-gradient(135deg,#ff7a00,#38130c);display:grid;place-items:center;font-size:42px}.rank-row h3{margin:0;font-size:26px}.rank-row p{margin:8px 0 0;color:#ffd05e;font-weight:900}.points{text-align:right;font-size:28px;font-weight:1000}.points small{display:block;color:var(--muted);font-size:14px;font-weight:700;margin-top:5px}
.profile-card{max-width:980px;margin:36px auto;padding:54px;text-align:center}.avatar-big{width:132px;height:132px;border-radius:30px;background:linear-gradient(135deg,#ff7a00,#1c0805);border:4px solid #ff7a00;margin:0 auto 22px;display:grid;place-items:center;font-size:65px}.profile-card h1{font-size:36px;margin:0}.profile-id{color:#ff9a1f;font-weight:800;margin-top:8px}.stats{display:flex;justify-content:center;gap:0;margin:38px 0}.stat{min-width:150px;padding:0 40px;border-right:1px solid rgba(255,122,0,.18)}.stat:last-child{border-right:0}.stat b{display:block;font-size:34px}.stat span{color:#ff9a1f;font-weight:1000}
.empty{border:1px dashed rgba(255,122,0,.28);border-radius:18px;padding:40px;color:var(--muted);margin-top:30px}
.footer{border-top:1px solid rgba(255,122,0,.15);padding:22px 30px;color:var(--muted2);display:flex;justify-content:space-between;gap:20px}
@media(max-width:1050px){.app-header{height:auto;align-items:flex-start;flex-direction:column;padding:18px}.nav{flex-wrap:wrap;gap:18px}.header-actions{width:100%;justify-content:space-between}.duel-layout{grid-template-columns:1fr}.grid-2{grid-template-columns:1fr}.players{grid-template-columns:1fr}.rank-row{grid-template-columns:50px 70px 1fr;min-height:150px;height:auto;padding:20px}.points{grid-column:3;text-align:left}.gift-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:600px){.hero h1{font-size:40px}.container{padding:28px 16px}.theme-card{grid-template-columns:1fr}.rank-panel,.profile-card{padding:28px}.stats{flex-direction:column;gap:20px}.stat{border-right:0}.footer{flex-direction:column}.logo-title{font-size:24px}}


/* =========================================================
   SHITAGRAM™ v33 — Polish do novo tema
   ========================================================= */

body::before{
  content:"";
  position:fixed;
  inset:0;
  pointer-events:none;
  background:
    radial-gradient(circle at 8% 80%,rgba(255,122,0,.08),transparent 30%),
    radial-gradient(circle at 95% 92%,rgba(242,53,47,.06),transparent 28%);
  z-index:-1;
}

.app-header{
  box-shadow:0 12px 45px rgba(0,0,0,.28);
}

.logo:hover .logo-mark{
  transform:rotate(-5deg) scale(1.04);
}

.logo-mark{
  transition:.2s ease;
}

.panel{
  position:relative;
  overflow:hidden;
}

.panel::before{
  content:"";
  position:absolute;
  inset:0;
  pointer-events:none;
  background:linear-gradient(135deg,rgba(255,255,255,.035),transparent 35%,rgba(255,122,0,.025));
  opacity:.9;
}

.panel > *{
  position:relative;
  z-index:1;
}

.theme-card,
.rank-row,
.pk-item,
.gift-card{
  transition:.18s ease;
}

.theme-card:hover,
.rank-row:hover,
.pk-item:hover,
.gift-card:hover{
  transform:translateY(-2px);
  border-color:rgba(255,122,0,.38);
  box-shadow:0 18px 45px rgba(255,77,0,.08);
}

.btn-main,
.btn-small,
.send-btn{
  box-shadow:0 12px 35px rgba(255,77,0,.16);
}

.btn-main:hover,
.btn-small:hover,
.send-btn:hover{
  filter:brightness(1.08);
}

.top-warning{
  max-width:1100px;
  margin:0 auto 24px;
  padding:14px 18px;
  border:1px solid rgba(255,184,0,.22);
  border-radius:16px;
  color:#ffc266;
  background:rgba(255,184,0,.055);
  text-align:center;
  font-weight:800;
}

.ai-result{
  margin-top:22px;
  border:1px solid rgba(255,122,0,.22);
  border-radius:18px;
  padding:22px;
  background:rgba(0,0,0,.35);
}

.ai-result h3{
  margin:0 0 8px;
  color:#ff9a1f;
}

.ai-result p{
  color:var(--muted);
  line-height:1.55;
}

.sound-chip{
  position:fixed;
  right:18px;
  bottom:18px;
  z-index:40;
  border:1px solid rgba(255,122,0,.28);
  background:rgba(20,7,6,.88);
  backdrop-filter:blur(12px);
  color:#ffc266;
  border-radius:999px;
  padding:12px 16px;
  font-weight:1000;
  box-shadow:0 15px 40px rgba(0,0,0,.34);
}

.sound-chip:hover{
  border-color:rgba(255,184,0,.55);
}

.countdown-pop{
  position:fixed;
  inset:0;
  display:grid;
  place-items:center;
  z-index:60;
  pointer-events:none;
  font-size:110px;
  font-weight:1000;
  color:#ffb800;
  text-shadow:0 0 40px rgba(255,122,0,.85);
  animation:countPop .8s ease-out forwards;
}

@keyframes countPop{
  0%{transform:scale(.65);opacity:0}
  35%{transform:scale(1.05);opacity:1}
  100%{transform:scale(1.4);opacity:0}
}

.reaction-float{
  position:fixed;
  right:28px;
  bottom:90px;
  z-index:50;
  font-size:34px;
  animation:floatUp 1.5s ease-out forwards;
  pointer-events:none;
}

@keyframes floatUp{
  from{transform:translateY(0) scale(.85);opacity:1}
  to{transform:translateY(-160px) scale(1.25);opacity:0}
}

@media(max-width:760px){
  .coin-pill,.user-pill{width:100%;justify-content:center}
  .header-actions{flex-direction:column;align-items:stretch}
  .nav a{padding:8px 0;border-bottom:0}
  .hero h1{font-size:34px}
  .scorebar{grid-template-columns:1fr 70px 1fr;font-size:17px}
  .vote-row{grid-template-columns:1fr}
}


/* =========================================================
   SHITAGRAM™ v34 — PWA Install Theme
   Novo tema: preto/castanho/laranja
   ========================================================= */

.install-section{
  max-width:1120px;
  margin:38px auto 0;
  display:grid;
  grid-template-columns:1.08fr .92fr;
  gap:22px;
  align-items:stretch;
}

.install-card{
  border:1px solid rgba(255,122,0,.18);
  background:
    radial-gradient(circle at 15% 0%,rgba(255,122,0,.13),transparent 35%),
    linear-gradient(180deg,rgba(255,255,255,.035),rgba(255,255,255,.012));
  border-radius:24px;
  padding:26px;
  box-shadow:0 25px 80px rgba(0,0,0,.38);
}

.install-card h2{
  margin:0 0 18px;
  font-size:30px;
  font-weight:1000;
  letter-spacing:-.035em;
}

.install-card p{
  color:rgba(255,247,237,.68);
  line-height:1.5;
  margin:0 0 22px;
}

.install-row{
  min-height:64px;
  border-radius:16px;
  border:1px solid rgba(255,122,0,.15);
  background:rgba(255,122,0,.045);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:18px;
  padding:0 20px;
  margin-bottom:14px;
}

.install-row strong{
  font-size:18px;
}

.install-row span{
  color:rgba(255,247,237,.58);
  text-align:right;
}

.install-actions{
  display:flex;
  gap:14px;
  flex-wrap:wrap;
  margin:18px 0 22px;
}

.install-primary{
  min-width:210px;
  height:62px;
  border:0;
  border-radius:17px;
  background:linear-gradient(90deg,#ffb000,#ff6a00,#f2352f);
  color:#150604;
  font-size:20px;
  font-weight:1000;
  box-shadow:0 18px 50px rgba(255,77,0,.20);
}

.install-secondary{
  min-width:210px;
  height:62px;
  border-radius:17px;
  border:1px solid rgba(255,122,0,.22);
  background:rgba(255,255,255,.035);
  color:#fff7ed;
  font-size:20px;
  font-weight:1000;
}

.install-status{
  min-height:64px;
  border-radius:16px;
  border:1px solid rgba(255,122,0,.15);
  background:rgba(0,0,0,.22);
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:18px;
  padding:0 20px;
  margin-bottom:14px;
}

.install-status strong{
  font-size:18px;
}

.install-status span{
  color:#ffb169;
}

.install-note{
  margin-top:14px;
  padding:14px 16px;
  border-radius:15px;
  background:rgba(255,184,0,.06);
  border:1px solid rgba(255,184,0,.18);
  color:#ffc266;
  font-weight:800;
}

@media(max-width:950px){
  .install-section{
    grid-template-columns:1fr;
  }
}

@media(max-width:600px){
  .install-card{
    padding:20px;
  }
  .install-row,
  .install-status{
    align-items:flex-start;
    flex-direction:column;
    padding:16px;
  }
  .install-row span{
    text-align:left;
  }
  .install-primary,
  .install-secondary{
    width:100%;
    min-width:0;
  }
}

</style>
</head>
<body>
  
<header class="app-header">
  <a class="logo" href="index.html">
    <div class="logo-mark">🔥</div>
    <div><div class="logo-title">SHITAGRAM™</div><div class="logo-sub">BATALHAS DE RECLAMAÇÃO</div></div>
  </a>
  <nav class="nav"><a class="" href="duelos.html"><span>▶️</span>Duelos Ao Vivo</a><a class="" href="temas.html"><span>🎭</span>Temas Absurdos</a><a class="" href="gerar.html"><span>🪄</span>Gerar com IA</a><a class="" href="hall-of-shame.html"><span>🏆</span>Hall of Shame</a><a class="active" href="perfil.html"><span>💩</span>Meu Perfil</a></nav>
  <div class="header-actions">
    <div class="coin-pill">🪙 <span>1,500</span></div>
    <a class="user-pill" href="perfil.html">👤 <span>user_shitagram</span>⌄</a>
  </div>
</header>

  
<main class="container">
  <section class="profile-card panel">
    <div class="avatar-big">👤</div>
    <h1>Reclamante_pq6xo5u</h1>
    <div class="profile-id">ID: user_shitagram_pq6xo5u</div>
    <div class="stats">
      <div class="stat"><b>1,500</b><span>🪙 MOEDAS</span></div>
      <div class="stat"><b>12</b><span>⚔️ DUELOS</span></div>
      <div class="stat"><b>5</b><span>🏆 VITÓRIAS</span></div>
    </div>
    <hr style="border-color:rgba(255,122,0,.18);border-width:0 0 1px">
    <h2 style="text-align:left;margin-top:35px">📜 Minhas Reclamações de IA Históricas</h2>
    <div class="empty"><div style="font-size:62px">💩</div><p>Nenhum conflito absurdo gerado ainda.<br>Vai até à aba “Gerar com IA” ou “Temas Absurdos” para iniciares a tua lenda!</p></div>
  </section>
</main>

  <footer class="footer">
    <strong>🔥 SHITAGRAM™</strong>
    <span>© 2026 SHITAGRAM™. Todos os direitos reservados.</span>
    <span>Regras da Comunidade · Privacidade · Termos de Serviço</span>
  </footer>
  <script>

const themes=[
  {icon:"📦",title:"A Torrada Traidora",cat:"Batalha Gourmet",mission:"Convencer a audiência que uma torrada declarou guerra ao queijo.",bonus:"+500 se mencionares “crime gastronómico”."},
  {icon:"📺",title:"Comando Deprimido",cat:"Drama Doméstico",mission:"Provar que o comando da TV precisa de terapia urgente por desgaste existencial.",bonus:"+300 por cada série arruinada."},
  {icon:"🩴",title:"Chinelo Fugitivo",cat:"Investigação Absurda",mission:"Encontrar o chinelo desaparecido e justificar a sua fuga em busca de liberdade.",bonus:"+700 se culpares o sofá."},
  {icon:"🧦",title:"Seita das Meias",cat:"Teoria da Conspiração",mission:"Acusar a máquina de lavar roupa de tráfico internacional de meias órfãs.",bonus:"+1000 por teoria da conspiração."},
  {icon:"☕",title:"Café Arrogante",cat:"Conflito Social",mission:"Demonstrar que o café expresso tem um complexo de superioridade intolerável.",bonus:"+500 por insulto elegante ao café."},
  {icon:"💇",title:"Revolução Capilar",cat:"Tribunal Doméstico",mission:"Processar o teu próprio cabelo por insubordinação civil ao acordar.",bonus:"+800 se o cabelo criar um mapa."},
  {icon:"🪑",title:"Cadeira Assassina",cat:"Luta pela Sobrevivência",mission:"Defender com provas absolutas que a cadeira de escritório tentou eliminar-te ativamente.",bonus:"+1000 por dramatização exagerada."},
  {icon:"🧊",title:"Frigorífico Sindicalista",cat:"Greve Doméstica",mission:"Negociar novas condições com o teu frigorífico em greve de refrigeração.",bonus:"+600 por discurso sindical."},
  {icon:"📶",title:"Wi-Fi Rebelde",cat:"Cibernética",mission:"Provar que o router da operadora te odeia e só dá boa ligação a desconhecidos.",bonus:"+900 se o router tiver redes sociais."},
  {icon:"🌧️",title:"Bullying Meteorológico",cat:"Litígio Natural",mission:"Processar judicialmente o clima por perseguição emocional e chuva seletiva.",bonus:"+700 por testemunhas meteorológicas."}
];

function $(id){return document.getElementById(id)}
function toast(msg){alert(msg)}

function renderThemes(){
  const list=$("themesList");
  if(!list)return;
  list.innerHTML=themes.map(t=>`
    <article class="theme-card">
      <div class="theme-icon">${t.icon}</div>
      <div>
        <span class="label">${t.cat}</span>
        <h3>${t.title}</h3>
        <p><b>Missão:</b> ${t.mission}</p>
        <div class="bonus">⭐ Bónus: ${t.bonus}</div>
      </div>
      <button class="btn-small" onclick="location.href='duelos.html?tema=${encodeURIComponent(t.title)}'">Jogar PK</button>
    </article>
  `).join("");
}

function sortearTema(){
  const t=themes[Math.floor(Math.random()*themes.length)];
  const box=$("sorteado");
  if(box){
    box.innerHTML=`<div class="dice">${t.icon}</div><h2>${t.title}</h2><p>${t.mission}</p><small>⭐ Bónus: ${t.bonus}</small>`;
  }
}

function vote(side){
  const el=$(side==="a"?"scoreA":"scoreB");
  let value=parseInt(el.textContent.replace(/\D/g,""))||0;
  value+=Math.floor(Math.random()*220)+80;
  el.textContent=value;
  addChat("Sistema", side==="a"?"Reclamante A recebeu uma descarga de indignação!":"Reclamante B subiu no tribunal do absurdo!");
}

function addGift(name,points){
  addChat("Sistema",`Presente enviado: ${name} +${points} pts`);
}

function addChat(user,msg){
  const list=$("chatList");
  if(!list)return;
  const div=document.createElement("div");
  div.innerHTML=`<b>${user}:</b> ${msg}`;
  list.appendChild(div);
  list.scrollTop=list.scrollHeight;
}

function sendChat(){
  const input=$("chatInput");
  if(!input || !input.value.trim())return;
  addChat("Tu",input.value.trim());
  input.value="";
}

document.addEventListener("DOMContentLoaded",()=>{
  renderThemes();
  const input=$("chatInput");
  if(input)input.addEventListener("keydown",e=>{if(e.key==="Enter")sendChat()});
  setInterval(()=>{
    const msgs=[
      "O router espião atua de noite! 👀",
      "O sofá é mesmo culpado do desaparecimento 🩴",
      "Modo gato é real demais! 🐱",
      "Isto merece Hall of Shame! 🏆",
      "Já reiniciaste 10x e nada muda! 😂"
    ];
    if($("chatList"))addChat(["ZeZito_10","Reclama_PT","Humor_Tuga","Improviso_Total"][Math.floor(Math.random()*4)],msgs[Math.floor(Math.random()*msgs.length)]);
  },4500);
});


/* =========================================================
   SHITAGRAM™ v33 — Engine sonora e interações do novo tema
   ========================================================= */

let shitagramAudioCtx = null;
let shitagramSoundOn = true;

function getShitagramAudio(){
  if(!shitagramAudioCtx){
    const A = window.AudioContext || window.webkitAudioContext;
    shitagramAudioCtx = new A();
  }
  if(shitagramAudioCtx.state === "suspended") shitagramAudioCtx.resume();
  return shitagramAudioCtx;
}

function makeOsc(type,freq,duration=.15,gain=.06){
  if(!shitagramSoundOn)return;
  const ctx=getShitagramAudio();
  const t=ctx.currentTime;
  const o=ctx.createOscillator();
  const g=ctx.createGain();
  o.type=type;
  o.frequency.setValueAtTime(freq,t);
  g.gain.setValueAtTime(.0001,t);
  g.gain.exponentialRampToValueAtTime(gain,t+.015);
  g.gain.exponentialRampToValueAtTime(.0001,t+duration);
  o.connect(g);
  g.connect(ctx.destination);
  o.start(t);
  o.stop(t+duration+.03);
}

function makeNoise(duration=.25,filterFreq=260,gain=.06){
  if(!shitagramSoundOn)return;
  const ctx=getShitagramAudio();
  const buffer=ctx.createBuffer(1,ctx.sampleRate*duration,ctx.sampleRate);
  const data=buffer.getChannelData(0);
  for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;
  const src=ctx.createBufferSource();
  const f=ctx.createBiquadFilter();
  const g=ctx.createGain();
  f.type="lowpass";
  f.frequency.value=filterFreq;
  g.gain.setValueAtTime(gain,ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+duration);
  src.buffer=buffer;
  src.connect(f);f.connect(g);g.connect(ctx.destination);
  src.start();
}

function sfx(type){
  if(!shitagramSoundOn)return;
  if(type==="vote"){
    makeOsc("sine",140,.20,.08);
    setTimeout(()=>makeOsc("triangle",320,.12,.04),45);
    makeNoise(.12,380,.025);
  }else if(type==="gift"){
    makeOsc("square",390,.18,.055);
    setTimeout(()=>makeOsc("sawtooth",230,.20,.035),35);
  }else if(type==="bonus"){
    makeOsc("sine",180,.18,.06);
    setTimeout(()=>makeOsc("sine",680,.20,.05),120);
    setTimeout(()=>makeOsc("sine",260,.22,.04),260);
  }else if(type==="ai"){
    makeOsc("triangle",520,.08,.045);
    setTimeout(()=>makeOsc("triangle",760,.08,.045),90);
    setTimeout(()=>makeOsc("triangle",980,.12,.045),180);
  }else if(type==="fart"){
    makeOsc("sawtooth",78,.7,.10);
    makeNoise(.55,150,.10);
  }else if(type==="win"){
    [523,659,784,1046].forEach((n,i)=>setTimeout(()=>makeOsc("triangle",n,.16,.05),i*120));
    setTimeout(()=>makeOsc("sawtooth",260,.55,.05),560);
  }
}

function floatingEmoji(e){
  const d=document.createElement("div");
  d.className="reaction-float";
  d.textContent=e;
  d.style.right=(Math.floor(Math.random()*80)+20)+"px";
  document.body.appendChild(d);
  setTimeout(()=>d.remove(),1500);
}

function showCount(text){
  const d=document.createElement("div");
  d.className="countdown-pop";
  d.textContent=text;
  document.body.appendChild(d);
  setTimeout(()=>d.remove(),800);
}

function toggleSound(){
  shitagramSoundOn=!shitagramSoundOn;
  const btn=document.getElementById("soundToggle");
  if(btn)btn.textContent=shitagramSoundOn?"🔊 Sons absurdos ON":"🔇 Sons OFF";
}

function testSounds(){
  sfx("vote");
  setTimeout(()=>sfx("gift"),450);
  setTimeout(()=>sfx("bonus"),900);
  setTimeout(()=>sfx("ai"),1350);
  setTimeout(()=>sfx("fart"),1800);
  setTimeout(()=>sfx("win"),2800);
}

const oldVote = window.vote;
window.vote = function(side){
  sfx("vote");
  floatingEmoji(side==="a"?"🔥":"💩");
  if(oldVote) oldVote(side);
};

const oldAddGift = window.addGift;
window.addGift = function(name,points){
  sfx("gift");
  floatingEmoji("🎁");
  if(oldAddGift) oldAddGift(name,points);
};

const oldSortearTema = window.sortearTema;
window.sortearTema = function(){
  sfx("bonus");
  floatingEmoji("🎲");
  if(oldSortearTema) oldSortearTema();
};

function gerarIA(){
  const input = document.getElementById("iaInput");
  const result = document.getElementById("iaResult");
  const text = input ? input.value.trim() : "";

  sfx("ai");

  const base = text || "O meu router só funciona quando ninguém precisa dele";

  result.innerHTML = `
    <div class="ai-result">
      <h3>🪄 Reclamação Absurda Gerada</h3>
      <p><strong>Acusação:</strong> ${base}.</p>
      <p><strong>Versão SHITAGRAM™:</strong> Venho por este meio acusar formalmente este objeto de sabotagem emocional, comportamento passivo-agressivo e tentativa clara de me humilhar perante a sociedade moderna.</p>
      <p><strong>Missão:</strong> Defender esta teoria durante 60 segundos sem perder a dignidade.</p>
      <p><strong>Bónus:</strong> +750 se mencionares tribunal, sogra ou fatura da operadora.</p>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded",()=>{
  if(!document.getElementById("soundToggle")){
    const b=document.createElement("button");
    b.id="soundToggle";
    b.className="sound-chip";
    b.textContent="🔊 Sons absurdos ON";
    b.onclick=toggleSound;
    b.ondblclick=testSounds;
    document.body.appendChild(b);
  }
});



/* =========================================================
   SHITAGRAM™ v34 — PWA Install Logic
   ========================================================= */

let deferredInstallPrompt = null;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  updatePwaStatus("Pronta para instalar");
});

window.addEventListener("appinstalled", () => {
  updatePwaStatus("Instalada");
  if(typeof addChat === "function"){
    addChat("Sistema","SHITAGRAM™ instalado como app.");
  }
});

function updatePwaStatus(status){
  const el = document.getElementById("pwaStatusText");
  if(el) el.textContent = status;
}

async function installShitagram(){
  if(deferredInstallPrompt){
    deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice;
    if(choice.outcome === "accepted"){
      updatePwaStatus("Instalação aceite");
    }else{
      updatePwaStatus("Instalação recusada");
    }
    deferredInstallPrompt = null;
    return;
  }

  copyInstallInstructions();
  alert("Se o botão de instalação não aparecer, usa as instruções copiadas para instalar manualmente.");
}

function copyInstallInstructions(){
  const text = `Como instalar o SHITAGRAM™:

Android / Chrome:
Menu ⋮ → Instalar app

iPhone / Safari:
Partilhar → Adicionar ao ecrã principal

Computador:
Clica no ícone de instalar na barra do Chrome/Edge.

Depois de instalada, o SHITAGRAM™ abre como uma app própria, sem parecer apenas uma página do navegador.`;

  navigator.clipboard?.writeText(text);
  if(typeof sfx === "function") sfx("bonus");
  alert("Instruções copiadas.");
}

function setInstallDiagnostics(){
  const sw = document.getElementById("swStatusText");
  const mf = document.getElementById("manifestStatusText");
  const pwa = document.getElementById("pwaStatusText");

  if(sw){
    sw.textContent = "serviceWorker" in navigator ? "Suportado" : "Indisponível";
  }

  if(mf){
    const manifest = document.querySelector('link[rel="manifest"]');
    mf.textContent = manifest ? "Encontrado" : "Embutido/Manual";
  }

  if(pwa && !pwa.textContent.trim()){
    pwa.textContent = "Pronta para instalar";
  }
}

document.addEventListener("DOMContentLoaded", setInstallDiagnostics);

</script>
<script>
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .then(() => {
        const swStatus = document.getElementById("swStatusText");
        if (swStatus) swStatus.textContent = "Ativo";
        const manifestStatus = document.getElementById("manifestStatusText");
        if (manifestStatus) manifestStatus.textContent = "Encontrado";
      })
      .catch(() => {
        const swStatus = document.getElementById("swStatusText");
        if (swStatus) swStatus.textContent = "Erro ao ativar";
      });
  });
}
</script>
</body>
</html>