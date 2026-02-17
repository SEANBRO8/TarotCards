# Tarot Divination

A beautifully crafted online Tarot card divination app built with React, featuring the classic Rider-Waite Tarot deck for an immersive reading experience.

## Features

- **Full 78-Card Deck** — 22 Major Arcana + 56 Minor Arcana (Wands, Cups, Swords, Pentacles)
- **Three Spread Types** — Single card, Love spread (two cards), Three-card spread (Past / Present / Future)
- **3D Card Carousel** — Drag-to-scroll with inertia, snapping, and infinite loop
- **Upright & Reversed** — Each card is randomly drawn upright or reversed with distinct interpretations
- **Classic Card Art** — Public domain Rider-Waite Tarot illustrations from Wikimedia Commons
- **Dynamic Visual Effects** — Sparkle effects for positive cards, warm encouragement for challenging ones
- **Starry Night Theme** — Mystical animated starfield background
- **Responsive Design** — Fully optimized for both desktop and mobile

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for production

```bash
npm run build
```

Output goes to the `dist/` directory.

## Tech Stack

- **React 19** — UI framework
- **Vite 7** — Build tool with lightning-fast HMR
- **CSS3** — 3D transforms, animations, gradients
- **Canvas API** — Particle sparkle effects

## Project Structure

```
src/
├── main.jsx              # App entry point
├── App.jsx               # Root component & page state management
├── App.css               # Global & component styles
├── index.css             # Base styles & CSS variables
├── components/
│   ├── Landing.jsx       # Home — choose a spread type
│   ├── Question.jsx      # Question — enter your question
│   ├── DrawCards.jsx     # Draw — 3D card carousel
│   ├── Result.jsx        # Result — card reveals & interpretations
│   └── Stars.jsx         # Animated starfield background
└── data/
    ├── tarotCards.js      # Full 78-card dataset with meanings
    └── cardImages.js      # Card image URL mappings
```

## How It Works

1. **Choose a spread** — Single / Love / Three-card
2. **Ask your question** (optional) — Type in what you'd like guidance on
3. **Draw your cards** — Swipe through the carousel and tap to select
4. **View your reading** — Cards flip to reveal artwork and detailed interpretations

## License

This project is open source. Tarot card images are sourced from [Wikimedia Commons](https://commons.wikimedia.org/) and are in the public domain.

---

*May the stars guide your path* ✨
