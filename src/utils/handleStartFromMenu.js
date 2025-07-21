export function handleStartFromMenu(gameState){
      new Audio('/play.mp3').play();
      
        gameState.setFlippedCards([])
        gameState.setFlippedBaseIds([])
        gameState.setPlay(false);
        gameState.setScore(0)
        gameState.setTime(0)
        gameState.setMistakes(0)
        gameState.setCards([])
   }