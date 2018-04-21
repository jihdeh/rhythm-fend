import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap"
import "../../styles/payment.css"

class ContestantView extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleHide() {
    this.setState({ show: false });
  }

  
  render() {
    return (    
      
      <div className="modal-container">
      <Button
        className="modal-button"
        bsStyle="primary"
        bsSize="large"
        onClick={() => this.setState({ show: true })}
      >
        Proceed to payment
      </Button>

      <Modal
        show={this.state.show}
        onHide={this.handleHide}
        container={this}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">
            Payment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="payment-form"> 
            <div className="form-group payment-form-input">
              <label htmlFor="Card-number">Card Number</label>
              <input 
                type="number" 
                className="form-control payment-form-control" 
                id="" 
                required
                />
            </div>
            
            <div className="form-group payment-form-input">
              <label htmlFor="Expiry-date">Expiry Date</label>
              <div className="payment-expiry-date">
                <div className="payment-expiry-date__month">
                  <input 
                    type="number" 
                    className="form-control payment-form-control" 
                    id="" 
                    placeholder="Month" 
                    required
                    />
                </div>
                <div className="payment-expiry-date__year">
                  <input 
                    type="number" 
                    className="form-control payment-form-control" 
                    id="" 
                    placeholder="Year" 
                    required/>
                </div> 
              </div>   
            </div>
            
            <div className="payment-cvv-pin">
              <div className="form-group payment-form-input payment-form-input__cvv">
                <label htmlFor="CVV">CVV</label>
                <input 
                  type="number" 
                  className="form-control payment-form-control cvv-pin" 
                  id="" 
                  required
                  />    
              </div>
              
              <div className="form-group payment-form-input payment-form-input__pin">
                <label htmlFor="Pin">Pin</label>
                <input 
                  type="password" 
                  className="form-control payment-form-control cvv-pin" 
                  id="" 
                  required
                  />
              </div>
            </div>
            <button type="submit" className="btn btn-success">Pay</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
  }
}

export default ContestantView;