import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // count is variable and setCount is Function to control

  const addValue = () => {
    if (count == 20) {
      setCount(20);
    } else {
      setCount(count + 1);
    }

    /**
     * this batch excuting thing bzc they doing same thing current no use of callback.
     * setCount(count + 1);
     * setCount(count + 1);
     * setCount(count + 1);
     * setCount(count + 1);
     *  so this will increment one time
     *
     * setCounter(prevCounter => prevCounter + 1);
     * setCounter(prevCounter => prevCounter + 1);
     * setCounter(prevCounter => prevCounter + 1);
     * setCounter(prevCounter => prevCounter + 1);
     *
     * here every single setCounter will excute then next count
     * so increment will 4 bzc callback is there are not same here context.
     *
     *
     *
     */
  };
  const DecValue = () => {
    if (count == 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>bhai aur me !!</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br></br>
      <button onClick={DecValue}>Dec Value</button>
    </>
  );
}

export default App;
