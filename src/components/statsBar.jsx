import { StarIcon, ClockIcon, FireIcon, XCircleIcon } from '@heroicons/react/24/outline'


export default function Stats({gameState}){
    return (
         <div  className="stats-bar py-4  flex gap-4 justify-around text-sm  md:text-base  bg-[var(--accent-color)]">

            <div className="flex items-center gap-1">
            <StarIcon className="h-5 w-5 text-yellow-500" />
            <span>Score: {gameState.score}</span>
            </div>
            <div className="flex items-center gap-1">
            <ClockIcon className="h-5 w-5 text-blue-500" />
            <span>Time: {gameState.time}</span>
            </div>
            <div className="flex items-center gap-1">
            <FireIcon className="h-5 w-5 text-red-500" />
            <span>Best Score: {gameState.bestScore}</span>
            </div>
            <div className="flex items-center gap-1">
            <XCircleIcon className="h-5 w-5 text-gray-500" />
            <span>Mistakes: {gameState.mistakes}</span>
            </div>

        </div>
    )
}