import React, { Component } from 'react';

export default class Payment extends Component {
    render(){
        return (
            <div>
                <form>
                    <label>
                        Card Type:
                        <select>
                            <option value="mastercard">Mastercard</option>
                            <option value="visa">Visa</option>
                            <option value="verve">Verve</option>
                        </select>
                    </label>
                    <label>
                        Card Number:
                        <input id="c-number" type="number" placeholder=""/>
                    </label>
                    <label>
                        CVV:
                        <input id="cvv" type="number" placeholder=""/>
                    </label>
                    <label>
                        Expiry Date:
                        <input id="ex-date" type="month" placeholder=""/>
                    </label>
                    <input type="button" value="Pay"/>
                </form>
            </div>
        )
    }
}