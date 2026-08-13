# 🌙 Happy Birthday, Priya — A Midnight Garden

A small, private birthday website built as a click-through experience (no endless
scrolling) — each page opens after you press the button, with a little
celebration burst (confetti + rising lanterns) on every click. It's gated
behind a birthdate lock so it only opens for the right person.

## ✨ Features

- **Locked gate page** — only unlocks when the correct birthdate is entered
- **Click-to-advance pages**, not a long scroll: Welcome → Reasons → Memories →
  Wishes → Cake → Finale
- **Celebration burst** (confetti + floating lanterns) on every button click
- **Memory / photo gallery page** with 6 ready-made photo slots and editable
  captions
- **Interactive candle-blowing** on the cake page
- **Wish carousel** with arrows + dots
- Fully responsive, keyboard-accessible, respects `prefers-reduced-motion`
- Zero build step, zero dependencies — just static HTML/CSS/JS

## 📁 Project structure

```
priya-birthday-website/
├── index.html          # all pages/sections live here
├── css/
│   └── style.css       # "midnight garden" theme, animations, layout
├── js/
│   └── script.js       # navigation, gate logic, celebration effects
├── images/
│   └── README.md       # where to drop your photos
└── README.md
```

## 🔐 Changing the unlock date

Open `js/script.js` and edit this line near the top:

```js
const CORRECT_BIRTHDATE = "2004-07-13"; // format: yyyy-mm-dd
```

## 🖼️ Adding photos to the Memories page

Drop up to 6 images into the `images/` folder named exactly:

```
memory1.jpg
memory2.jpg
memory3.jpg
memory4.jpg
memory5.jpg
memory6.jpg
```

Any slot without a matching file automatically shows a soft placeholder, so
you can add photos gradually — no code changes needed. Captions under each
photo are directly editable in the browser (click the caption text).

## ✏️ Editing the words

All copy — the reasons list, the wishes carousel, the final message — lives
directly in `index.html` inside clearly labeled `<section>` blocks. Just
open the file in any text editor and change the text between the tags.

## 🚀 Running it locally

No build tools needed. Just open `index.html` in a browser, or serve it
locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 🌐 Deploying on GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Set the source to the `main` branch, root folder.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

---

Made with care, for Priya's birthday. 🎂
