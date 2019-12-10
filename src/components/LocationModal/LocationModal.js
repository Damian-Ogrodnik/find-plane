import React from "react";
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

const LocationModal = ({ open }) => {
  return (
    <Modal
      isOpen={open}
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
