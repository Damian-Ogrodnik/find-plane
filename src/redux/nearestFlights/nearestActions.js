import * as types from "./nearestTypes";

export const getNearestFlights = () => {
  return {
    type: types.FETCH_NEAREST_FLIGHTS
  };
};

export const getNearestFlightsSucces = flights => {
  return {
    type: types.FETCH_NEAREST_FLIGHTS_SUCCES,
    payload: { flights }
  };
};

export const getNearestFlightsFailure = error => {
  return {
    type: types.FETCH_NEAREST_FLIGHTS_FAILURE,
    payload: { error }
  };
};

export const resetNearestFlights = () => {
  return {
    type: types.RESET_NEAREST_FLIGHTS
  };
};
