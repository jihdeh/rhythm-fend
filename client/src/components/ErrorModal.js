import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class ErrorModal extends Component {
  render() {
    const { errorMessage, onClose } = this.props;
    const toggleModal = errorMessage && errorMessage.error ? true : false;
    return (
      <Modal onHide={() => onClose()} show={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Something went wrong!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{errorMessage.error}</h4>

          <hr />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => onClose()}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
