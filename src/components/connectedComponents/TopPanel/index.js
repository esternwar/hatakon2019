import React from "react";
import connect from "react-redux";

import * as types from "store/mainLayout/reducer";

const TopPanel = ({ setEmpoyees, setCamers }) => (
  <div>
    <div onClick={setEmpoyees}>Сотрудники</div>
    <div onClick={setCamers}>Камеры</div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  setEmpoyees: dispatch({ type: types.SET_TAB, value: 1 }),
  setCamers: dispatch({ type: types.SET_TAB, value: 2 })
});

export default connect(
  undefined,
  mapDispatchToProps
)(TopPanel);
