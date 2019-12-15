import * as actions from "./nearestActions";
import getNearestFlights from "../../services/flights/getNearestFligts";

export const setNearestFlights = (location, flightsArray) => async dispatch => {
  dispatch(actions.getNearestFlights());
  let flights = await getNearestFlights(location, flightsArray);
  if (flights.length === 0) {
    flights = await getNearestFlights(location, flightsArray, 30);

    // flightsEXP.length === 0
    //   ? dispatch(actions.getNearestFlightsFailure("Something went wrong..."))
    //   : dispatch(actions.getNearestFlightsSucces(flights));
  } else {
    dispatch(actions.getNearestFlightsSucces(flights));
  }
};
