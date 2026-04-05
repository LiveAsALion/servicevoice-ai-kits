# Trading Bot — Project File
> Single source of truth. Session history resets. This file does not.
> Update the Decisions Log the same turn a decision is made.

---

## Project Overview

**Concept:** Automated algorithmic trading system using Alpaca API for paper/live trading. Building toward a personal wealth-building tool, not a product to sell.

**Phase:** Build

**Goal:** A rules-based or ML-assisted bot that executes trades autonomously — reducing reliance on manual market monitoring and building toward passive income through structured risk-managed strategies.

---

## Stack

| Component | Tool | Status |
|---|---|---|
| Brokerage API | Alpaca API | Configured (paper trading) |
| Code / version control | GitHub | Pending repo setup |
| Hosting | TBD (VPS or GitHub Actions) | Not decided |
| Language | Python (assumed) | TBD |
| Strategy framework | TBD | TBD |

---

## Strategy Notes (TBD)

No strategy has been locked. Candidates to evaluate:
- Mean reversion (simple, rule-based)
- Momentum / trend following
- ML-based signal generation (higher complexity, validate ROI first)

---

## Risk Management Principles

- Paper trading before any live capital
- Max drawdown limits before automatic shutdown
- No leverage until strategy is validated over 90+ days of paper trading
- Budget guard: no real capital at risk without Alistair's explicit approval

---

## Decisions Log
> Append new decisions here. Never overwrite old ones.

| Date | Decision | Rationale |
|---|---|---|
| 2026-03-28 | File created as stub | Project referenced in MEMORY.md but no disk file existed — ghost reference eliminated |
| 2026-03-28 | Phase: Build | Active development, not yet validated |
| 2026-03-28 | Alpaca API confirmed as brokerage layer | Already in Alistair's tool stack |

---

## Open Items

- [ ] Confirm GitHub repo name and create it
- [ ] Define initial strategy to test (keep it simple for first iteration)
- [ ] Set paper trading parameters (starting capital simulation amount, max drawdown %)
- [ ] Decide hosting: VPS cron vs GitHub Actions for trade execution
- [ ] Wire up Telegram alerts for trade execution / portfolio status
- [ ] Document Alpaca API key handling (never in workspace files — pass via environment variable)

---

## Notes

- Alpaca API key must never be stored in workspace files — pass as environment variable at runtime
- Paper trading phase is non-negotiable before live capital
- This is personal wealth-building, not a SaaS product — evaluate through that lens
