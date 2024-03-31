import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    setCount((prev) => prev - 1);
  };
  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={decreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
    </div>
  );
};

export default State;
