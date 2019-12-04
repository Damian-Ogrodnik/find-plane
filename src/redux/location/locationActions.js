import * as types from "./locationTypes";

export const getLocation = () => {
  return {
    type: types.GET_LOCATION
  };
};

export const getLocationSucces = location => {
  return {
    type: types.GET_LOCATION_SUCCESS,
    payload: { location }
  };
};

export const getLocationFailure = error => {
  return {
    type: types.GET_LOCATION_FAILURE,
    payload: { error }
  };
};
