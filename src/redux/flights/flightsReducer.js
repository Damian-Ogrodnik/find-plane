import * as types from "./flightsTypes";

const initialState = {
  flights: [],
  loading: false,
  error: ""
};

const fligthsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_FLIGHTS:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_FLIGHTS_SUCCES:
      return {
        ...state,
        flights: action.payload.flights,
        loading: false
      };
    case types.FETCH_FLIGHTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };
    default:
      return state;
  }
};

export default fligthsReducer;
