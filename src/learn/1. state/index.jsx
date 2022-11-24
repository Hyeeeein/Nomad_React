import React from "react";
import Counter from "./Counter";
import SuperConverter from "./SuperConverter";

const State = () => {
  return (
    <div style={{ border: "5px solid black", padding: "20px" }}>
      <h1>State</h1>
      <Counter />
      <br />
      <br />
      <br />
      <SuperConverter />
    </div>
  );
};

export default State;
