# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a children's vocabulary learning application (儿童背单词) built as a standalone single-page web application. It helps children learn KET (Cambridge English Key) and PET (Preliminary English Test) vocabulary through interactive flashcards, testing modes, and gamification.

**Tech Stack:**
- Pure HTML/CSS/JavaScript (no frameworks)
- LocalStorage for persistence
- Web Speech API for pronunciation

## File Structure

```
/Users/liyu1/
├── vocabulary-app.html    # Main HTML structure
├── vocabulary-app.js      # Application logic and word banks
├── vocabulary-style.css   # Styles and animations
└── package.json          # NPM dependencies (@ebay/claude-code-token)
```

## Development Commands

**Running the Application:**
```bash
# Simply open the HTML file in a browser
open vocabulary-app.html
```

There are no build steps, test commands, or bundlers - this is a pure client-side application.

## Architecture

### Word Banks (vocabulary-app.js)

The application contains two comprehensive word banks defined as JavaScript constants:

- **KET_WORDS** (lines 2-607): ~600 words organized by categories
  - Family & People, Body Parts, Animals, Food & Drink, Colors, School, Sports, Clothes, Numbers, Adjectives, etc.

- **PET_WORDS** (lines 609-638): Additional advanced vocabulary for PET level

Each word entry follows this structure:
```javascript
{
  word: "example",
  phonetic: "/ɪɡˈzɑːmpl/",
  translation: "例子",
  example: "This is an example sentence."
}
```

### Application State (Lines 640-650)

Global state variables manage:
- `currentLevel`: 'KET' or 'PET'
- `currentWords`: Active word list
- `currentIndex`: Current word position
- `learnedWords`: Set of mastered words
- `wrongCount`: Object tracking error counts per word
- `wrongWordsList`: Set of words with ≥2 errors (review list)
- `isTestMode`: Boolean for test/learn mode
- `isReviewMode`: Boolean for wrong words review
- `coins`: Gamification currency
- `streak`: Consecutive correct answers
- `userAnswer`: Current spelling input

### Core Features

**1. Learning Mode (Lines 726-783)**
- Shows flashcards with word, phonetic, and option to reveal translation
- "Know/Don't Know" buttons to track progress
- Navigation between words
- Web Speech API pronunciation

**2. Test Mode (Lines 1004-1184)**
- Shows Chinese translation, user types English spelling
- Letter-by-letter input visualization with blanks
- Keyboard input handling (letters, backspace, enter)
- Immediate feedback on correctness
- Gamification: coin rewards with streak bonuses

**3. Review Mode (Wrong Words)**
- Dedicated mode for reviewing words with ≥2 errors
- Words automatically added/removed based on performance
- Badge showing wrong word count

**4. Persistence (Lines 807-858)**
- LocalStorage saves: level, learned words, wrong words, coins, streak
- Manual reset function with confirmation

**5. Gamification (Lines 860-895)**
- Base reward: 1 coin per correct answer
- Streak bonuses: 3 consecutive (+1), 5 consecutive (+3), 10+ consecutive (+5)
- Animated coin popup feedback

### UI Components

**Statistics Display (Lines 786-805)**
- Learned count vs total words
- Progress bar with percentage
- Coin count with icon
- Wrong words badge

**Letter Blanks System (Lines 1017-1113)**
- Dynamic blank generation for word length
- Handles multi-word phrases with space gaps
- Active/filled state management
- Real-time input visualization

## Key Implementation Details

**Pronunciation:**
- Uses Web Speech API (`speechSynthesis.speak()`)
- Language set to 'en-US'
- Falls back gracefully if unavailable

**Word Selection:**
- Sequential navigation in learning mode
- Random shuffle after wrong answer in test mode
- Filters out already-learned words in test mode

**Error Tracking:**
- Wrong count increments on incorrect spelling
- ≥2 errors adds word to review list
- Correct spelling in review mode removes from list
- Wrong answer removes from learned set

**Coin Reward Logic:**
- Streak resets to 0 on wrong answer
- Bonuses trigger at specific thresholds (3, 5, 10, multiples of 10)
- Animated popup shows reward with bonus text

## Code Organization

1. **Word Data** (Lines 1-638): KET and PET word banks
2. **State & References** (Lines 639-681): Global variables and DOM references
3. **Initialization** (Lines 683-723): Setup and event listeners
4. **Learning Mode** (Lines 726-783): Flashcard functionality
5. **Statistics** (Lines 786-858): Progress tracking and persistence
6. **Gamification** (Lines 860-895): Coin rewards and calculations
7. **Level Switching** (Lines 897-935): Word bank management
8. **Mode Switching** (Lines 937-998): Learn/Test/Review transitions
9. **Test Mode** (Lines 1000-1184): Spelling test implementation
10. **App Initialization** (Line 1187): Entry point

## Important Patterns

**Adding New Words:**
Insert into the appropriate category array in KET_WORDS or PET_WORDS following the exact object structure with word, phonetic, translation, and example.

**Modifying Game Mechanics:**
- Coin rewards: Update `calculateCoinReward()` function
- Streak logic: Modify streak conditions in `checkSpelling()`
- Wrong word threshold: Change `>= 2` condition in line 1160

**UI State Transitions:**
The app uses `classList` toggle patterns extensively. Mode switches hide/show containers and update button states using the 'active' and 'hidden' classes.

**Persistence Schema:**
If adding new state, update both `saveProgress()` and `loadProgress()` functions to include the new field in the progress object.

## Browser Compatibility

Requires modern browsers with:
- ES6 support (Set, spread operator, arrow functions)
- LocalStorage API
- Web Speech API (optional, for pronunciation)
- CSS Grid and Flexbox
