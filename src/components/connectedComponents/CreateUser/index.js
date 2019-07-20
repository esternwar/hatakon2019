import React from "react";
import { connect } from "react-redux";

import Modal from "../../elements/Modal";
import TextField from "../../elements/TextField";
import Select from "../../elements/Select";
import DateTime from "../../elements/DateTime";
import Checkbox from "../../elements/Checkbox";
import Button from "../../elements/Button";

import * as selector from "../../../store/mainLayout/reducer";
import * as actions from "../../../store/mainLayout/actions";

const CreateUser = ({
  name,
  lastName,
  midleName,
  bithdayDate,
  department,
  secure,
  isTemporary,
  setModalField,
  passDate,
  isCreate,
  apply
}) => (
  <Modal header={isCreate ? "Добавить сотрудника" : "Редактировать сотрудника"}>
    <TextField label={"Имя"} value={name} onChange={setModalField} />
    <TextField label={"Фамилия"} value={lastName} onChange={setModalField} />
    <TextField label={"Отчество"} value={midleName} onChange={setModalField} />
    <DateTime
      label={"Дата рождения"}
      value={bithdayDate}
      onChange={setModalField}
    />
    <Select label={"Отдел"} value={department} onChange={setModalField} />
    <Select label={"Уровень доступа"} value={secure} onChange={setModalField} />
    <DateTime
      label={"Срок дейтсвия сотрудника"}
      value={passDate}
      onChange={setModalField}
    />
    <Checkbox
      label={"Временный пропуск"}
      value={isTemporary}
      onChange={setModalField}
    />
    {/*<div label={"Прилепить"} value={dateThree} onChange={changeName} />*/}

    <Button text={isCreate ? "Добавить" : "Редактировать"} onClick={apply} />
  </Modal>
);

const mapStateToProps = state => ({
  name: selector.getName(state),
  lastName: selector.getName(state),
  midleName: selector.getName(state),
  bithdayDate: selector.getName(state),
  department: selector.getName(state),
  secure: selector.getName(state),
  isTemporary: selector.getName(state),
  changeName: selector.getName(state),
  passDate: selector.getName(state),
  isCreate: selector.getName(state)
});

const mapDispatchToProps = dispatch => ({
  setModalField: value => dispatch(actions.setModalField(value)),
  apply: () => dispatch(actions.apply())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser);
