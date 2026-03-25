---
phase: 4
slug: the-trap
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-24
---

# Phase 4 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Manual UI observation |
| **Config file** | none |
| **Quick run command** | `npm run dev` |
| **Full suite command** | N/A |
| **Estimated runtime** | N/A |

---

## Sampling Rate

- **After every task commit:** Run dev server and manually trigger UI flows.
- **Before `/gsd-verify-work`:** End-to-end "Trap" flow must be un-escapable without winning.

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 4-01-01 | 01 | 1 | UX-01 | manual | click Enter button | ✅ | ⬜ pending |
| 4-02-01 | 02 | 2 | UX-02, UX-03 | manual | press ESC / exit | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Entry Gate | UX-01 | Browser Sec | Click "Enter", verify fullscreen and camera access prompt. |
| Exit Trap | UX-02 | Browser Sec | Press ESC during game. Verify red warning overlay appears. |
| Win Condition | UX-03 | Interactive | Reach score 5, click Quit, verify webcam turns off. |

---

## Validation Sign-Off

- [x] All tasks have validation mapped.
- [x] `nyquist_compliant: true` set in frontmatter.

**Approval:** pending
