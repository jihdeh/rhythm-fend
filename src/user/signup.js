import React, { Component } from 'react';
import '../style/signup.css';

export default class Signup extends Component {

    render(){
        return (
            <div>
                <form>
                    <label>
                        First Name:
                        <input id="firstname" type="text" name="firstname" placeholder="" autoComplete="on"/>
                    </label>
                    <label>
                        Last Name:
                        <input id="lastname" type="text" name="lastname" placeholder="" autoComplete="on"/>
                    </label>
                    <label>
                        Email:
                        <input id="email" type="email" name="email" placeholder="" autoComplete="on"/>
                    </label>
                    <label>
                        Password:
                        <input id="password" type="password" name="password" placeholder="" autoComplete="on"/>
                    </label>
                    <input type="button" value="Sign Up"/>
                </form>
            </div>
        )
    }


};