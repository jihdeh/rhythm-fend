import React, { Component } from 'react';

export default class Payment extends Component {
    render(){
        return (
            <div>
                <form>
                    <label>
                        Card Type:
                        <select>
                            <option value="grapefruit">Mastercard</option>
                            <option value="lime">Visa</option>
                            <option value="mango">Verve</option>
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