# 🎮 Memory Legends - A React Memory Card Game

Memory Legends is a polished, fast-paced memory card game built with React. Players flip cards to find unique ones, testing their memory and speed. The game features dynamic scoring, difficulty levels, themes, and fun sound effects.

---

## Live Demo (https://memory-card-game-nimra.netlify.app/)

## Screen shots

<img width="2816" height="2130" alt="memory-card-game-nimra netlify app_ (1)" src="https://github.com/user-attachments/assets/515a2f3d-1513-487e-accb-45091e437ec3" />
<img width="2816" height="2130" alt="memory-card-game-nimra netlify app_ (2)" src="https://github.com/user-attachments/assets/6a887d28-7c4d-41cf-972f-a155361d7a29" />
<img width="2816" height="2130" alt="memory-card-game-nimra netlify app_ (3)" src="https://github.com/user-attachments/assets/afca0c78-9298-48fc-9d78-29cde76c40b5" />
<img width="2816" height="2130" alt="memory-card-game-nimra netlify app_ (4)" src="https://github.com/user-attachments/assets/e685b7d9-eb47-4a55-babc-5852f387b74a" />
<img width="2816" height="2130" alt="memory-card-game-nimra netlify app_ (5)" src="https://github.com/user-attachments/assets/0fc5a73b-9578-489d-a1db-93c79cdd27d3" />
<img width="2816" height="2130" alt="memory-card-game-nimra netlify app_ (6)" src="https://github.com/user-attachments/assets/189b5eea-dddb-4fb9-a8b6-84a76d6b3c4b" />
<img width="2816" height="2288" alt="memory-card-game-nimra netlify app_ (7)" src="https://github.com/user-attachments/assets/6a73967a-f302-4a1c-a1c1-4399811d4dc4" />










## 🚀 Features

- 🧠 **Memory-based gameplay**

 – Flip cards and avoid duplicates!

- 🎨 **Multiple themes** 

– Dark and light themes with localStorage persistence.

- 📈 **Score & Best Score tracking** 

– Encourages replayability.

- 🔊 **Sound effects** 

– Flip, success, and game over.

- 📱 **Responsive layout**

 – Fully responsive on mobile and desktop.

- 🔄 **Shuffling** 

– Cards reshuffle after each valid move.

- 💾 **Persistent data** 

– Saves best score and theme between sessions.

-**Difficulty**:
Easy- shows  4 cards
Medium -shows 7 cards
Hard- shows 10 cards 
default- 3 cards



⚙️ Tech Stack

React – UI library

JavaScript – Logic and DOM interactions

Tailwind – Styling 

HTML5 Audio API – For sound feedback

Pokemon API(https://pokeapi.co/api/v2/pokemon) -  For images  and labels

LocalStorage API – For persistence



## Project Structure

```
└── 📁Memory Card Game
        └── 📁public
            ├── flipCard.mp3
            ├── game over.mp3
            ├── play.mp3
            ├── score.png
            ├── success.mp3
            ├── vite.svg
        └── 📁src
            └── 📁assets
                └── 📁images
                ├── react.svg
            └── 📁components
                ├── Card.jsx
                ├── GameBoard.jsx
                ├── Header.jsx
                ├── Modal.jsx
                ├── statsBar.jsx
                ├── ThemeSwitcher.jsx
            └── 📁data
                ├── difficulty.js
            └── 📁hooks
                ├── useBestScore.js
                ├── useTheme.js
                ├── useTimer.js
            └── 📁pages
                ├── GameMenu.jsx
            └── 📁services
                ├── GameStates.js
            └── 📁styles
                ├── theme.css
            └── 📁utils
                ├── fetchPokemonCards.js
                ├── generateUniquePokemonIds.js
                ├── handleFlip.js
                ├── handleRestart.js
                ├── handleStartFromMenu.js
                ├── shuffleCards.js
            ├── App.jsx
            ├── index.css
            ├── main.jsx
        ├── .gitignore
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── postcss.config.cjs
        ├── README.md
        ├── tailwind.config.cjs
        └── vite.config.js
```



👩‍💻 About Me

I'm a front-end developer passionate about building polished, interactive web applications with a focus on user experience, performance, and clean architecture.

📁 View more of my work on my portfolio(https://nimra-react-portfolio.netlify.app/)

💼 Connect with me on LinkedIn (https://www.linkedin.com/feed/)


Clone the repo
git clone  https://github.com/Shila-Mehta/Memory-Card-Game.git

cd Memory Card Game\my-react-app
