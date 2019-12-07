import React, { useEffect } from "react";
import getLocation from "../../redux/location/locationUtils";
import { useDispatch } from "react-redux";
import logo from "../../assets/airport-icon.png";
import * as S from "./Header.Styles";
import Location from "../Location/Location";

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocation());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Header>
      <S.LogoWrapper>
        <S.Logo src={logo} />
        <S.Title>FIND PLANE</S.Title>
      </S.LogoWrapper>
      <Location />
    </S.Header>
  );
};

export default Header;
