---
wave: 1
depends_on: []
files_modified:
  - frontend/index.html
  - frontend/src/index.css
  - frontend/src/App.css
  - frontend/src/components/WebcamCapture.tsx
autonomous: false
requirements_addressed:
  - UI-01
  - UI-02
  - UI-03
  - UI-04
  - UI-05
  - UI-06
  - UX-01
  - UX-02
  - UX-03
  - UX-04
  - SCR-01
---

# Plan 1: Gameplay UI Overhaul

<objective>
Refactor `WebcamCapture.tsx` and global stylesheets to implement the "meme-control-room" / retro-arcade aesthetic. Add a CRT scanline effect, pixel-art typography, and game-like motion for state transitions while preserving all core logic.
</objective>

<tasks>

<task>
<description>Update index.html and stylesheets with retro typography and CRT effects</description>
<read_first>
- frontend/index.html
- frontend/src/index.css
- frontend/src/App.css
</read_first>
<action>
1. In `frontend/index.html`, add `<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&family=Inter:wght@400;700&display=swap" rel="stylesheet" />` to the `<head>`.
2. In `frontend/src/index.css`, define the CSS variables for the color palette:
   - `--bg-dark: #0a0a0f;`
   - `--brand-primary: #ff0055;`
   - `--brand-secondary: #00ffcc;`
   - `--brand-accent: #ffcc00;`
   - `--panel-bg: rgba(20, 20, 30, 0.85);`
   - `--border-radius: 8px;`
3. Add a `.crt-overlay` class to `index.css` that contains a repeating linear-gradient scanline pattern and a subtle keyframe animation for flicker. Ensure it has `pointer-events: none;` and sits fixed over the entire viewport.
4. Set the global `body` font-family to 'Inter', with headings and specific retro elements using 'VT323' or 'Press Start 2P'.
5. Update `frontend/src/App.css` to ensure full viewport height, hidden scrollbars where unnecessary, and a base dark background taking `--bg-dark`.
</action>
<acceptance_criteria>
- File `frontend/index.html` contains `<link href="https://fonts.googleapis.com/css2`
- File `frontend/src/index.css` contains `.crt-overlay`
- File `frontend/src/index.css` contains `--brand-primary: #ff0055`
</acceptance_criteria>
</task>

<task>
<description>Redesign WebcamCapture structure with meme-control-room aesthetic</description>
<read_first>
- frontend/src/components/WebcamCapture.tsx
</read_first>
<action>
1. In `frontend/src/components/WebcamCapture.tsx`, open the main `return` statement and add `<div className="crt-overlay"></div>` within the `webcam-shell` root div.
2. Refactor existing CSS classes and JSX layout to reflect an arcade/control-room setup.
3. Update `webcam-shell` style to use CSS Grid/Flexbox that centers the `overlay-container` in an immersive view.
4. Replace the inline width fill of the `.why-meter-fill` with a chunky retro segmented progress bar or dashed neon line style via CSS inside `App.css` or `index.css`.
5. Enhance `.live-metric-card` with glowing neon borders (e.g. `box-shadow: 0 0 10px var(--brand-secondary)`) and bold contrast typography using 'VT323'.
6. Add success animation classes. When `isCooldown` becomes true, toggle a CSS class (e.g., `.match-success-flash`) on the `video-stage` wrapper for a flashy arcade transition effect.
7. Replace the `.capture-card` white backgrounds with dark translucent panels, glowing edges, and monospace fonts to avoid feeling like a generic SaaS dashboard.
</action>
<acceptance_criteria>
- File `frontend/src/components/WebcamCapture.tsx` contains `<div className="crt-overlay"></div>`
- React compiles successfully (e.g. running `npm run build` in `frontend` exits with 0).
</acceptance_criteria>
</task>

</tasks>

<verification>
1. Start the React dev server from `frontend/` directory (`npm run dev`).
2. Open the browser and accept webcam permissions.
3. Visually verify the CRT scanlines are visible on the screen.
4. Verify the camera feed is centered and wrapped in a chunky border.
5. Verify the fonts are pixel-art and not default sans-serif.
6. Check that capturing a photo triggers the cooldown state and the progress steps increment.
</verification>

<must_haves>
- The UI MUST display the webcam feed, live metrics, target expression, and captured photos.
- The UI MUST use pixel-art/retro typography.
- The UI MUST incorporate the `.crt-overlay` effect.
- The layout MUST NOT resemble a generic SaaS dashboard (flat white cards).
</must_haves>
