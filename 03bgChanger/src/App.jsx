import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
          <div className="fixed flex flex-wrap justify-center gap-3 rounded-xl px-3 py-2 shadow-lg bg-white">
            <button
              className="outline-none rounded-full px-4 py-1 shadow-lg text-white "
              style={{ backgroundColor: "red" }}
              onClick={() => {
                setColor("Red");
              }}
            >
              Red
            </button>

            <button
              className="outline-none rounded-full px-4 py-1 shadow-lg text-white "
              style={{ backgroundColor: "Green" }}
              onClick={() => {
                setColor("Green");
              }}
            >
              Green
            </button>

            <button
              className="outline-none rounded-full px-4 py-1 shadow-lg text-white "
              style={{ backgroundColor: "Blue" }}
              onClick={() => {
                setColor("Blue");
              }}
            >
              Blue
            </button>

            <button
              className="outline-none rounded-full px-4 py-1 shadow-lg text-white "
              style={{ backgroundColor: "Olive" }}
              onClick={() => {
                setColor("Olive");
              }}
            >
              Olive
            </button>

            <button
              className="outline-none rounded-full px-4 py-1 shadow-lg text-white "
              style={{ backgroundColor: "Black" }}
              onClick={() => {
                setColor("Black");
              }}
            >
              Black
            </button>

            <button
              className="outline-none rounded-full px-4 py-1 shadow-lg text-white "
              style={{ backgroundColor: "Gray" }}
              onClick={() => {
                setColor("Gray");
              }}
            >
              Gray
            </button>

            <button
              className="outline-none rounded-full px-4 py-1 shadow-lg text-black "
              style={{ backgroundColor: "Yellow" }}
              onClick={() => {
                setColor("Yellow");
              }}
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
