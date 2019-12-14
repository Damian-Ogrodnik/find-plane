import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { closeModal } from "../../redux/locationModal/modalActions";
import { getLocationSucces } from "../../redux/location/locationActions";
import * as S from "./Location.Styles";
import GoogleMap from "../Map/GoogleMap";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    background: "rgb(68, 68, 68)",
    border: "2px solid white",
    transform: "translate(-50%, -50%)",
    width: "75%",
    height: "80%"
  }
};

//Modal.setAppElement("#root");

const LocationModal = () => {
  const openModal = useSelector(state => state.locationModal.openModal);
  const selectedLocation = useSelector(
    state => state.selectedLocation.selectedLocation
  );
  const dispatch = useDispatch();

  const setLocation = () => {
    dispatch(closeModal());
    dispatch(getLocationSucces(selectedLocation));
  };

  return (
    <Modal
      isOpen={openModal}
      style={customStyles}
      contentLabel="Location Modal"
    >
      <S.FlexWrapper>
        <S.Header>SELECT LOCATION</S.Header>
        <S.MapWrapper>
          <GoogleMap />
        </S.MapWrapper>
        <S.Button onClick={() => setLocation()}>SAVE</S.Button>
      </S.FlexWrapper>
    </Modal>
  );
};

export default LocationModal;
