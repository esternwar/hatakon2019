import React from "react";

const Item = ({
  fullName,
  passDate,
  lastStatusChangedDate,
  department,
  securityLevel
}) => (
  <div>
    <div>{fullName}</div>
    <div>{department.name}</div>
    <div>{lastStatusChangedDate}</div>
    <div>{securityLevel.name}</div>
    <div>{lastStatusChangedDate}</div>
    <div>{passDate}</div>
  </div>
);

export default Item;
