import * as types from "./selectLocationTypes";

const initialState = {
  selectedLocation: {}
};

const selectLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_LOCATION:
      return {
        ...state,
        selectedLocation: action.payload
      };
    case types.RESET_LOCATION:
      return {
        ...state,
        selectedLocation: {}
      };
    default:
      return state;
  }
};

export default selectLocationReducer;
