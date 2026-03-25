# Stack Research: Gamified Real-time Vision App

## Recommended Stack
- **Frontend**: React (via Vite) + Canvas + WebRTC. *Rationale*: High performance, industry standard for web apps, and WebRTC is required for camera access.
- **Backend**: FastAPI (Python) + Uvicorn for ASGI. *Rationale*: Excellent WebSocket support, fast execution, and native Python for easy integration with ML libraries.
- **Face Analysis**: MediaPipe (Google). *Rationale*: Specifically optimized for real-time video feeds (60fps capability) unlike heavier models like DeepFace which excel at static photos but lag in live streams. DeepFace can be used as a fallback or for periodic deep emotion checks.
- **Audio**: Native HTML5 Audio API. *Rationale*: Sufficient for simple meme sound effects triggered by React state changes.

## What NOT to use
- **Django/Flask for WebSocket**: Too heavy and sync-first. FastAPI is much better suited for async live streams.
- **Polling (REST API) for live video**: Will cause unbearable latency and "janky" interactions, breaking the "boss fight" immersion.
