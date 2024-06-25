import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  let addValue = () => {
    if (count == 20) {
      count = 20;
    } else {
      setCount(count + 1);
    }
  };
  let decValue = () => {
    if (count == 0) {
      count = 0;
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Welcome to React Projects {count}</h1>
      <button onClick={addValue}>Count Value : {count}</button>
      <button onClick={decValue}>Decrease Value : {count}</button>
    </div>
  );
}

export default App;
