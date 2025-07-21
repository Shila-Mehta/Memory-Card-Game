import { useState ,useEffect} from "react";


export function useBestScore(){
  const [bestScore,setBestScore]=useState(0);

   useEffect(()=>{
        const savedBestscore=localStorage.getItem('bestScore');
        if(savedBestscore) setBestScore(savedBestscore);
    },[])


    useEffect(()=>{ 
      if(bestScore) localStorage.setItem('bestScore',bestScore)
    },[bestScore])

    return [bestScore,setBestScore];
}