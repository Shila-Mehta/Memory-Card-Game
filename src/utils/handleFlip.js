import shuffleCards from "./shuffleCards";

export function handleFlip(baseId, cardId, gameState) {
  new Audio('/flipCard.mp3').play();

  // Immediately update flipped cards and score
  gameState.setFlippedCards((prev) => [...prev, cardId]);
  gameState.setScore((s) => s + 1);

  setTimeout(() => {
    const alreadyFlipped = gameState.flippedBaseIds.includes(baseId);
    const isLastFlip = gameState.flippedCards.length + 1 === gameState.cards.length;

    if (alreadyFlipped) {
      new Audio('/game over.mp3').play();
      
      gameState.setIsGameOver(true);

      gameState.setMistakes((m) => m + 1);

      // Update bestScore if current score is higher
      gameState.setBestScore((prevBest) =>
        gameState.score > prevBest ? gameState.score : prevBest
      );
      return;
    }

    // Mark the baseId as flipped successfully
    gameState.setFlippedBaseIds((prev) => [...prev, baseId]);

    // If all cards are flipped correctly
    if (isLastFlip) {
      new Audio('/success.mp3').play();
      gameState.setIsGameWon(true);
      return;
    }

    // Shuffle cards for next round
    gameState.setCards((prev) => shuffleCards([...prev]));
  }, 1000);
}
