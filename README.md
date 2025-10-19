# 🎮 Memory Legends - A React Memory Card Game

Memory Legends is a polished, fast-paced memory card game built with React. Players flip cards to find unique ones, testing their memory and speed. The game features dynamic scoring, difficulty levels, themes, and fun sound effects.

---

## Live Demo (https://memory-card-game-nimra.netlify.app/)

## Screen shots




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