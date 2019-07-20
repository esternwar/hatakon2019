import React from "react";
import LazyLoading from "react-list-lazy-load";
import Item from "components/elements/Item";

const List = ({ items, onRequestPage, employees }) => (
  <LazyLoading
    length={items.length}
    items={items}
    onRequestPage={onRequestPage}
    className={"maint-list"}
  >
    {employees.map(item => (
      <Item>data={item}</Item>
    ))}
  </LazyLoading>
);

export default List;
