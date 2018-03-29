import React, { Component } from 'react';
import '../style/login.css';

export default class Login extends Component {
   

    render(){
        return (
            <div>
                <form>
                    <label>
                        Email:
                        <input id="email" type="email" placeholder="" autoComplete="on"/>
                    </label>
                    <label>
                        Password:
                        <input id="password" type="password" placeholder="" autoComplete="on"/>
                    </label>
                    <input type="button" value="Log In"/>
                </form>
            </div>
        )
    }


};