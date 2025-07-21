export function count (difficulty){

 switch(difficulty){
     case 'easy':
          return 4;
     case 'medium':
         return 7;
     case 'hard':
          return 10; 
     default:
         return 3;
   }
}