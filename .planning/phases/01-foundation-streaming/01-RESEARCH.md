# Phase 1 Research: Foundation & Streaming

## Objective
Research architecture, dependencies, and potential technical gotchas for implementing the WebRTC capture and WebSocket streaming connection between a React client and a FastAPI server.

## Key Technical Requirements
1. **CAP-01**: React client captures live video from webcam via WebRTC.
2. **CAP-02**: Client maintains constant WebSocket connection to FastAPI server, sending frame data.

## Implementation Guidelines

### Frontend (React + Vite)
- Use `useRef` for `<video>` and `<canvas>` elements to capture frames without re-rendering the component tree rapidly.
- Start with `navigator.mediaDevices.getUserMedia({ video: true })`.
- Transmit image frames: Extract `canvas.toDataURL('image/jpeg', 0.5)` or use `canvas.toBlob()` for lighter payloads, then send over WebSocket.
- Manage WebSocket lifecycle strictly inside a `useEffect` with proper cleanup to prevent memory leaks or zombie connections.

### Backend (FastAPI + Uvicorn)
- Use `fastapi.WebSocket` for bi-directional streaming.
- Use `asyncio` to manage the event loop.
- Example endpoint: `@app.websocket("/ws")`
- Need graceful cleanup on client disconnects (Handle `WebSocketDisconnect`).
- Process incoming bytes via OpenCV (if parsing raw data) or Base64 decoding.

## Technical Gotchas & Risks
- **Video bandwidth**: Capturing and sending 60 frames per second of raw high-res video will saturate most connections. **Mitigation**: Throttle the sending rate to 10-15 FPS, scale down the canvas (e.g., 320x240), and use heavy JPEG compression.
- **CORS/Security Issues**: Browsers require HTTPS or `localhost` to allow webcam access (`getUserMedia` throws an error otherwise).
- **Socket Disconnections**: Connection dropping is likely. Needs an exponential backoff re-connection handling strategy on the UI.

## Validation Architecture
- Verify that the FastAPI backend properly replies back via the websocket to confirm receipt of frames.
- Monitor the frame dropping rate and latency on the React side (needs console logging or a debug UI indicator).
