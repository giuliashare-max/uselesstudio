const letters=[
`Gentile Azienda,\n\ncon la presente rassegno le mie dimissioni.\n\nDopo l'ennesimo "facciamo un ultimo giro di feedback", ho capito che l'ultimo giro non sarebbe mai stato l'ultimo. Ora vivo in una v13 definitiva.\n\nCordiali saluti.`,
`Gentile Azienda,\n\nmi dimetto per motivi spirituali.\n\nOgni volta che qualcuno dice "sinergia" perdo un anno di vita e ieri, durante la call, sono diventato medievale.\n\nCordiali saluti.`,
`Gentile Azienda,\n\nnon posso più partecipare a riunioni che potevano essere un'email.\n\nMi trasferisco direttamente nella cartella Posta inviata.\n\nCordiali saluti.`,
`Gentile Azienda,\n\nho deciso di lasciare il mio ruolo.\n\nDurante l'ultima call di allineamento mi sono disallineato. Ora vivo sotto il tavolo della sala riunioni.\n\nCordiali saluti.`,
`Gentile Azienda,\n\nho accettato un nuovo incarico come consulente strategico di una pianta grassa.\n\nHa una visione più chiara della roadmap.\n\nCordiali saluti.`,
`Gentile Azienda,\n\nlascio questa realtà per un ambiente meno tossico.\n\nUn vulcano attivo.\n\nCordiali saluti.`,
`Gentile Azienda,\n\nil mio calendario Outlook risulta occupato fino al 2034.\n\nPreferisco cambiare pianeta prima del prossimo touchpoint.\n\nCordiali saluti.`,
`Gentile Azienda,\n\nmi è stato chiesto di essere più proattivo.\n\nHo anticipato tutti. Mi sono licenziato.\n\nCordiali saluti.`,
`Gentile Azienda,\n\ndopo l'ottantaduesimo feedback "manca un po' di wow", ho deciso di trasferirmi alle Cascate del Niagara.\n\nLì il wow è garantito.\n\nCordiali saluti.`,
`Gentile Azienda,\n\nnon condivido più la strategia secondo cui qualsiasi problema possa essere risolto creando un nuovo gruppo Teams.\n\nUno dei gruppi mi ha appena nominato amministratore della sua vita.\n\nCordiali saluti.`
];
document.getElementById('btn').onclick=()=>{document.getElementById('letter').textContent=letters[Math.floor(Math.random()*letters.length)]};
