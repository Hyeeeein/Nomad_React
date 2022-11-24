import React from "react";
import { useState } from "react";

const Counter = () => {
  const [inCounter, setInCounter] = useState(0);
  const [deCounter, setDeCounter] = useState(0);

  function hendleInCounter() {
    setInCounter((current) => (inCounter === 10 ? 0 : current + 1));
  }
  function hendleDeCounter() {
    setDeCounter((current) => (deCounter === -10 ? 0 : current - 1));
  }
  return (
    <div>
      <h2>Counter</h2>
      <h4>Count : {inCounter}</h4>
      <button onClick={hendleInCounter}>Increment</button>
      <h4>Count : {deCounter}</h4>
      <button onClick={hendleDeCounter}>Decrement</button>

      <h3>ToTal Count : {inCounter + deCounter}</h3>
    </div>
  );
};

export default Counter;
