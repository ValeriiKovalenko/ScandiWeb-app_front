import React, { Component } from "react";
import SizeControler from "./SizeControler";
import TechControler from "./TechControler/TechControler";
import store from '../../../../store/store';
import addToCartHandler from '../../../../store/actionCreators/addToCartHandler';

class CartItem extends Component {





  addMoreItems = () => {
    store.dispatch(
      addToCartHandler({ ...this.props.data })
    );
  };
  render() {
    const {
      name,
      fullPrice,
      gallery,
      attributes,
      currency,
      category,
        quantity,
      totalPrice
    } = this.props.data;
      const { addMoreItems } = this;
    return (
      <li className="cart__item">
        <div className="cart__item-info">
          <h4 className="cart__item-title">{name}</h4>
          <span>
            {currency}
            {totalPrice ? totalPrice.toFixed(2) : fullPrice}
          </span>

          {category === "clothes" && (
            <SizeControler attributes={attributes} itemName={name} />
          )}
          {category === "tech" && (
            <TechControler attributes={attributes} itemName={name} />
          )}
        </div>
        <div className="cart__item-quantity">
          <button
            onClick={addMoreItems}
            className="cart__item-quantity__btn plus"
            type="button"
          >
            <span></span>
          </button>
          <span>{quantity}</span>
          <button className="cart__item-quantity__btn minus" type="button">
            <span></span>
          </button>
        </div>
        <div className="cart__item-img">
          <img width="30" src={gallery[0]} alt="" />
        </div>
      </li>
    );
  }
}

export default CartItem;
