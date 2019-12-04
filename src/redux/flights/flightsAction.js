import * as types from "./flightsTypes";

export const startFetchFlights = () => {
  return {
    type: types.FETCH_FLIGHTS
  };
};

export const fetchFlightsSucces = flights => {
  return {
    type: types.FETCH_FLIGHTS_SUCCES,
    payload: { flights }
  };
};

export const fetchFlightFailure = error => {
  return {
    type: types.FETCH_FLIGHTS_FAILURE,
    payload: { error }
  };
};
