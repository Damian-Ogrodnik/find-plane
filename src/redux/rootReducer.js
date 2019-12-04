import { combineReducers } from "redux";
import flightsReducer from "./flights/flightsReducer";
import locationReducer from "./location/locationReducer";
import nearestFlightsReducer from "./nearestFlights/nearestReducer";

const rootReducer = combineReducers({
  flights: flightsReducer,
  location: locationReducer,
  nearestFlights: nearestFlightsReducer
});

export default rootReducer;
