import { useState } from "react";

function App() {
  const [color, setColor] = useState("#3f3e3e"); // Olive as default color

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <h1 className=" flex justify-center items-center p-56 text-9xl font-bold text-white">
        Docs.
      </h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
          <button
            onClick={() => setColor("#E30B5C")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#E30B5C" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("#DFFF00")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#DFFF00" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("#F9E79F")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#F9E79F" }}
          >
            Amber
          </button>
          <button
            onClick={() => setColor("#40E0D0")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#40E0D0" }}
          >
            Teal
          </button>
          <button
            onClick={() => setColor("#CCCCFF")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#CCCCFF" }}
          >
            Lavender
          </button>
          <button
            onClick={() => setColor("#DAF7A6")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#DAF7A6" }}
          >
            Light Green
          </button>
          <button
            onClick={() => setColor("#00FFFF")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#00FFFF" }}
          >
            Aqua
          </button>
          <button
            onClick={() => setColor("#93C572")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#93C572" }}
          >
            Pistachio
          </button>
          <button
            onClick={() => setColor("#EADDCA")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#EADDCA" }}
          >
            Almond
          </button>
          <button
            onClick={() => setColor("#F88379")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "#F88379" }}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
