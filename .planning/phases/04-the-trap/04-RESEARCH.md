# Phase 4 Research: The Trap (Hostile UX)

## Objective
Research how to implement an entry gate that unlocks browser APIs, block exit attempts, and conditionally allow exiting only when a game score is met.

## Initial "Enter the Trap" Gate (UX-01)
- **Concept:** Browsers block programmatic fullscreen and audio autoplay without user interaction.
- **Implementation:** 
  - Render an initial splash screen with a single button: "Enter the Simulation".
  - On click, trigger `document.documentElement.requestFullscreen()` and conditionally render the `WebcamCapture` component.

## Blocking Exit Keybindings (UX-02)
- **Concept:** Prevent the user from using `Esc` to exit fullscreen to the extent possible, or at least re-trigger warnings when they try.
- **Implementation:**
  - Add a `keydown` event listener for `Escape`.
  - Listen to `fullscreenchange` events on `document`. If the user manually exits fullscreen before winning, overlay a massive red text warning: "DO NOT ESCAPE".

## The Escape Challenge (UX-03)
- **Concept:** The user cannot logically "quit" the game until they beat the required score.
- **Implementation:**
  - Modify the "Quit" button logic. If `gameScore < 5`, attempting to leave triggers the evasion logic or shows a warning.
  - If `gameScore >= 5`, they are allowed to click "Quit", which stops the webcam tracks, closes the websocket, and renders a "You are free" end screen.

## Validation Architecture
- **Manual Verification:** Browser security rules prevent fully automating full screen and camera permissions. Manual testing is required to verify the flow of the entry gate, the fullscreen lock, and the exit condition.
