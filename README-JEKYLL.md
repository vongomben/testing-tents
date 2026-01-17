# Eco-Market - Jekyll Site

Sito Jekyll per Eco-Market con prodotti gestiti tramite file YAML in `_posts` e immagini nella cartella `IMG`.

## Struttura del Progetto

```
├── _config.yml          # Configurazione principale Jekyll
├── _layouts/            # Layout HTML
│   ├── default.html
│   └── product.html
├── _includes/           # Componenti riutilizzabili
│   ├── header.html
│   ├── bottom-nav.html
│   ├── impact-card.html
│   ├── new-arrivals.html
│   ├── featured-story.html
│   ├── material-grid.html
│   └── newsletter.html
├── _posts/              # Prodotti come file YAML
│   ├── 2024-01-01-peak-pack.yml
│   ├── 2024-01-02-urban-weaver.yml
│   └── 2024-01-03-trail-wallet.yml
├── IMG/                 # Immagini del sito
│   ├── peak-pack.jpg
│   ├── urban-weaver.jpg
│   ├── trail-wallet.jpg
│   ├── canvas.jpg
│   ├── tents.jpg
│   ├── webbing.jpg
│   ├── textiles.jpg
│   └── story.jpg
├── index.html           # Homepage
└── Gemfile              # Dipendenze Ruby/Jekyll
```

## Installazione

1. **Installa Ruby** (se non già installato):
   - Windows: Scarica da [rubyinstaller.org](https://rubyinstaller.org/)
   - macOS: `brew install ruby`
   - Linux: `sudo apt-get install ruby-full`

2. **Installa Jekyll e le dipendenze**:
   ```bash
   bundle install
   ```

## Come Aggiungere un Prodotto

Crea un nuovo file YAML in `_posts/` con il formato:
```
YYYY-MM-DD-nome-prodotto.yml
```

Esempio (`_posts/2024-01-15-nuovo-prodotto.yml`):
```yaml
---
layout: product
title: Nome Prodotto
id: '4'
material: Materiale
price: 99
image: nome-immagine.jpg
is_limited: false
date: 2024-01-15
category: categoria
tags:
  - tag1
  - tag2
---

Descrizione del prodotto qui.
```

Poi aggiungi l'immagine corrispondente in `IMG/nome-immagine.jpg`.

## Configurazione

Tutte le impostazioni sono in `_config.yml`:
- **Colori**: Modifica `colors`
- **Materiali**: Aggiungi/modifica in `materials`
- **Statistiche Impact**: Modifica `impact`
- **Featured Story**: Modifica `featured_story`

## Sviluppo Locale

Avvia il server Jekyll:
```bash
bundle exec jekyll serve
```

Il sito sarà disponibile su `http://localhost:4000`

## Build per Produzione

Genera il sito statico:
```bash
bundle exec jekyll build
```

I file generati saranno in `_site/`

## Note

- Le immagini vanno nella cartella `IMG/`
- Ogni prodotto è un file YAML in `_posts/`
- La configurazione principale è in `_config.yml`
- I componenti riutilizzabili sono in `_includes/`

