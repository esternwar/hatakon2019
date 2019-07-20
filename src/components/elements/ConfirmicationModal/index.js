import React from "react";

import Button from "components/elements/Button";
import Reject from "components/elements/Reject";

const ConfirmicationModal = ({ header, onApply, onReject, text }) => (
  <div>
    <Reject onClick={onReject} />
    <div>{header}</div>
    <span>{lable}</span>
    <Button onClick={onApply} text={text} />
  </div>
);

export default ConfirmicationModal;
