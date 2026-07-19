# Useless Studio

Homepage roulette per micro-app inutili ma necessarie.

## Struttura

```
index.html      # Homepage con roulette e lista giochi
gioca.html      # Wrapper per aprire i giochi in iframe
style.css       # Stili globali
script.js       # Logica roulette e array dei giochi
manifest.json   # PWA manifest
icons/          # Icone app (512, 192, apple-touch-icon, favicon)
```

## Aggiungere un gioco

Aggiungi un oggetto all'array `games` in `script.js`:

```js
{
  title: 'NOME GIOCO',
  label: 'sottotitolo breve',
  desc: 'Descrizione breve.',
  url: 'https://tuo-gioco.replit.app',
  direct: true   // apre direttamente il link esterno (opzionale)
}
```

Se `direct` non è impostato, il gioco si apre dentro `gioca.html` via iframe.
