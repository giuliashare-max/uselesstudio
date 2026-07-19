const risposte=['No.','Assolutamente no.','No, ma con convinzione.','Neanche per sbaglio.','Direi di no. E lo direi forte.','No. Il comitato ha deciso.','No, e non insistere.','Non oggi, non domani, non in questa timeline.'];
document.getElementById('btn').onclick=()=>document.getElementById('out').textContent=risposte[Math.floor(Math.random()*risposte.length)];
