import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as S from "./Location.Styles";
import LocationModal from "../LocationModal/LocationModal";
import locationIcon from "../../assets/location-icon.png";

const Location = () => {
  const location = useSelector(state => state.location.location);
  const locationError = useSelector(state => state.location.error);
  const [modalOpened, openModal] = useState(false);

  const roundPosition = position => {
    return Math.floor(position * 1000) / 1000;
  };
  return (
    <S.LocationWrapper>
      <S.LocationIcon src={locationIcon} onClick={() => openModal(true)} />
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
      <LocationModal open={modalOpened} />
    </S.LocationWrapper>
  );
};

export default Location;
