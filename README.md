# Supriya Valentine 💝

A romantic web app to ask your special someone to be your Valentine.  
Your partner answers a **love check quiz**, then plays a **heart-shaped memory game** with your photos. When all pairs are matched, a beautiful proposal screen with animations is revealed.

## Features ✨

- **Love Check Quiz** - Custom questions that must be answered correctly to proceed
- **Heart-shaped Memory Game** - 36 cards (18 pairs) arranged in a heart shape
- **Photo Collage Background** - Beautiful grid of your photos as a subtle background
- **Animated Proposal** - Interactive proposal with smooth animations
- **Responsive Design** - Works on both desktop and mobile devices

## Technologies Used

- ⚛️ Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 🎭 Framer Motion for animations
- 🖼️ Next.js Image Optimization
- 🔥 Fireworks animation

## Getting Started 🚀

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aashishgrinds/Supriya-valentine.git
   cd Supriya-valentine
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Add your photos to the `public/game-photos` directory (name them 1.jpeg, 2.jpeg, etc.)

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

- Update questions in `src/components/LoveCheckQuiz.tsx`
- Modify the heart layout in `src/components/PhotoPairGame.tsx`
- Adjust animations and timings as needed
- Update the proposal text in `src/components/ValentinesProposal.tsx`

## How It Works

1. User answers quiz questions
2. Upon successful completion, the memory game starts
3. User matches photo pairs in a heart-shaped grid
4. When all pairs are matched, the proposal is revealed
5. User can accept or reject the proposal (with a fun animation)

## License

This project is open source and available under the [MIT License](LICENSE).

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
