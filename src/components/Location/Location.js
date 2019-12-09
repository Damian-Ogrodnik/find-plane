import React from "react";
import { useSelector } from "react-redux";
import * as S from "./Location.Styles";
import locationIcon from "../../assets/location-icon.png";

const Location = () => {
  const location = useSelector(state => state.location.location);
  const locationError = useSelector(state => state.location.error);

  const roundPosition = position => {
    return Math.floor(position * 1000) / 1000;
  };
  return (
    <S.LocationWrapper>
      <S.LocationIcon src={locationIcon} />
      <S.PositionWrapper>
        <S.LocationParagraph>
          {locationError
            ? locationError.toUpperCase()
            : `LAT: ${roundPosition(location.latitude)}`}
        </S.LocationParagraph>
        <S.LocationParagraph>
          {locationError ? null : `LON: ${roundPosition(location.longitude)}`}
        </S.LocationParagraph>
      </S.PositionWrapper>
    </S.LocationWrapper>
  );
};

export default Location;
