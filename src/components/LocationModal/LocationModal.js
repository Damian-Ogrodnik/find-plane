import React from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

//Modal.setAppElement("#root");

const LocationModal = () => {
  const openModal = useSelector(state => state.locationModal.openModal);
  return (
    <Modal
      isOpen={openModal}
      // onAfterOpen={this.afterOpenModal}
      // onRequestClose={this.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>I am a modal</div>
      <form></form>
    </Modal>
  );
};

export default LocationModal;
