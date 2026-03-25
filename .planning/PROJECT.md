# Meme Expression Analyzer

## What This Is

A gamified, real-time "digital clown" web application that judges a user's facial expressions and refuses to let them leave until they complete an emoji mimicry challenge. It uses a React frontend with a gamified boss-fight UI, WebRTC for camera feed, WebSockets for live video streaming, and a FastAPI Python backend powered by MediaPipe and custom emotion heuristics to analyze and score facial expressions in real-time.

## Core Value

Real-time, engaging, and hilariously judgmental facial expression analysis that creates a unique and un-ignorable interactive experience.

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->

(None yet — ship to validate)

### Active

<!-- Current scope. Building toward these. -->

- [ ] React frontend with WebRTC live camera capture and WebSocket streaming.
- [ ] Gamified "boss fight" UI with a live "why meter", meme canvas, and results screen.
- [ ] Browser-based audio engine for sound effects and meme sounds.
- [ ] FastAPI backend for processing video streams via WebSockets.
- [ ] Real-time facial expression analysis using MediaPipe landmarks and custom emotion heuristics.
- [ ] "Escape prevention" mechanism requiring the user to mimic a sequence of 5 specific emojis correctly to leave.
- [ ] Keyboard disabling techniques on the frontend to intensify the "trapped" feeling.

### Out of Scope

<!-- Explicit boundaries. Includes reasoning to prevent re-adding. -->

- [ ] Static image uploading — Target experience relies entirely on real-time live camera interaction.
- [ ] User accounts and authentication — The app is designed for immediate, stateless interactive sessions.

## Context

The user described this project as a "digital clown that judges your face in real time and refuses to let you leave." It’s meant to be an ultra-premium, highly interactive experience that blends meme culture, real-time ML processing, and a slightly hostile (but fun) UX. The "Next Level" upgrades like WebSocket streaming and MediaPipe landmarks were explicitly requested to avoid janky interval-based picture capturing.

## Constraints

- **Tech Stack**: Frontend must be React + Canvas + WebRTC; Backend must be Python (FastAPI).
- **Architecture**: Must support real-time WebSocket streaming, avoiding traditional request/response polling for video frames.
- **Performance**: Face analysis needs to run fast enough to deliver a smooth "boss fight" gamified experience without noticeable lag.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| WebSocket Streaming over REST | Real-time continuous analysis is needed for the "boss fight" UI and live metrics. | — Pending |
| MediaPipe Landmarks | Better performance and accuracy for emoji matching compared to standard DeepFace guesswork. | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-03-24 after initialization*
