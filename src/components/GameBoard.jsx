
import Card from "./Card";
export default function GameBoard({handleFlip, gameState}){
    
    return (
        <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-5 gap-4">
            {gameState.cards.map((card)=>(
           <Card  key={card.id}  label={card.label}  imageSrc={card.imgSrc}  isFlipped={gameState.flippedCards.includes(card.id)}  onFlip={()=>handleFlip(card.baseId,card.id,gameState)}/>
           ))}
    

        </div>

    )
}