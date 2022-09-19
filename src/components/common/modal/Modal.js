import React from "react";
import { Background } from "./Modal.styled";

const Modal = ({ children, align,onBlur }) => {
  return (
    <Background align={align} onClick={() => (onBlur ? onBlur() : null)}>
      {children}
    </Background>
  );
};

export default Modal;
