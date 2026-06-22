# Changelog

## Current State

The project is an H5 MVP for a 90-day tarot training system.

## Implemented

### Product Direction

- Defined product as a beginner-first tarot learning system
- Established 90-day learning journey
- Established core loop:
  Observe → Practice → Apply → Feedback → Interpret

### Data Layer

- Created full 78-card Rider-Waite deck data
- Added 22 Major Arcana
- Added 56 Minor Arcana
- Added normalized card fields:
  - `id`
  - `name`
  - `englishName`
  - `arcana`
  - `suit`
  - `number`
  - `keywords`
  - `uprightMeaning`
  - `reversedMeaning`
  - `loveMeaning`
  - `careerMeaning`
  - `moneyMeaning`
  - `growthMeaning`
  - `memoryTip`
  - `image`
- Added Major Arcana image configuration
- Added consistent placeholder image strategy for Minor Arcana

### UI and Learning Experience

- Built static H5 app
- Added bottom navigation
- Added learning home
- Added tarot card library
- Added daily card draw
- Added simulated AI reading
- Added profile/progress area
- Localized visible learning interface copy into Chinese

### Day 1

Implemented Day 1 as a complete learning experience:

- Home
- Start Learning
- Lesson Intro
- Learn
- Practice
- Apply
- Feedback
- Daily Completion

Day 1 supports:

- Step-based lesson player
- Answer saving
- Progress tracking
- First real tarot card experience
- Feedback display
- Completion screen
- Chinese-only learner-facing labels and actions

### Day 2

Implemented Day 2 as a complete learning experience:

- Home behavior after Day 1 completion
- Start Learning
- Lesson Intro
- Learn
- Deck-structure Practice
- Real-card Apply exercise
- Feedback
- Daily Completion

Day 2 supports:

- Step-based lesson player
- Answer saving
- Progress tracking
- Deck structure exercise
- Major / Minor role application using real card images
- Feedback explaining the correct tarot structure
- Beginner-friendly Chinese feedback summary instead of a technical deck-map display
- Chinese-only learner-facing labels and actions
- Day 2 avoids suit meanings so Day 4 can introduce them later
- Day 2 Learn now starts with visual comparison before explaining Major / Minor definitions
- Day 2 restores Minor Arcana deck structure: 4 suits, 14 cards each, without teaching suit meanings yet
- Day 2 Apply uses intuitive grouping and pattern reveal so beginners can feel the Major / Minor difference

## Not Yet Implemented

- Day 3-Day 7 complete step-based lessons
- Week 1 graduation screen
- Major Arcana journey
- Minor Arcana system
- Court Cards
- Spread reading training
- 90-day graduation
- Real AI integration

## Current Next Step

Implement Day 3.
