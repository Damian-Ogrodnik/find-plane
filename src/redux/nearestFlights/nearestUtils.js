import * as actions from "./nearestActions";
import getNearestFlights from "../../services/flights/getNearestFligts";

export const setNearestFlights = (location, flightsArray) => async dispatch => {
  dispatch(actions.getNearestFlights());
  let flights = await getNearestFlights(location, flightsArray);
  if (flights.length === 0) {
    flights = await getNearestFlights(location, flightsArray, 50);
    flights.length === 0
      ? dispatch(actions.getNearestFlightsFailure("Something went wrong..."))
      : flights.length > 20
      ? dispatch(actions.getNearestFlightsSucces(flights.splice(0, 19)))
      : dispatch(actions.getNearestFlightsSucces(flights));
  } else {
    flights.length > 20
      ? dispatch(actions.getNearestFlightsSucces(flights.splice(0, 19)))
      : dispatch(actions.getNearestFlightsSucces(flights));
  }
};
