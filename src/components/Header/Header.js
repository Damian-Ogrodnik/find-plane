import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import getLocation from "../../redux/location/locationUtils";

import Location from "../Location/Location";
import logo from "../../assets/airport-icon.png";
import * as S from "./Header.Styles";

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
