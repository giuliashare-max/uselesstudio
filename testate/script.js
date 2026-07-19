const verdetti=[
'Hai torto tu. Con convinzione.',
'Ha torto l\'altro. Ma tu non sei innocente.',
'Avete torto entrambi in modo complementare. Siete fatti l\'uno per l\'altro.',
'Torto tuo. La vittima in questa storia è la logica.',
'Torto suo. Ma il modo in cui l\'hai raccontato non ti aiuta.',
'Il torto è condiviso al 50%. Nessuno vince. Nessuno impara.',
'Torto tuo, anche se hai ragione.',
'Ha torto lui. Ma tu hai deciso di avere ragione prima ancora di ascoltare.',
'La risposta è: basta.',
'Questo non è un conflitto. È un\'abitudine. Avete torto entrambi da anni.',
'Torto tecnico tuo, torto morale suo. Pareggiate nella sconfitta.'
];
document.getElementById('btn').onclick=()=>{
  const q=document.getElementById('q').value.trim();
  const v=verdetti[Math.floor(Math.random()*verdetti.length)];
  document.getElementById('out').textContent=q?v:'Descrivi prima il dramma.';
};
