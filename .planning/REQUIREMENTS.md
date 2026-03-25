# Requirements: Meme Expression Analyzer

**Defined:** 2026-03-24
**Core Value:** Real-time, engaging, and hilariously judgmental facial expression analysis that creates a unique and un-ignorable interactive experience.

## v1 Requirements

### Capture & Streaming

- [x] **CAP-01**: React client captures live video from user's webcam via WebRTC (Requires user permission).
- [x] **CAP-02**: Client maintains a constant WebSocket connection to the FastAPI server, sending lightweight frame data or landmarks.

### Engine & Analysis

- [x] **ML-01**: FastAPI server receives streams and evaluates facial landmarks using MediaPipe.
- [x] **ML-02**: Server computes "boredom", "confusion", "dread", and an overall "Why Meter" score in real-time.
- [x] **ML-03**: Server correctly identifies target emojis (happy, sad, angry, surprise, neutral) through facial landmark heuristics or a lightweight deep learning component fallback.

### Gamified UI

- [ ] **UI-01**: UI displays the live "Why Meter" score reflecting the chaos metric.
- [ ] **UI-02**: UI updates the displayed meme image and plays corresponding audio based on current emotion or game state.
- [ ] **UI-03**: UI includes an "Emoji Mimicry Challenge" which prompts the user to mimic 5 specific emojis in sequence.
- [ ] **UI-04**: Results Screen is displayed upon successful completion of the mimicry challenge showing final score and captured funny faces.

### Hostile UX

- [x] **UX-01**: Application requires an initial "Enter the Trap" interaction to unlock browser APIs (Audio, full screen, etc).
- [x] **UX-02**: Frontend intercepts and blocks standard exit keybindings (e.g., ESC) within browser standard limits to enhance the "trapped" feeling.
- [x] **UX-03**: Attempting to leave triggers a warning screen, requiring the emoji challenge to be completed to properly "exit".

## v2 Requirements

### Custom Modeling

- **MOD-01**: Train a custom emotion model instead of heuristics to measure hyper-specific granular expressions like "cringe".

### Advanced Audio

- **AUD-01**: Audio engine dynamically pitch-shifts meme sounds based on the dread/confusion scores.

## Out of Scope

| Feature | Reason |
|---------|--------|
| Image uploads | Target experience relies entirely on real-time live camera interaction. Trapping the user requires live feedback. |
| User Accounts | The app is designed for immediate, stateless interactive sessions. Saves privacy/GDPR headaches. |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| CAP-01 | Phase 1 | Complete |
| CAP-02 | Phase 1 | Complete |
| ML-01 | Phase 2 | Complete |
| ML-02 | Phase 2 | Complete |
| ML-03 | Phase 2 | Complete |
| UI-01 | Phase 3 | Pending |
| UI-02 | Phase 3 | Pending |
| UI-03 | Phase 3 | Pending |
| UI-04 | Phase 3 | Pending |
| UX-01 | Phase 4 | Complete |
| UX-02 | Phase 4 | Complete |
| UX-03 | Phase 4 | Complete |

**Coverage:**
- v1 requirements: 12 total
- Mapped to phases: 12
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-24*
*Last updated: 2026-03-24 after initial definition*
