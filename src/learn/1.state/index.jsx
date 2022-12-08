import React from "react";
import BasicStyle from "../index.module.css";
import Counter from "./Counter";
import SuperConverter from "./SuperConverter";

const State = () => {
  return (
    <div className={BasicStyle.box}>
      <h1>TEST</h1>
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
