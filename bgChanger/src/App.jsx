import { useState } from "react"

export default function App() {
  let colorDefault = "#0f0f0f"
  const [color, setColor] = useState(colorDefault);
  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          className="outline-none p-4 rounded-full bg-red-800 shadow-lg text-white"
          onClick={() => setColor("red")}
          >
            Red
          </button>
          <button 
          className="outline-none p-4 rounded-full bg-green-800 shadow-lg text-white"
          onClick={() => setColor("green")}
          >
            Green
          </button>
          <button 
          className="outline-none p-4 rounded-full bg-blue-800 shadow-lg text-white"
          onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button 
          className="outline-none p-4 rounded-full shadow-lg text-white bg-purple-600"
          onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button 
          className="outline-none p-4 rounded-full bg-orange-600 shadow-lg text-white"
          onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button 
          className="p-4 rounded-full bg-white-600 shadow-lg outline-2"
          onClick={() => setColor(colorDefault)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

