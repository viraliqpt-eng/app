
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
