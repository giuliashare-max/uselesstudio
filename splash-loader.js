/* ============================================================
   USELESS STUDIO — Splash loader
   Mostra una splash animation a caso dalla cartella /splash
   OGNI VOLTA che si carica/ricarica la home.

   La durata NON è imposta da qui: ogni splash finisce quando
   finisce la SUA animazione (o l'interazione, per quelle a quiz/
   gioco) e lo segnala da sola con:
     window.parent.postMessage('splash-done', '*')
   Questo loader si limita ad ascoltare quel segnale.

   Per aggiungere una splash: metti il file .html in /splash/ e fai push.
   Per rimuoverla: cancella il file da /splash/ e fai push.
   Il manifest si aggiorna da solo (vedi .github/workflows/splash-manifest.yml).
   ============================================================ */
(function () {
  // fallback di SICUREZZA, non una durata: serve solo a evitare che il sito
  // resti bloccato se una splash interattiva non viene mai completata
  // (es. l'utente non clicca/gratta) o se qualcosa si rompe.
  var SAFETY_MS = 25000;

  // overlay creato subito, PRIMA di qualsiasi fetch, così parte istantaneo
  var overlay = document.createElement('div');
  overlay.id = 'us-splash-overlay';
  overlay.style.cssText =
    'position:fixed;top:0;right:0;bottom:0;left:0;width:100%;height:100%;' +
    'z-index:2147483647;background:#fff;display:flex;' +
    'align-items:center;justify-content:center;overflow:hidden;' +
    'transform:translateZ(0);-webkit-transform:translateZ(0);';

  var frame = document.createElement('iframe');
  frame.id = 'us-splash-frame';
  frame.style.cssText = 'display:block;width:100%;height:100%;border:0;background:#fff;';
  frame.setAttribute('title', 'Splash Useless Studio');
  overlay.appendChild(frame);

  // il div va dentro <body> (non su <html>, che sarebbe HTML non valido
  // e su Safari/iOS può comportarsi in modo incoerente con position:fixed)
  document.body.prepend(overlay);

  var done = false;
  function dismiss() {
    if (done || !overlay.parentNode) return;
    done = true;
    // congela TUTTE le animazioni in corso dentro l'iframe esattamente
    // all'istante del segnale di fine: se un'animazione della splash non
    // ha "forwards" su qualche elemento, altrimenti scatterebbe indietro
    // al fotogramma iniziale proprio in questo momento. Mettendole in
    // pausa qui, il fotogramma resta bloccato dov'era (sul logo).
    try {
      var animDoc = frame.contentDocument;
      if (animDoc && animDoc.getAnimations) {
        animDoc.getAnimations().forEach(function (a) { a.pause(); });
      }
    } catch (e) {}
    // dissolvenza diretta e morbida dalla splash alla home: ora che il
    // logo resta fermo (non si ri-nasconde più da solo), non serve più
    // coprire tutto con un velo bianco pieno prima di rivelare la home.
    overlay.style.transition = 'opacity .3s ease';
    overlay.style.opacity = '0';

    setTimeout(function () {
      overlay.remove();
    }, 350);
  }

  // la splash segnala da sola quando la SUA animazione/interazione è finita
  window.addEventListener('message', function (e) {
    if (e.data === 'splash-done') dismiss();
  });

  // rete di sicurezza, non un timer di durata "normale"
  var safety = setTimeout(dismiss, SAFETY_MS);

  fetch('splash/manifest.json', { cache: 'no-store' })
    .then(function (r) { return r.json(); })
    .then(function (list) {
      if (!Array.isArray(list) || list.length === 0) {
        clearTimeout(safety);
        dismiss();
        return;
      }

      var tried = [];

      function tryPick() {
        if (done) return;
        var remaining = list.filter(function (f) { return tried.indexOf(f) === -1; });
        if (remaining.length === 0) {
          clearTimeout(safety);
          dismiss();
          return;
        }
        var pick = remaining[Math.floor(Math.random() * remaining.length)];
        tried.push(pick);
        loadAndVerify(pick);
      }

      function loadAndVerify(pick) {
        frame.onload = function () {
          if (done) return;
          var isBroken = false;
          try {
            var doc = frame.contentDocument;
            if (doc && /useless studio/i.test(doc.title || '') &&
                doc.querySelector('#spinBtn')) {
              isBroken = true;
            }
          } catch (e) {}
          if (isBroken) tryPick();
        };
        frame.src = 'splash/' + pick;
      }

      tryPick();
    })
    .catch(function () {
      clearTimeout(safety);
      dismiss();
    });
})();
