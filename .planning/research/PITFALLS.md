# Pitfalls Research

## Critical Mistakes & Prevention

### 1. Massive WebSocket Latency from Raw Video
- **Warning Sign**: Feed is delayed by 1-5 seconds, feeling sluggish and ruining the real-time clown judgment.
- **Prevention**: Down-sample the canvas image to a small resolution (e.g. 320x240) and high-compression JPEG before transmitting. Alternatively, run MediaPipe face-mesh solely on the client and only transmit the coordinate data (JSON) to the backend logic.

### 2. Browser Security Blocking "Hostile UX"
- **Warning Sign**: Modals or keyboard trapping fail to work due to lack of initial user interaction.
- **Prevention**: Require a "Start" button click inside the UI before the trap springs, satisfying browser `UserActivation` security requirements for things like Audio autoplay, Fullscreen API, and certain key event preventions.

### 3. DeepFace Realtime Limitations
- **Warning Sign**: Attempting to use `DeepFace.analyze` inside a tightly coupled 30fps websocket loop destroys the CPU and crashes the app.
- **Prevention**: Pre-load models in memory at FastAPI startup. Use lightweight alternatives like MediaPipe for constant "Why Meter" updates, and sparingly call DeepFace only when precision is explicitly demanded (e.g., final validation for the Emoji Challenge).
