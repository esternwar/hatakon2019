import React from "react";

const Button = ({ onClick, text }) => (
  <div onClick={onClick}>
    <span>{text}</span>
  </div>
);

export default Button;
