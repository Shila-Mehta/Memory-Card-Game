// components/Modal.jsx
export function Paused({handlePause}){

   return(
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-sm w-full">
         <h2 className="text-2xl  font-semibold  mb-4  text-gray-800">Game paused 🎯</h2>
          <p className="text-gray-600 mb-6">You can resume the game!</p>
         <button onClick={handlePause} className="px-6 py-3  bg-green-600 text-white  rounded-lg  hover:bg-green-700 transition">Resume</button>
        </div>
       </div>
   )
  
}


export  function GameOver({ onRestart }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-sm w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Game Over  💀</h2>
        <p className="text-gray-600 mb-6">You clicked the same card twice!</p>
        <button
          onClick={onRestart}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}


export  function GameWon({ onRestart }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-sm w-full">
        <h2 className="text-2xl font-bold text-green-700 mb-4">You Won!  🎉</h2>
        <p className="text-gray-600 mb-6">Great memory skills!</p>
        <button
          onClick={onRestart}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
