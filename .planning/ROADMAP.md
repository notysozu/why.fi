# Roadmap: Meme Expression Analyzer

## Overview

We are building a highly interactive, real-time gamified application that traps users in a meme-fueled expression challenge. The journey goes from capturing the user’s continuous webcam feed over WebSockets, evaluating their facial expressions using MediaPipe on the backend, tying those expressions to a "Why Meter" and reactive UI, and finally putting them in a "hostile UX" trap they must mimic their way out of.

## Phases

- [ ] **Phase 1: Foundation & Streaming** - Setup React client, FastAPI server, and real-time WebSockets.
- [ ] **Phase 2: ML Engine Integration** - Process live video with MediaPipe to generate emotion scores.
- [ ] **Phase 3: Gamified Responses** - Build the dynamic Why Meter, meme canvas, and challenge UI.
- [ ] **Phase 4: The Trap** - Lock down the UX and enforce the exit challenge.

## Phase Details

### Phase 1: Foundation & Streaming
**Goal**: Establish the base client-server architecture with ultra-low latency bridging.
**Depends on**: Nothing
**Requirements**: CAP-01, CAP-02
**Success Criteria** (what must be TRUE):
  1. User is prompted for camera access, and a local feed is visible on screen.
  2. The React client establishes and holds a WebSocket connection to FastAPI.
  3. Frame data (or client-evaluated landmarks) flows continuously to the backend.
**Plans**: TBD

Plans:
- [x] 01-01: Create baseline React app and FastAPI server structure.
- [x] 01-02: Implement WebRTC capture on the frontend.
- [x] 01-03: Implement the WebSocket connection loop (Client/Server).

### Phase 2: ML Engine Integration
**Goal**: The server analyzes incoming frames to derive the "Why Meter" and expression matching.
**Depends on**: Phase 1
**Requirements**: ML-01, ML-02, ML-03
**Success Criteria** (what must be TRUE):
  1. The server successfully passes frame data through MediaPipe.
  2. The server correctly identifies specific emojis (happy, sad, etc.) from the stream.
  3. A continuous JSON stream containing the Why Meter score and matched emojis is returned to the client.
**Plans**: TBD

Plans:
- [x] 02-01: Integrate MediaPipe for landmark extraction in FastAPI.
- [x] 02-02: Build heuristic functions for "Why Meter" and Emoji matching.
- [x] 02-03: Pipe ML results back into the WebSocket response.

### Phase 3: Gamified Responses
**Goal**: Make the interface vividly react to the user’s expressions and run the mimic challenge.
**Depends on**: Phase 2
**Requirements**: UI-01, UI-02, UI-03, UI-04
**Success Criteria** (what must be TRUE):
  1. The "Why Meter" dynamically jumps based on WebSocket data.
  2. A meme and corresponding audio sound loop/shift according to the emotional breakdown.
  3. An "Emoji Mimicry Challenge" sequence prompts the user and advances upon success.
**Plans**: TBD

Plans:
- [x] 03-01: Design the live Why Meter and Meme Canvas component.
- [x] 03-02: Integrate the native HTML5 Audio engine for meme reactions.
- [ ] 03-03: Implement the state machine for the 5-emoji Mimicry Challenge and Results Screen.

### Phase 4: The Trap
**Goal**: Introduce the hostile UX to prevent users from leaving effortlessly.
**Depends on**: Phase 3
**Requirements**: UX-01, UX-02, UX-03
**Success Criteria** (what must be TRUE):
  1. The app starts with a mandatory "Enter the Trap" button to unlock browser policies.
  2. Keyboard shortcuts like 'ESC' are intercepted.
  3. Attempting to click away/close triggers a modal warning that can only be dismissed by finishing the challenge.
**Plans**: TBD

Plans:
- [x] 04-01: Build the 'Enter the Trap' landing gate and browser API unlocking.
- [x] 04-02: Add window event listeners to intercept exit attempts.
- [ ] 04-03: Combine the warning modal with the Emoji mimicry escape mechanics.

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation & Streaming | 0/3 | Not started | - |
| 2. ML Engine Integration | 0/3 | Not started | - |
| 3. Gamified Responses | 0/3 | Not started | - |
| 4. The Trap | 0/3 | Not started | - |
