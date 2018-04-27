import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class ErrorModal extends Component {
  render() {
    const { errorMessage, onClose } = this.props;
    const toggleModal = errorMessage && errorMessage.error ? true : false;
    return (
      <Modal show={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>

          <hr />

          <h4>Overflowing text to show scroll behavior</h4>
          <p>{errorMessage && errorMessage.error}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
