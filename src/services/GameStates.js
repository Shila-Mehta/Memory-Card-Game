import { useBestScore } from "../hooks/useBestScore";
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";

export function  GameStates(){
     // Game State
        const [flippedCards,setFlippedCards]=useState([]); 
        const [cards,setCards]=useState([]); 
        const [flippedBaseIds,setFlippedBaseIds]=useState([]);
       
        // UI State
        const [play ,setPlay]=useState(true);
        const[isGameOver,setIsGameOver]=useState(false);
        const [isGameWon,setIsGameWon]=useState(false);
        const [isPaused,setIsPaused]=useState(false);
      
    
        //stats 
         const [score,setScore]=useState(0);
         const [mistakes,setMistakes]=useState(0);
         const [time,setTime]=useState(0);
    
        // settings
        const [difficulty,setDifficulty]=useState('easy');
    
    
        //hooks
       const [theme,setTheme]=useTheme();
       const [bestScore,setBestScore]=useBestScore();

       return {
        flippedCards,setFlippedCards,
        cards,setCards,
        flippedBaseIds,setFlippedBaseIds,
        play,setPlay,
        isGameOver,setIsGameOver,
        isGameWon,setIsGameWon,
        isPaused,setIsPaused,
        score,setScore,
        mistakes,setMistakes,
        time,setTime,
        difficulty,setDifficulty,
        theme,setTheme,
        bestScore,setBestScore

       }
    
}