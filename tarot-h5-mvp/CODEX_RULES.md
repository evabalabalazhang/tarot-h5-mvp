# Codex Rules

## Project Priority

The current priority is learning experience implementation.

Do not add new major features until Week 1 is implemented and tested.

Current next coding task:

> Implement Day 2 as a complete step-based lesson experience.

## Product Direction

This is a 90-day tarot training system for complete beginners.

The product should help the user become capable of simple tarot interpretation, not just browse card meanings.

## Core Learning Loop

All learning implementation should follow:

> Observe → Practice → Apply → Feedback → Interpret

Do not reduce lessons to:

> Read → Finish

## Current Scope

Work only on the current priority unless explicitly instructed otherwise.

Current scope:

- Day 2 implementation
- Week 1 learning flow
- Lesson-player quality
- Progress and feedback

Out of scope for now:

- New AI features
- New spreads
- Community
- Membership
- Ranking
- Complex growth systems
- Advanced personalization

## Implementation Rules

1. Do not redesign the curriculum unless explicitly asked.
2. Do not modify Day 1 behavior unless fixing a bug or improving consistency.
3. Use the existing Day 1 player as the reference pattern for Day 2.
4. Preserve the normalized 78-card data schema.
5. Keep learning data-driven, not hardcoded into UI where avoidable.
6. Save user answers and progress locally.
7. Keep feedback encouraging and beginner-safe.
8. Avoid fear-based tarot interpretations.
9. Avoid absolute predictions.
10. Always prioritize beginner confidence.

## UI Rules

Lesson flow should be step-based:

Home → Start Learning → Intro → Learn → Practice → Apply → Feedback → Completion

Required lesson UI:

- Stepper
- Current step
- Card interaction
- Answer input
- Feedback panel
- Completion screen

Card UI requirements:

- Single card should be centered and readable
- Multi-card exercises should be horizontally scrollable on mobile
- Cards should support enlarged preview
- Card name and category should be visible

## Progress Rules

Day states:

- completed
- current
- locked

Rules:

- Days before current day are completed
- Current day is current
- Future days are locked
- No inconsistent ordering allowed

## Feedback Rules

Open exercises:

- Do not grade
- Save answer
- Show reference observations

Recognition exercises:

- Check answer
- Show correct / incorrect feedback
- Explain why

Application exercises:

- Save user response
- Show reference reasoning
- Show skill checklist when useful

## Documentation Rule

When implementation changes product behavior, update:

- `CHANGELOG.md`
- `TASKS.md`

Update `PRODUCT.md` or `ROADMAP.md` only when product direction or project plan changes.

