# Supriya Valentine 💝

A custom, romantic web app to ask your special someone to be your Valentine.  
Your partner first answers a small **love check quiz**, then plays a **heart‑shaped memory game**; when all photo pairs are matched, a surprise proposal screen with cute animations is revealed.

![Game preview](public/github-demo.gif)

---

## Demo 🎮

- Deployed URL (Vercel or similar): _add your link here once deployed_

---

## Features ✨

- **Love Check Quiz** – short, custom questions that must be answered before the game unlocks (`src/components/LoveCheckQuiz.tsx`).
- **Heart‑shaped memory game** – 36 cards laid out as a heart, using your own photos (`src/components/PhotoPairGame.tsx`).
- **Photo‑based proposal screen** – a final view with:
  - Fireworks animation on “Yes”
  - A playful “No” button that runs away
  - Cute hamster images and GIFs
- **Romantic copy + typography** – Playfair Display headings and soft dark theme.
- **Background photo behind the game** – easily swap in one of your own pictures.
- Built with **Next.js App Router**, **React**, **Tailwind CSS**, **Framer Motion**, and **Fireworks.js**.

---

## Getting Started 🚀

### 1. Clone and install

```bash
git clone https://github.com/aashishgrinds/Supriya-valentine.git
cd Supriya-valentine

npm install
# or
yarn install
```

### 2. Run the dev server

```bash
npm run dev
# or
yarn dev
```

Then open `http://localhost:3000` in your browser.

> Recommended: Node.js **18.18+**.

---

## Customization 🎨

### Photos for the memory game

- Add your own images to `public/game-photos/`.
- Replace `1.avif` through `36.avif` with your photos (keep the same names).
- For best results, use square images of similar size; `.avif` works great for performance.

### Quiz questions

- Edit the quiz configuration in `src/components/LoveCheckQuiz.tsx` (`QUIZ_CONFIG.questions`).
- Change the questions, placeholders, and correct answers to match your story.

### Proposal text and behaviour

- Update the copy and behavior in `src/components/ValentinesProposal.tsx`:
  - Headings and messages for each step.
  - Fireworks behavior when “Yes” is clicked.
  - Any extra images or inside jokes you want to show.

### Heart screen text

- Edit the bottom‑screen prompts in `src/components/TextFooter.tsx`  
  (e.g., “Match the photo pairs / to reveal the surprise”).

### Background image for the pair game

- The faded background photo for the game view is controlled in `src/app/page.tsx`:
  - `--bg-image`: points at an image under `public/` (for example `"/game-photos/1.avif"`).
  - `--bg-opacity`: tweak between `0` and `0.3` for how strong the image appears.

### Styling

- Global theme tokens and quiz styling live in:
  - `src/app/globals.css` (`.love-theme` and helpers).
  - Tailwind config: `tailwind.config.ts`.
- You can safely adjust colors, radii, and shadows to make the experience match your vibe.

---

## Project Structure 🗂

- `src/app/page.tsx` – main flow: quiz → game → proposal.
- `src/components/LoveCheckQuiz.tsx` – intro quiz logic and layout.
- `src/components/PhotoPairGame.tsx` – memory game grid and matching logic.
- `src/components/ValentinesProposal.tsx` – final proposal steps, fireworks, and hamster fun.
- `src/components/TextFooter.tsx` – instructional text along the bottom of the game screen.
- `public/game-photos/` – all memory‑game photos.

---

## Tech Stack 💻

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Fireworks.js](https://fireworks.js.org/)

