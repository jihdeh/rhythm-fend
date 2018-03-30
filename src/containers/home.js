import React from "react";
import { connect } from "react-redux";
import microphone from "../assets/microphone.jpg";
import "../styles/home.css";

const Home = props => {
  console.log(props);
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <img className="microphone" src={microphone} alt="hand holding a microphone on stage"/>
        </div>
        <div className="col-md-6 words">
          <div className="title">
            <h1>Welcome to SounditAfrica!</h1>
            <h4>Vote for your favourite sound</h4>
          </div>
          <div className="enter">
            <p className="login">Login</p>
            <p className="signup">Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  app: state
});

export default connect(mapStateToProps)(Home);
