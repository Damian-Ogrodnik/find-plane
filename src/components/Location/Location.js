import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../redux/locationModal/modalActions";
import * as S from "./Location.Styles";
import LocationModal from "../LocationModal/LocationModal";
import locationIcon from "../../assets/location-icon.png";

const Location = () => {
  const location = useSelector(state => state.location.location);
  const locationError = useSelector(state => state.location.error);

  const dispatch = useDispatch();

  const roundPosition = position => {
    return Math.floor(position * 1000) / 1000;
  };

  return (
    <S.LocationWrapper>
      <S.LocationIcon
        src={locationIcon}
        onClick={() => dispatch(openModal())}
      />
      <S.PositionWrapper>
        {locationError ? (
          <S.LocationParagraph>
            {locationError.toUpperCase()}
          </S.LocationParagraph>
        ) : (
          <>
            <S.LocationParagraph>
              LAT: {roundPosition(location.latitude)}
            </S.LocationParagraph>
            <S.LocationParagraph>
              LON: {roundPosition(location.longitude)}
            </S.LocationParagraph>
          </>
        )}
      </S.PositionWrapper>
      <LocationModal />
    </S.LocationWrapper>
  );
};

export default Location;
