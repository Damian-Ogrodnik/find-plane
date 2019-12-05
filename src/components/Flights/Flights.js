import React, { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlights } from "../../redux/flights/flightsUtils";
import { resetNearestFlights } from "../../redux/nearestFlights/nearestActions";
import { setNearestFlights } from "../../redux/nearestFlights/nearestUtils";
import Spinner from "../Spinner/Spinner";
import Flight from "../Flight/Flight";

const Flights = () => {
  const location = useSelector(state => state.location.location);
  const flights = useSelector(state => state.flights.flights);
  const nearestFlights = useSelector(state => state.nearestFlights.flights);
  const dispatch = useDispatch();

  useEffect(() => {
    if (flights.length === 0) return;
    dispatch(setNearestFlights(location, flights));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flights]);

  const getNearestFlights = () => {
    dispatch(resetNearestFlights());
    dispatch(fetchFlights());
  };

  const renderFlights = () => {
    return nearestFlights.map(flight => <Flight flight={flight} />);
  };

  return (
    <div>
      <div>
        <button onClick={() => getNearestFlights()}>Get Nearest Flights</button>
        <div>{renderFlights()}</div>
      </div>
      <Spinner />
    </div>
  );
};

export default Flights;
