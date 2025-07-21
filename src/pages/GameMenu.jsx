import { ThemeSwitcher } from "../components/ThemeSwitcher";

export default function GameMenu({ handlePlay ,gameState}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-yellow-100 flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-10 w-[90%] max-w-md text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">🎮 Memory Legends</h1>
        <ThemeSwitcher theme={gameState.theme}  setTheme={gameState.setTheme}/>
        <div className="space-y-4  ">
          <div className="flex items-center justify-between bg-[var(--bg-color)] px-4 py-2 rounded-md shadow">
            <label className="text-lg font-medium  ">Easy</label>
            <input
              type="radio"
              name="difficulty"
              value="easy"
              onChange={(e) => gameState.setDifficulty(e.target.value)}
              className="w-5 h-5"
            />
          </div>

          <div className="flex items-center justify-between bg-[var(--bg-color)] px-4 py-2 rounded-md shadow">
            <label className="text-lg font-medium">Medium</label>
            <input
              type="radio"
              name="difficulty"
              value="medium"
              onChange={(e) => gameState.setDifficulty(e.target.value)}
              className="w-5 h-5"
            />
          </div>

          <div className="flex items-center justify-between  bg-[var(--bg-color)] px-4 py-2 rounded-md shadow">
            <label className="text-lg font-medium">Hard</label>
            <input
              type="radio"
              name="difficulty"
              value="hard"
              onChange={(e) => gameState.setDifficulty(e.target.value)}
              className="w-5 h-5"
            />
          </div>
        </div>

        <button
          onClick={()=>handlePlay(gameState)}
          className="mt-8 px-8 py-3 text-white text-xl font-semibold bg-gray-700 rounded-lg hover:bg-gray-800 transition duration-300"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
