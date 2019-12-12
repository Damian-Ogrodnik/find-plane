import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { closeModal } from "../../redux/locationModal/modalActions";
import * as S from "./Location.Styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    background: "rgb(68, 68, 68)",
    border: "2px solid white",
    transform: "translate(-50%, -50%)",
    width: "75%"
  }
};

//Modal.setAppElement("#root");

const LocationModal = () => {
  const openModal = useSelector(state => state.locationModal.openModal);
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={openModal}
      // onAfterOpen={this.afterOpenModal}
      // onRequestClose={this.closeModal}
      style={customStyles}
      contentLabel="Location Modal"
    >
      <S.FlexWrapper>
        <S.Header>INSERT LOCATION</S.Header>
        <form>
          <div>
            LATITUDE
            <input type="text" />
          </div>
          <div>
            LONGITUDE
            <input type="text" />
          </div>
        </form>
        <S.Button onClick={() => dispatch(closeModal())}>SAVE</S.Button>
      </S.FlexWrapper>
    </Modal>
  );
};

export default LocationModal;
