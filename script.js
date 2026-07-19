const games=[
{title:'LICENZIATI',label:'corporate exit generator',desc:'Lettere di dimissioni formalissime. Motivazioni sbagliatissime.',url:'https://licenziati.uselesstudio.com'},
{title:'NIENTE',label:'esperienza minimalista',desc:'Tu premi il microfono. Lei dice "non ho niente". L\'app finge di capirci qualcosa.',url:'https://niente.uselesstudio.com',direct:true},
{title:'COSE INUTILI DA SAPERE',label:'cultura generale che non ti serve',desc:'100 definizioni.\n1 sola vita.',url:'https://coseinutilidasapere.uselesstudio.com'},
{title:'PICCIONE VIAGGIATORE',label:'messaggero d\'altri tempi',desc:'Sistema di messaggistica lenta.',url:'https://piccione-viaggiatore.com'},
{title:'FONT DETECTIVE',label:'investigatore tipografico',desc:'Se ti dico Sans Serif cosa mi dici?',url:'https://fontdetective.uselesstudio.com'},
{title:'FINAL',label:'',desc:'Sai trovare il file giusto?',url:'https://final.uselesstudio.com'}
];

const title=document.getElementById('gameTitle'),
      desc=document.getElementById('gameDesc'),
      ticker=document.getElementById('ticker'),
      card=document.getElementById('gameCard'),
      spin=document.getElementById('spinBtn'),
      grid=document.getElementById('grid');

let selected=null,spinning=false,queue=[];

function shuffle(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function nextGame(){if(queue.length===0){queue=shuffle(games);if(selected&&queue[0]===selected)queue.push(queue.shift())}return queue.shift()}
function wrapUrl(g){return g.direct?g.url:'gioca.html?url='+encodeURIComponent(g.url)+'&name='+encodeURIComponent(g.title)}

games.forEach((g,i)=>{
  const a=document.createElement('a');
  a.className='mini';
  a.href=wrapUrl(g);
  if(g.direct){a.target='_blank';a.rel='noopener';}
  a.innerHTML=`<span class="mini-num">0${i+1}</span><h3>${g.title}</h3><p>${g.desc}</p><span class="mini-arrow">↗</span>`;
  grid.appendChild(a);
});

function show(g){
  title.textContent=g.title;
  desc.textContent=g.desc;
  ticker.textContent='TOCCA LA CARD PER GIOCARE';
  card.classList.add('playable');
  selected=g;
}

spin.addEventListener('click',()=>{
  if(spinning)return;
  spinning=true;
  const result=nextGame();
  card.classList.remove('playable');
  card.classList.add('spinning');
  let count=0;
  const total=22+Math.floor(Math.random()*12);
  const timer=setInterval(()=>{
    const g=games[Math.floor(Math.random()*games.length)];
    title.textContent=g.title;
    desc.textContent=g.desc;
    ticker.textContent='GIRANDO...';
    count++;
    if(count>=total){
      clearInterval(timer);
      card.classList.remove('spinning');
      spinning=false;
      show(result);
    }
  },80);
});

card.addEventListener('click',()=>{
  if(!spinning&&selected){
    if(selected.direct){window.open(wrapUrl(selected),'_blank','noopener');}
    else{location.href=wrapUrl(selected);}
  }
});
