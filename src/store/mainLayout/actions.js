import types from "../../components/connectedComponents/CreateUser/types";

export const setModalField = (key, value) => dispatch => {
  dispatch({ types: types.SET_MODAL_FIELD, key, value });
};

export const apply = () => dispatch => {};
