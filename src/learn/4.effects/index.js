import BasicStyle from "../index.module.css";
import Cleanup from "./Cleanup";
import UseEffect from "./UseEffect";

function Effects() {
  return (
    <div className={BasicStyle.box}>
      <UseEffect />
      <br />
      <br />
      <br />
      <Cleanup />
    </div>
  );
}

export default Effects;
