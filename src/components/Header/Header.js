import React, { useEffect } from "react";
import getLocation from "../../redux/location/locationUtils";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const location = useSelector(state => state.location.location);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocation());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Header</h1>
      Your location: {location.latitude} latitude, {location.longitude}
      longitude
    </div>
  );
};

export default Header;
