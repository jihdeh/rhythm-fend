import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "../styles/vote.css";

export default class voteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      focus: false
    };
  }
  render() {
    const { amount, focus } = this.state;
    const {
      voteCount,
      showcastvote,
      onVote,
      onchangeVoteAmount,
      onchangeVoteCount,
      loadingPaystack
    } = this.props;
    console.log(amount);
    return (
      <Modal
        onHide={() => this.setState({ showcastvote: false })}
        show={showcastvote}
      >
        <Modal.Body className="my--modal--cont">
          {loadingPaystack ? (
            <span className="loading--payment">Loading Payment Module...</span>
          ) : (
            <span className="vote--modal">
              <span className="vote--modal--top--cont">
                <span className="vote--modal--title">
                  Select Number of Votes
                </span>
                <span className="vote--modal--amount-cont">
                  <span
                    className={
                      voteCount === 50
                        ? "vote--modal--amount vote--select--active"
                        : "vote--modal--amount"
                    }
                    onClick={() => {
                      onchangeVoteAmount(50);
                      this.refs.amountInput.value = "";
                    }}
                  >
                    50
                  </span>
                  <span
                    className={
                      voteCount === 75
                        ? "vote--modal--amount vote--select--active"
                        : "vote--modal--amount"
                    }
                    onClick={() => {
                      onchangeVoteAmount(75);
                      this.refs.amountInput.value = "";
                    }}
                  >
                    75
                  </span>
                </span>
                <span className="vote--modal--amount-cont">
                  <span
                    className={
                      voteCount === 100
                        ? "vote--modal--amount vote--select--active"
                        : "vote--modal--amount"
                    }
                    onClick={() => {
                      onchangeVoteAmount(100);
                      this.refs.amountInput.value = "";
                    }}
                  >
                    100
                  </span>
                  <span
                    className={
                      voteCount === 200
                        ? "vote--modal--amount vote--select--active"
                        : "vote--modal--amount"
                    }
                    onClick={() => {
                      onchangeVoteAmount(200);
                      this.refs.amountInput.value = "";
                    }}
                  >
                    200
                  </span>
                </span>
              </span>
              <span className="vote--modal--bottom--cont">
                <span className="vote--modal--input--title">
                  Or Enter Number of Votes
                </span>
                <input
                  ref="amountInput"
                  className={
                    focus
                      ? "vote--modal--input vote--select--active"
                      : "vote--modal--input"
                  }
                  type="number"
                  onFocus={() => this.setState({ focus: true })}
                  onBlur={() => this.setState({ focus: false })}
                  onChange={onchangeVoteCount}
                />
              </span>
              {!loadingPaystack ? (
                <label
                  className="vote--modal--btn"
                  onClick={
                    voteCount
                      ? onVote
                      : () => alert("Please enter amount of votes")
                  }
                >
                  VOTE
                </label>
              ) : (
                <label className="vote--modal--btn">Please hold</label>
              )}
            </span>
          )}
        </Modal.Body>
      </Modal>
    );
  }
}
