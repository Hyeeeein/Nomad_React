import BasicStyle from "../index.module.css";
import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const Props = () => {
  function Btn({ txt, onClick, fontSize }) {
    // console.log(txt + "랜더링");

    return (
      <button
        onClick={onClick}
        style={{
          fontSize,
          backgroundColor: "salmon",
          padding: "10px 20px",
          border: "none",
          borderRadius: "10px",
          color: "white",
          margin: "10px",
        }}
      >
        {txt}
      </button>
    );
  }

  const MemorizedBtn = React.memo(Btn);
  const [value, setValue] = useState("change");
  function changeValue() {
    setValue("revert change");
  }

  MemorizedBtn.propTypes = {
    txt: PropTypes.string,
    fontSize: PropTypes.number,
  };
  return (
    <div className={BasicStyle.box}>
      <h1>props</h1>
      <MemorizedBtn txt={value} onClick={changeValue} fontSize={20} />
      <MemorizedBtn txt="Don't Click Me!" />
    </div>
  );
};

export default Props;
