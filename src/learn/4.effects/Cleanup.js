import { useState, useEffect } from "react";

function Cleanup() {
  const [toggle, setToggle] = useState(false);
  function onClick() {
    setToggle((prev) => !prev);
  }

  function Toggle() {
    // ver 1
    useEffect(function () {
      console.log("hi :)");
      return function () {
        console.log("bye :(");
      };
    }, []);
    // ver 2 : 많이 씀
    useEffect(function () {
      console.log("hi :)");
      return () => console.log("bye :(");
    }, []);

    useEffect(() => {
      console.log("created :D");
      return () => console.log("destroyed :(");
    }, []);
    return (
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          width: 300,
          padding: 20,
          marginTop: 10,
          wordBreak: "break-all",
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur,
        dignissimos debitis? Impedit quod enim quisquam excepturi dolores neque
        dignissimos expedita in? Rem aperiam ut dolor fugiat repellat alias,
        voluptas officiis!
      </div>
    );
  }

  return (
    <div>
      <h1>Cleanup</h1>
      <button onClick={onClick}>{toggle ? "hide" : "show"}</button>
      {toggle ? <Toggle /> : null}
    </div>
  );
}
export default Cleanup;
