import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=> setColor("red")} // onClick humne aese isiliye likha kyuki in click ko function chahiye jo ki humne setColor banaya yha toh hum directly nhi likh sakte and we have to give parameters like red color
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "red" }}>Red
          </button>
          <button
            onClick={()=> setColor("blue")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "blue" }}>Blue
          </button>
          <button
            onClick={()=> setColor("black")}
            className="outline outline-2 outline-black px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "black" }}>
            Black
          </button>
          <button
            onClick={()=> setColor("white")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "white" }}>White
          </button>
          <button
            onClick={()=> setColor("purple")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "purple" }}>Purple
          </button>
          <button
            onClick={()=> setColor("orange")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "orange" }}>Orange
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
