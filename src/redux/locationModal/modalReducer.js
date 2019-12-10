import * as types from "./modalTypes";

const initialState = {
  openModal: false
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_MODAL:
      return {
        ...state,
        openModal: true
      };
    case types.CLOSE_MODAL:
      return {
        ...state,
        openModal: false
      };
    default:
      return state;
  }
};

export default modalReducer;
