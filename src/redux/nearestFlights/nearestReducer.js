import * as types from "./nearestTypes";

const initialState = {
  flights: [],
  loading: false,
  error: ""
};

const nearestFligthsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_NEAREST_FLIGHTS:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_NEAREST_FLIGHTS_SUCCES:
      return {
        ...state,
        flights: action.payload.flights,
        loading: false
      };
    case types.FETCH_NEAREST_FLIGHTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };
    default:
      return state;
  }
};

export default nearestFligthsReducer;
