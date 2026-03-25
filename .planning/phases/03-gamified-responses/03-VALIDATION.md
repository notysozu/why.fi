---
phase: 3
slug: gamified-responses
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-24
---

# Phase 3 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Jest / React Testing Library (or manual UI observation) |
| **Config file** | none — using Vite dev server |
| **Quick run command** | `npm run dev` |
| **Full suite command** | N/A |
| **Estimated runtime** | N/A |

---

## Sampling Rate

- **After every task commit:** Run dev server and visually inspect components.
- **After every plan wave:** Play the game flow locally.
- **Before `/gsd-verify-work`:** End-to-end mimicry game must work on screen.
- **Max feedback latency:** visual immediate.

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 3-01-01 | 01 | 1 | UI-01, UI-02| manual | visual inspection | ✅ | ⬜ pending |
| 3-02-01 | 02 | 2 | UI-03 | manual | visual inspection | ✅ | ⬜ pending |
| 3-03-01 | 03 | 3 | UI-04 | manual | hover evasion | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Vite frontend server running locally.

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Overlay UI | UI-01 | Visual | Open the app, ensure elements are on top of camera. |
| Why Meter | UI-02 | Visual / real-time data | Open the app, move face away to ensure boredom goes up, check bar. |
| Emoji Matching | UI-03 | Interactive | Try to mimic the emoji on screen; check if target changes. |
| Hostile UX | UI-04 | Interactive | Try to click the exit button before 5 points are reached. |

---

## Validation Sign-Off

- [x] All tasks have validation mapped.
- [x] `nyquist_compliant: true` set in frontmatter.

**Approval:** pending
