# Architecture Research

## Component Boundaries
- **Client Application (React)**: Handles webcam interface, canvas rendering, keyboard event capturing, and playing audio. It is the strict presentation and capture layer.
- **Server Application (FastAPI)**: Manages WebSocket connections and acts as the bridge to the ML Engine.
- **ML Engine (MediaPipe + Heuristics)**: Statelessly evaluates incoming frames (or coordinates) to compute boredom, confusion, dread, and "Why Meter" scores.

## Data Flow
1. **Per-frame loop**: Client web camera detects movement.
2. Client sends compressed lightweight frame (or pre-computed landmarks if MediaPipe runs client-side) via **WebSockets**.
3. FastAPI receives payload, invokes Face Analyzer functions.
4. ML engine evaluates the target metrics (e.g., target emotion matching for the escape challenge).
5. Output JSON generated and pumped back through WebSocket.
6. React state updates -> "Why Meter" changes, Meme updates, sounds trigger.

## Suggested Build Order
1. Stand up basic React client and FastAPI server skeleton.
2. Establish reliable, 30fps+ bidirectional WebSocket communication.
3. Integrate ML extraction logic (MediaPipe/heuristics) in the FastAPI backend path.
4. Wire up the Frontend UI (Meme Canvas, Metrics Panel) to react to WebSocket metrics.
5. Introduce gamification logic (Emoji Mimicry Challenge) and trap mechanics.
