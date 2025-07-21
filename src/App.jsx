import { useEffect } from "react";

import Header from './components/Header';
import Stats from "./components/statsBar";
import GameBoard from './components/GameBoard';
import GameMenu from "./pages/GameMenu";
import { GameOver,GameWon,Paused } from "./components/Modal";

import fetchPokemoncards from "./utils/fetchPokemonCards";
import { useTimer } from "./hooks/useTimer";
import { handleFlip } from "./utils/handleFlip";
import { handleRestart } from "./utils/handleRestart";
import { handleStartFromMenu } from "./utils/handleStartFromMenu";

import { GameStates } from "./services/GameStates";



export default function App() {
   
  const gameState=GameStates();

  useTimer(gameState);
   
    useEffect(()=>{
      if(!gameState.play){
        fetchPokemoncards(gameState);
      }
    },[gameState.play,gameState.difficulty])



   
      
  return (

    <div data-theme={gameState.theme} className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">

    {gameState.isGameOver && <GameOver  onRestart={()=>handleRestart(fetchPokemoncards,gameState)}/>}
    {gameState.isGameWon && <GameWon    onRestart={()=>handleRestart(fetchPokemoncards,gameState)}/>}
    {gameState.isPaused &&  <Paused  handlePause={()=>gameState.setIsPaused(false)}/>}

    {(gameState.play)?(
     <GameMenu  handlePlay={handleStartFromMenu}   gameState={gameState}/>
    ):(
      <>
    <Header  handlePlay={()=>gameState.setPlay(true)}  handlePause={()=>gameState.setIsPaused(true)}/>
    <Stats  gameState={gameState}/>
    <GameBoard   handleFlip={handleFlip}  gameState={gameState}  />
   
      </>
    )}
  
    
    </div>

  );
}