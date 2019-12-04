import * as actions from "./locationActions";

const getLocation = () => dispatch => {
  if (navigator.geolocation) {
    dispatch(actions.getLocation());
    const options = { timeout: 60000 };
    navigator.geolocation.getCurrentPosition(
      position => {
        let { latitude, longitude } = position.coords;
        dispatch(actions.getLocationSucces({ latitude, longitude }));
      },
      error => dispatch(actions.getLocationFailure(error.message)),
      options
    );
  } else {
    dispatch(
      actions.getLocation("Sorry, browser does not support geolocation!")
    );
  }
};

export default getLocation;
