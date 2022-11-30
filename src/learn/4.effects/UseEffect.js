import { useState, useEffect } from "react";

function UseEffect() {
  const [like, setLike] = useState(0);
  const [value, setValue] = useState("");

  function handleClick() {
    setLike((current) => current + 1);
  }
  function onChange(e) {
    setValue(e.target.value);
  }

  useEffect(() => {
    console.log("한 번만 랜더링");
  }, []);
  useEffect(() => {
    console.log("input 의 value 값이 바뀔 때만 랜더링");
  }, [value]);
  useEffect(() => {
    console.log("하트를 누를 때만 랜더링");
  }, [like]);

  return (
    <div>
      <h1>useEffect</h1>
      <input
        type="text"
        placeholder="Search here"
        value={value}
        onChange={onChange}
      />
      <h1>{like}</h1>

      <button
        style={{
          border: "none",
          backgroundColor: "transparent",
          fontSize: 30 + "px",
        }}
        onClick={handleClick}
      >
        ❤
      </button>
    </div>
  );
}
export default UseEffect;
