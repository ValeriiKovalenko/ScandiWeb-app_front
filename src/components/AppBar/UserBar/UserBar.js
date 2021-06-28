import React, { Component } from "react";
import CurrencyPicker from './CurrencyPicker/CurrencyPicker';
import Cart from './Cart/Cart';
import './UserBar.scss';

export default class UserBar extends Component {
  render() {
    return (
      <div className="userBar">
        <CurrencyPicker />
        <Cart />
        
      </div>
    );
  }
}
