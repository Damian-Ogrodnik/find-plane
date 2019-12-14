import * as types from "./selectLocationTypes";

export const selectLocation = selectedLocation => {
  return {
    type: types.SELECT_LOCATION,
    payload: selectedLocation
  };
};

export const resetSelectedLocation = () => {
  return {
    type: types.RESET_LOCATION
  };
};
