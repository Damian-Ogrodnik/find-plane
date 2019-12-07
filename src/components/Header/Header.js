import React, { useEffect } from "react";
import getLocation from "../../redux/location/locationUtils";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/airport-icon.png";
import locationIcon from "../../assets/location-icon.png";
import * as S from "./Header.Styles";

const Header = () => {
  const location = useSelector(state => state.location.location);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocation());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const roundPosition = position => {
    return Math.floor(position * 1000) / 1000;
  };

  return (
    <S.Header>
      <S.LogoWrapper>
        <S.Logo src={logo} />
        <S.Title>FIND PLANE</S.Title>
      </S.LogoWrapper>
      <S.LocationWrapper>
        <S.LocationIcon src={locationIcon} />
        <S.PositionWrapper>
          <S.LocationParagraph>
            LAT: {roundPosition(location.latitude)}
          </S.LocationParagraph>
          <S.LocationParagraph>
            LON: {roundPosition(location.longitude)}
          </S.LocationParagraph>
        </S.PositionWrapper>
      </S.LocationWrapper>
    </S.Header>
  );
};

export default Header;
