import * as actions from "./nearestActions";
import getNearestFlights from "../../services/flights/getNearestFligts";

export const setNearestFlights = (location, flightsArray) => async dispatch => {
  dispatch(actions.getNearestFlights());
  const flights = await getNearestFlights(location, flightsArray);
  if (flights == 0) {
    dispatch(actions.getNearestFlightsFailure("Something went wrong..."));
  } else {
    dispatch(actions.getNearestFlightsSucces(flights));
  }
};
