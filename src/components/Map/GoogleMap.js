import React from "react";
import { Map, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import * as S from "./GoogleMap.Styles";

const mapStyles = {
  width: "100%",
  height: "100%",
  textShadow: "none",
  border: "2px solid black"
};

const infoStyles = {
  position: "relative",
  border: "30px solid red !important"
};

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lng: 0
    };
  }
  mapClicked(mapProps, map, clickEvent) {
    this.setState({
      lat: clickEvent.latLng.lat(),
      lng: clickEvent.latLng.lng()
    });
  }

  roundPosition(position) {
    return position === "lat"
      ? Math.floor(this.state.lat * 1000) / 1000
      : Math.floor(this.state.lng * 1000) / 1000;
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={2}
        style={mapStyles}
        initialCenter={{ lat: 0, lng: 0 }}
        onClick={(mapProps, map, clickEven) =>
          this.mapClicked(mapProps, map, clickEven)
        }
      >
        <InfoWindow
          style={infoStyles}
          visible={true}
          position={{ lat: this.state.lat, lng: this.state.lng }}
        >
          <S.infoWrapper>
            <S.Header>CHOSEN POSITION</S.Header>
            <S.Position>
              LAT: {this.roundPosition("lat")} LON: {this.roundPosition("lng")}
            </S.Position>
          </S.infoWrapper>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAUjCt82CRJ4gJW92PLix2ul981OcvpmFA"
})(GoogleMap);
