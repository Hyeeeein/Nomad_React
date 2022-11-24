import { PropTypes } from "prop-types";
import styled from "./Button.module.css";

function Button({ txt }) {
  return <button className={styled.btn}>{txt}</button>;
}

Button.propTypes = {
  txt: PropTypes.string.isRequired,
};

export default Button;
