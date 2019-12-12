import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
  textShadow: "none",
  border: "2px solid black"
};

class GoogleMap extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={2}
        style={mapStyles}
        initialCenter={{ lat: 0, lng: 0 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAUjCt82CRJ4gJW92PLix2ul981OcvpmFA"
})(GoogleMap);
