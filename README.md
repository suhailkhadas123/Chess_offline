# ♟️ React Chess Game

A fully functional offline chess game built with React.js that supports two-player gameplay, move validation, check/checkmate detection, player timers, and move history tracking using standard chess notation.

## Features

* Interactive 8×8 chess board
* Standard chess piece setup
* Complete legal move validation
* Turn-based gameplay
* Check detection
* Checkmate detection
* Individual countdown timers for both players
* Move history with algebraic notation (e.g., e4, Nf3, O-O)
* Illegal move prevention
* Responsive user interface

## Tech Stack

* React.js
* JavaScript (ES6+)
* CSS

## Project Structure

```text
src/
├── components/
│   ├── ChessBoard.jsx
│   ├── Square.jsx
│   ├── Piece.jsx
│   ├── Timer.jsx
│   └── MoveHistory.jsx
│
├── hooks/
│   ├── useGameState.js
│   └── useTimer.js
│
├── utils/
│   ├── moveValidation.js
│   ├── checkDetection.js
│   ├── checkmateDetection.js
│   └── notationGenerator.js
│
├── App.jsx
└── index.js
```

## Getting Started

### Installation

```bash
git clone <repository-url>
cd react-chess-game
npm install
```

### Run Development Server

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

## Game Rules Supported

* Pawn movement and captures
* Rook movement
* Knight movement
* Bishop movement
* Queen movement
* King movement
* Check validation
* Checkmate detection
* Turn enforcement

## Future Improvements

* Castling
* En Passant
* Pawn Promotion
* Stalemate Detection
* Undo Move
* Game Save/Load
* Move Replay



MIT License
