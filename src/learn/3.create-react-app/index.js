import styled from "./Index.module.css";
import Button from "./Button";

function CreateReactApp() {
  return (
    <div style={{ border: "5px solid black", padding: "20px" }} s>
      <h1 className={styled.title}>create-react-app</h1>
      <Button txt={"Click!"} />
    </div>
  );
}
export default CreateReactApp;
