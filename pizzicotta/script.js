const risposte=[
'La risposta è dentro di te. E anche fuori. Non fa differenza.',
'Tutto è connesso, tranne quello che non lo è.',
'Il dubbio è la risposta. La domanda era già la risposta.',
'Esisti. Per ora è sufficiente.',
'La Filosofa ha meditato e ha deciso di non rispondere. È già una risposta.',
'Il senso si trova dove non lo cerchi. Smetti di cercare.',
'Hai fatto la domanda giusta. La risposta sbagliata arriverà presto.',
'L\'universo ha sentito. Ha scrollato le spalle.',
'Prima di rispondere: sei sicura di voler sapere?',
'La verità è scomoda. Siediti comunque.',
'Niente è come sembra, tranne le cose che sono esattamente come sembrano.',
'Pizzicotta dice: lascia perdere. Ma con profondità.'
];
document.getElementById('btn').onclick=()=>{
  const q=document.getElementById('q').value.trim();
  const r=risposte[Math.floor(Math.random()*risposte.length)];
  document.getElementById('out').textContent=q?r:'La Filosofa aspetta la tua domanda.';
};
