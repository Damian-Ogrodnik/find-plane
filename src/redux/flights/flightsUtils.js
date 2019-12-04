import * as actions from "./flightsAction";
import getFlights from "../../services/flights/getFlights";

export const fetchFlights = () => async dispatch => {
  try {
    dispatch(actions.startFetchFlights());
    const flights = await getFlights();
    dispatch(actions.fetchFlightsSucces(flights));
  } catch (error) {
    dispatch(actions.fetchFlightFailure(error));
  }
};
