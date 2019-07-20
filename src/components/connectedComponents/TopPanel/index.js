import React from "react";
import { connect } from "react-redux";

import * as types from "../../../store/mainLayout/globalTypes";

const TopPanel = ({ setEmpoyees, setCamers, toogleModal }) => (
  <div>
    <div onClick={setEmpoyees}>Сотрудники</div>
    <div onClick={setCamers}>Камеры</div>
    <div onClick={toogleModal}>Добавить сотрудника</div>>
  </div>
);

const mapDispatchToProps = dispatch => ({
  setEmpoyees: dispatch({ type: types.SET_TAB, value: 1 }),
  setCamers: dispatch({ type: types.SET_TAB, value: 2 }),
  toogleModal: () => {
    dispatch({ type: types.TOOGLE_MODAL, value: true, setCreate: true });
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(TopPanel);
