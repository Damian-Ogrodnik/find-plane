import React from "react";
import { connect } from "react-redux";
import { selectLocation } from "../../redux/selectedLocation/selectLocationActions";
import { Map, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import * as S from "./GoogleMap.Styles";

const mapStyles = {
  width: "100%",
  height: "100%",
  textShadow: "none",
  border: "2px solid black"
};

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lng: 0
    };
  }

  componentDidMount() {
    if (!this.props.location.latitude || !this.props.location.longitude) return;
    this.setState({
      lat: this.props.location.latitude,
      lng: this.props.location.longitude
    });
  }

  setLocation(mapProps, map, clickEvent) {
    this.setState(
      {
        lat: clickEvent.latLng.lat(),
        lng: clickEvent.latLng.lng()
      },
      () =>
        this.props.selectLocation({
          latitude: this.state.lat,
          longitude: this.state.lng
        })
    );
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
          this.setLocation(mapProps, map, clickEven)
        }
      >
        <InfoWindow
          visible={true}
          position={{ lat: this.state.lat, lng: this.state.lng }}
        >
          <S.infoWrapper>
            <S.Header>CHOSEN POSITION</S.Header>
            <S.Position>
              <S.Paragraph>LAT: {this.roundPosition("lat")}</S.Paragraph>
              <S.Paragraph>LON: {this.roundPosition("lng")}</S.Paragraph>
            </S.Position>
          </S.infoWrapper>
        </InfoWindow>
      </Map>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectLocation: location => dispatch(selectLocation(location))
  };
};

const mapStateToProps = state => {
  return {
    location: state.location.location
  };
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAUjCt82CRJ4gJW92PLix2ul981OcvpmFA"
})(connect(mapStateToProps, mapDispatchToProps)(GoogleMap));
