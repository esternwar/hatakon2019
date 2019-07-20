import * as modalTypes from "../../components/connectedComponents/CreateUser/types";
import * as panelTypes from "./globalTypes";

const initState = {
  employees: [],
  modal: {
    name: "",
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
  setCreate: true,
  isModalOpened: false,
  panel: 1,
  serverSideLists: {
    departments: [],
    status: [],
    secureLevels: []
  }
};

export default function mainLayoutReducer(state = initState, actions) {
  switch (actions.type) {
    case modalTypes.CREATE: {
      return state;
    }
    case modalTypes.SET_MODAL_FIELD: {
      return {
        ...state,
        modal: {
          ...state.modal,
          [actions.key]: actions.value
        }
      };
    }

    case panelTypes.SET_TAB: {
      return {
        ...state,
        panel: actions.value
      };
    }

    case panelTypes.TOOGLE_MODAL: {
      return {
        ...state,
        isModalOpened: actions.value,
        setCreate: actions.setCreate
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

export const getServerSideList = (state, name) => state.serverSideLists[name];
