import React from "react";
import * as S from "./Flight.Styles";

const Flight = ({ flight: { callsign, origin_country, distance } }) => {
  let flightLength = 16;
  let countryLenght = 18;
  let distanceLength = 11;

  const renderFlight = (category, maxLetters) => {
    let letters = maxLetters;
    let word = category.toString();
    let lettersArray = word.split("");
    if (lettersArray.length >= maxLetters) {
      lettersArray = lettersArray.slice(0, maxLetters);
    }
    const finalArray = lettersArray.map(letter => {
      letters--;
      return <S.Letter>{letter}</S.Letter>;
    });
    for (let i = 0; i < letters; i++) {
      finalArray.push(<S.Letter />);
    }
    return finalArray;
  };
  return (
    <S.Flight>
      <S.Column>{renderFlight(callsign, flightLength)}</S.Column>
      <S.Column>{renderFlight(origin_country, countryLenght)}</S.Column>
      <S.Column>{renderFlight(distance, distanceLength)}</S.Column>
    </S.Flight>
  );
};

export default Flight;
