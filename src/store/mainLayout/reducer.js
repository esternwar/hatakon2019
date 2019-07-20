import * as types from "./types";

const initState = {
  employees: [],
  modal: {
    name: "NAME",
    lastName: "",
    midleName: "",
    bithdayDate: "",
    department: "",
    secure: "",
    isTemporary: "",
    changeName: "",
    passDate: "",
    isCreate: true
  },
  isModalOpened: false
};

export default function mainLayoutReducer(state = initState, actions) {
  switch (actions.type) {
    case types.CREATE: {
      return state;
    }
    case types.SET_MODAL_FIELD: {
      return {
        ...state,
        modal: {
          ...state.modal,
          [actions.key]: actions.value
        }
      };
    }
    default:
      return state;
  }
}

export const getEmployees = state => state.employees;
export const getName = state => state.modal.name;
export const getLastName = state => state.modal.lastName;
export const getMidleName = state => state.modal.midleName;
export const getBithdayDate = state => state.modal.bithdayDate;
export const getDepatment = state => state.modal.depatment;
export const getSecure = state => state.modal.secure;
export const getPassDate = state => state.modal.passDate;
export const isTemporary = state => state.modal.isTemporary;
export const isCreate = state => state.modal.isCreate;
