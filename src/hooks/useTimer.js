import {useEffect } from "react";

export function useTimer({setTime,play,isPaused}){
     useEffect(()=>{
          if(play || isPaused)  return;
          const id= setInterval(()=> setTime((prev)=> prev+1),1000);
          return ()=> clearInterval(id);
         },[play,isPaused,setTime])
    

}