import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlights } from "../../redux/flights/flightsUtils";
import { resetNearestFlights } from "../../redux/nearestFlights/nearestActions";
import { setNearestFlights } from "../../redux/nearestFlights/nearestUtils";
import Spinner from "../Spinner/Spinner";
import Flight from "../Flight/Flight";
import Board from "../BoardHeader/BoardHeader";
import * as S from "./Flights.Styles";

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
    if (nearestFlights.length !== 0) {
      return (
        <S.Board>
          <Board />
          {nearestFlights.map(flight => (
            <Flight flight={flight} />
          ))}
        </S.Board>
      );
    }
  };

  return (
    <div>
      <S.FlexWrapper>
        <S.Button onClick={() => getNearestFlights()}>GET FLIGHTS</S.Button>
      </S.FlexWrapper>
      <S.FlexWrapper>
        <Spinner />
      </S.FlexWrapper>
      {renderFlights()}
    </div>
  );
};

export default Flights;
