import * as types from "./locationTypes";

const initialState = {
  location: {},
  loading: false,
  error: ""
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LOCATION:
      return {
        ...state,
        loading: true
      };
    case types.GET_LOCATION_SUCCESS:
      return {
        ...state,
        location: action.payload.location,
        loading: false
      };
    case types.GET_LOCATION_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };
    default:
      return state;
  }
};

export default locationReducer;
