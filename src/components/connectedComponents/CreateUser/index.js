import React from "react";
import { connect } from "react-redux";

import Modal from "../../elements/Modal";
import TextField from "../../elements/TextField";
import Select from "../../elements/Select";
import DateTime from "../../elements/DateTime";
import Checkbox from "../../elements/Checkbox";
import Button from "../../elements/Button";

import * as selector from "../../../store/mainLayout/reducer";
import * as types from "./types";

const CreateUser = ({
  name,
  lastName,
  midleName,
  bithdayDate,
  department,
  secure,
  isTemporary,
  passDate,
  isCreate,
  setName,
  setLastName,
  setMidleName,
  setBithdayDate,
  setSecure,
  setDepartment,
  setIsTemporary,
  setPassDate,
  apply
}) => (
  <Modal header={isCreate ? "Добавить сотрудника" : "Редактировать сотрудника"}>
    <TextField label={"Имя"} value={name} onChange={setName} />
    <TextField label={"Фамилия"} value={lastName} onChange={setLastName} />
    <TextField label={"Отчество"} value={midleName} onChange={setMidleName} />
    <DateTime
      label={"Дата рождения"}
      value={bithdayDate}
      onChange={setBithdayDate}
    />
    <Select
      label={"Отдел"}
      value={department}
      onChange={setDepartment}
      options={[1, 2, 3]}
    />
    <Select
      label={"Уровень доступа"}
      value={secure}
      onChange={setSecure}
      options={[1, 2, 3]}
    />
    <DateTime
      label={"Срок дейтсвия сотрудника"}
      value={passDate}
      onChange={setPassDate}
    />
    <Checkbox
      label={"Временный пропуск"}
      value={isTemporary}
      onChange={setIsTemporary}
    />
    {isTemporary && (
      <div label={"Время действия"} value={passDate} onChange={setPassDate} />
    )}

    <Button text={isCreate ? "Добавить" : "Редактировать"} onClick={apply} />
  </Modal>
);

const mapStateToProps = state => ({
  name: selector.getName(state),
  lastName: selector.getLastName(state),
  midleName: selector.getMidleName(state),
  bithdayDate: selector.getBithdayDate(state),
  department: selector.getDepatment(state),
  secure: selector.getSecure(state),
  isTemporary: selector.getName(state),
  passDate: selector.getPassDate(state),
  isCreate: selector.isCreate(state)
});

const mapDispatchToProps = dispatch => ({
  setName: value => {
    dispatch({ type: types.SET_MODAL_FIELD, key: "name", value: value });
  },
  setLastName: value => {
    dispatch({ type: types.SET_MODAL_FIELD, key: "lastName", value: value });
  },
  setMidleName: value => {
    dispatch({ type: types.SET_MODAL_FIELD, key: "midleName", value: value });
  },
  setBithdayDate: value => {
    dispatch({ type: types.SET_MODAL_FIELD, key: "bithdayDate", value: value });
  },
  setSecure: value => {
    dispatch({ type: types.SET_MODAL_FIELD, key: "secure", value: value });
  },
  setDepartment: value => {
    dispatch({ type: types.SET_MODAL_FIELD, key: "department", value: value });
  },
  setIsTemporary: value => {
    dispatch({ type: types.SET_MODAL_FIELD, key: "isTemporary", value: value });
  },
  setPassDate: value => {
    dispatch({ type: types.SET_MODAL_FIELD, key: "passDate", value: value });
  },
  apply: () => {
    dispatch({ type: types.APPLY });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser);
