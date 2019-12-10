import * as types from "./modalTypes";

export const openModal = () => {
  return {
    type: types.OPEN_MODAL
  };
};

export const closeModal = () => {
  return {
    type: types.CLOSE_MODAL
  };
};
