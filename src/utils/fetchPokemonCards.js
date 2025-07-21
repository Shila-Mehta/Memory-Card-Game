import { uniquePokemonIds } from "./generateUniquePokemonIds";
import shuffleCards from "./shuffleCards";

export default  async function  fetchPokemoncards({difficulty,setCards}){

    if(!setCards){
        console.log('setCards callback function is required');
    }
    

      const ids=uniquePokemonIds(difficulty);

          try{
            const results=await Promise.all(
             ids.map((id)=> fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res=> res.json()))
            )
  
            console.log(results);
  
            const pokemonCards=results.map((pokemon)=>(
              {id:pokemon.id , baseId:pokemon.id,label:pokemon.name ,imgSrc:pokemon.sprites.front_default}
            ))
  
  
  
            const duplicatedCards=[
                ...pokemonCards.map((card,index)=>({...card,id:`${card.id}-a`})),
                ...pokemonCards.map((card,index)=>({...card,id:`${card.id}-b`}))
            ];
            const shuffledCards=shuffleCards(duplicatedCards);
             setCards(shuffledCards);
  
            
          }
          catch(err){
            console.log(`failed to fetch ${err}`);
          }
        
        }
  
