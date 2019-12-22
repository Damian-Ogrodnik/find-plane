import React from "react";
import { useSelector } from "react-redux";
import { GridLoader } from "react-spinners";

const Spinner = () => {
  const flightsLoading = useSelector(state => state.flights.loading);
  const nearestFlightsLoading = useSelector(
    state => state.nearestFlights.loading
  );
  return (
    <GridLoader
      loading={flightsLoading || nearestFlightsLoading}
      color={"#FFF"}
    />
  );
};

export { Spinner };
