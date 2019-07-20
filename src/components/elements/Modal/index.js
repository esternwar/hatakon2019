import React from "react";

const Modal = ({ header, children, text }) => (
  <div>
    <div>{header}</div>
    {children}
  </div>
);

export default Modal;
