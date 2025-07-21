
export default function Header({handlePlay,handlePause}){
    return(

       <header  className="p-6 bg-[var(--bg-color)]  flex  flex-col  gap-4  ">

        <div  className='title-bar  flex  justify-between items-center'>
            <button  onClick={handlePlay} className="px-4 py-2  rounded  bg-[var(--accent-color)]  text-white hover:bg-blue-700"> Game Menu</button>
            <h1  className="text-3xl  font-bold">Memory Legends</h1>
            <button  onClick={handlePause} className="px-4 py-2  rounded  bg-[var(--accent-color)]  text-white hover:bg-blue-700">Pause</button>

        </div>

       
       </header>
    )
}