import React from "react";
import { connect } from "react-redux";

const Home = props => {
  console.log(props);
  return (
    <div>
      <h1>Welcome to the SounditAfrica!</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  app: state
});

export default connect(mapStateToProps)(Home);
