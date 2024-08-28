import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // handle increment of counter
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  //handle decrement of counter
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // minus 5
  const subFive = () => {
    setCount((prevCount) => prevCount - 5);
  };

  // increase 5
  const increaseFive = () => {
    setCount((prevCount) => prevCount + 5);
  };
  return (
    <div className="container">
      <div>
        <button className="btn btn-3" onClick={handleDecrement}>
          Minus 1
        </button>
        <button className="btn btn-2" onClick={handleIncrement}>
          Add 1
        </button>
        <br></br>
        <button className="btn btn-3" onClick={subFive}>
          Minus 5
        </button>
        <button className="btn btn-2" onClick={increaseFive}>
          Add 5
        </button>

        <h3 className="counter">Count is {count}</h3>
        <button
          className="btn btn-3"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset Counter
        </button>
      </div>
    </div>
  );
};

export default Counter;
