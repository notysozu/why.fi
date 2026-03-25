# Phase 3 Research: Interactive Target Challenge UI

## Objective
Research the technical approach to building the "digital clown" interface over the webcam feed, the responsive Why Meter, the repeating emoji mimicry challenges, and the hostile UX mechanisms in React.

## UI Overlay (UI-01)
- **Concept:** The webcam video (`<video>`) acts as the background. UI elements (Why Meter, instructions, current target emoji, and exit button) are absolutely positioned on top.
- **Implementation:** Wrap the `WebcamCapture` component in a relative container. Use z-index for UI layers. Ensure the video fits the screen or container while preserving aspect ratio.

## The Why Meter (UI-02)
- **Concept:** A gauge or progress bar that visually represents the `why_score` (0-100) returned from the WebSocket.
- **Implementation:** React state `whyScore` updates on every WebSocket message. A simple CSS transition on a width property (for a bar) provides smooth real-time animation.
- **Logic:** The meter must aggressively react to the data to feel "judgy." Fast transition times (~100ms) will match the socket emit rate.

## Match the Emoji Mini-Game (UI-03)
- **Concept:** The app displays a target emoji (e.g., 😲). The user must mimic it. The backend identifies the user's expression. If `user_emoji == target_emoji`, success!
- **Implementation:** 
  - Define an array of targets: `['happy', 'sad', 'angry', 'surprise', 'neutral']`.
  - State: `currentTarget` (string), `score` (int), `message` (string).
  - Game Loop: When the incoming WebSocket `emoji` matches the `currentTarget`, increment the score, show a visual reward, and pick a new target.

## Hostile UX (UI-04)
- **Concept:** The user is trapped until they win. The "Quit" button is barely functional.
- **Implementation:**
  - An "Exit" or "Stop" button that uses `onMouseEnter` to randomly change its CSS `top`/`left` coordinates.
  - Require a high score (e.g., 5 successful emojis) to unlock a static, clickable exit button.
  - Display passive-aggressive text prompts dynamically based on the Why Meter getting too high (e.g., "Are you even trying?", "So boring.").

## Validation Architecture
- Verify the overlay renders correctly on top of the video feed.
- Verify state updates smoothly without causing infinite re-renders when parsing the high-frequency WebSocket stream.
- Test the game logic independently by mocking the WebSocket response locally.
