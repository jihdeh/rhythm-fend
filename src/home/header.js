import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component{

    render(){
        return(
            <div className="header">
                <Link to="/login"><button className="login-button">Log In</button></Link>
                <Link to="/signup"><button className="signup-button">Sign up</button></Link>
                <Link to="/payment"><button className="pay-button">Pay</button></Link>
            </div>
        )
    }
}