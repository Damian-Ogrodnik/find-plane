import React, { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlights } from "../../redux/flights/flightsUtils";
import getLocation from "../../redux/location/locationUtils";
import { setNearestFlights } from "../../redux/nearestFlights/nearestUtils";

const Flights = () => {
  const location = useSelector(state => state.location.location);
  const flights = useSelector(state => state.flights.flights);
  const nearestFlights = useSelector(state => state.nearestFlights.flights);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlights());
    dispatch(getLocation());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(setNearestFlights(location, flights));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, flights]);

  const renderFlights = () => {
    return nearestFlights.map(flight => (
      <div className="flight">
        <h3>Flight Number:{flight.callsign}</h3>
        <p>Origin Country:{flight.origin_country}</p>
        <b>Distance: {flight.distance}</b>
      </div>
    ));
  };

  return (
    <div>
      <div>
        Your location: {location.latitude} latitude, {location.longitude}
        longitude
      </div>
      <div>
        <h2>Flights</h2>
        <div>{renderFlights()}</div>
      </div>
    </div>
  );
};

export default Flights;
