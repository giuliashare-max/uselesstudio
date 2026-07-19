const risposte=[
'Niente.',
'.',
'…',
'Proprio niente.',
'Neanche questo.',
'No.',
'(silenzio)',
'Nulla di nulla.',
'Zero. Assoluto.',
'—',
'Ti aspettavi qualcosa?',
'Niente di niente di niente.'
];
let count=0;
document.getElementById('btn').onclick=()=>{
  document.getElementById('out').textContent=risposte[count%risposte.length];
  count++;
};
