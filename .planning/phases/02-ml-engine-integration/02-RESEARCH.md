# Phase 2 Research: ML Engine Integration

## Objective
Research how to implement MediaPipe face landmark detection in FastAPI to compute the "Why Meter" scores and classify specific facial expressions (emojis) from live WebSocket frames.

## Key Technical Requirements
1. **ML-01**: FastAPI receives streams and evaluates landmarks using Google MediaPipe.
2. **ML-02**: Compute "boredom", "confusion", "dread", and overall "Why Meter" score.
3. **ML-03**: Identify specific target emojis (happy, sad, angry, surprise, neutral) via heuristics.

## Implementation Guidelines

### Infrastructure & Dependencies
- Require `mediapipe`, `opencv-python-headless`, and `numpy` in `backend/requirements.txt`.
- Set up a MediaPipe `FaceMesh` instance. `FaceMesh` is suitable for dense landmark extraction which is needed to calculate intricate expressions.
- We must decode the incoming base64 payload to a NumPy array for MediaPipe processing.

### Performance & Blocking
- **Warning**: MediaPipe processing is CPU-intensive. Since FastAPI is asynchronous, running synchronous CPU-bound MediaPipe tasks directly in the WebSocket `receive_text` loop can block the asyncio event loop and degrade connection latency.
- **Mitigation**: Use `asyncio.to_thread` or a `ThreadPoolExecutor` (or `ProcessPoolExecutor` if GIL is a bottleneck) to offload the MediaPipe image processing.

### Heuristics for Emotion & "Why Meter"
- **Landmarks**: The `FaceMesh` returns 468 3D landmarks.
- **Neutral/Happy/Sad/Surprise/Angry**: 
  - *Happy*: Distance between mouth corners (lips stretch).
  - *Sad*: Downward curve of mouth corners relative to the lower lip center.
  - *Surprise*: Distance between upper and lower lips (mouth open) combined with raised eyebrows (distance between eyes and eyebrows).
  - *Angry*: Lowered eyebrows (squint/frown) and tightened lips.
- **Why Meter (boredom, confusion, dread)**:
  - *Boredom*: Heavy eyelids (reduced eye aspect ratio), neutral mouth, lack of movement.
  - *Confusion*: Asymmetric eyebrows (one raised, one lowered).
  - *Dread*: Wide eyes (high eye aspect ratio) but neutral/downturned mouth.
  - *Overall Score*: A weighted sum of the above metrics.

## Validation Architecture
- Verify that `FaceMesh` initializes correctly on server startup.
- Send test frames (e.g., standard generic faces simulating different emotions) via unit tests or a simple script to validate the heuristic outputs.
- Measure processing latency per frame to ensure it stays below 50ms to sustain the target throughput.
