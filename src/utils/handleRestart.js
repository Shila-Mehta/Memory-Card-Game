 export function handleRestart(fetchPokemoncards,gameState){
       fetchPokemoncards(gameState);

        gameState.setIsGameOver(false);
        gameState.setIsGameWon(false);
        gameState.setIsPaused(false);
        gameState.setScore(0)
        gameState.setTime(0)
        gameState.setFlippedCards([])
        gameState.setFlippedBaseIds([])

   }
