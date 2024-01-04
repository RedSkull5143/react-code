import { useState } from "react"

function App() {
  const [color, setColor] = useState("cyan")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-3 rounded-xl">
          <button onClick={()=> setColor('red')} className="bg-red-500 text-white outline-none rounded-full px-4 py-1 shadow-lg">Red</button>
          <button onClick={()=> setColor('green')} className="bg-green-500 text-white outline-none rounded-full px-4 py-1 shadow-lg">Green</button>
          <button onClick={()=> setColor('blue')} className="bg-blue-500 text-white outline-none rounded-full px-4 py-1 shadow-lg">Blue</button>
          <button onClick={()=> setColor('yellow')} className="bg-yellow-400 text-white outline-none rounded-full px-4 py-1 shadow-lg">Yellow</button>
          <button onClick={()=> setColor('violet')} className="bg-violet-500 text-white outline-none rounded-full px-4 py-1 shadow-lg">Violet</button>
          <button onClick={()=> setColor('pink')} className="bg-pink-400 text-white outline-none rounded-full px-4 py-1 shadow-lg">Pink</button>
          <button onClick={()=> setColor('gray')} className="bg-gray-500 text-white outline-none rounded-full px-4 py-1 shadow-lg">Grey</button>
        </div>
      </div>
    </div>
  )
}

export default App
