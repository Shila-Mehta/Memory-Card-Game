import { count } from "../data/difficulty";

export  function  uniquePokemonIds(difficulty){
  const ids= new Set();

  console.log(count(difficulty));
   while(count(difficulty) > ids.size){
    const randomId=Math.floor(Math.random() * 150) + 1;
    ids.add(randomId);

   }

   return Array.from(ids);
}