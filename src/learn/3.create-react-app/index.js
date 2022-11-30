import BasicStyle from "../index.module.css";
import styled from "./Index.module.css";
import Button from "./Button";

function CreateReactApp() {
  return (
    <div className={BasicStyle.box}>
      <h1 className={styled.title}>create-react-app</h1>
      <Button txt={"Click!"} />
    </div>
  );
}
export default CreateReactApp;
