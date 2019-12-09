import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlights } from "../../redux/flights/flightsUtils";
import { resetNearestFlights } from "../../redux/nearestFlights/nearestActions";
import { setNearestFlights } from "../../redux/nearestFlights/nearestUtils";
import Spinner from "../Spinner/Spinner";
import Flight from "../Flight/Flight";
import BoardHeader from "../BoardHeader/BoardHeader";
import * as S from "./Flights.Styles";

const Flights = () => {
  const [clicked, setClick] = useState(false);
  const location = useSelector(state => state.location.location);
  const locationError = useSelector(state => state.location.error);
  const flights = useSelector(state => state.flights.flights);
  const nearestFlights = useSelector(state => state.nearestFlights.flights);
  const dispatch = useDispatch();

  useEffect(() => {
    if (flights.length === 0) return;
    dispatch(setNearestFlights(location, flights));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flights]);

  const getNearestFlights = () => {
    if (locationError) return setClick(true);
    setClick(false);
    dispatch(resetNearestFlights());
    dispatch(fetchFlights());
  };

  const renderFlights = () => {
    if (nearestFlights.length !== 0) {
      return (
        <S.Board>
          <BoardHeader />
          {nearestFlights.map(flight => (
            <Flight key={flight.callsign} flight={flight} />
          ))}
        </S.Board>
      );
    }
  };

  const renderError = () => {
    if (locationError && clicked)
      return <S.Error>YOU HAVE TO SET LOCATION BEFORE SEARCH</S.Error>;
  };

  return (
    <S.Flights>
      <S.FlexWrapper>
        <S.Button onClick={() => getNearestFlights()}>GET FLIGHTS</S.Button>
        <Spinner />
        {renderError()}
      </S.FlexWrapper>
      {renderFlights()}
    </S.Flights>
  );
};

export default Flights;
