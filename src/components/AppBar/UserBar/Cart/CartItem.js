import React, { Component } from "react";
import PropTypes from "prop-types";
import SizeControler from "./SizeControler/SizeControler";
import TechControler from "./TechControler/TechControler";
import store from "../../../../store/store";
import addToCartHandler from "../../../../store/actionCreators/addToCartHandler";
import removeFromCartHandler from "../../../../store/actionCreators/removeFromCartHandler";
import attributesHandler from "../../../../store/actionCreators/attributesHandler";

class CartItem extends Component {
  state = {
    name: this.props.data.name,
    attributesValue: {},
  };

  addMoreItems = () => {
    store.dispatch(addToCartHandler({ ...this.props.data }));
  };
  takeOneFromCart = () => {
    store.dispatch(removeFromCartHandler({ ...this.props.data }));
  };
  getAttributesValue = (name, value) => {
    store.dispatch(
      attributesHandler({
        itemName: this.props.data.name,
        attributeName: name,
        value,
      })
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
      totalPrice,
      Color,
        Size,
      Capacity
    } = this.props.data;
    const { addMoreItems, takeOneFromCart, getAttributesValue } = this;
    return (
      <li className="cart__item">
        <div className="cart__item-info">
          <h4 className="cart__item-title">{name}</h4>
          <span>
            {currency}
            {totalPrice || fullPrice}
          </span>

          {category === "clothes" && (
            <SizeControler
              userSize={Size}
              attributes={attributes}
              itemName={name}
              getAttributesValue={getAttributesValue}
              miniCart={true}
            />
          )}
          {category === "tech" && (
            <TechControler
              attributes={attributes}
              itemName={name}
              getAttributesValue={getAttributesValue}
              Color={Color}
              Capacity={Capacity}
            />
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
          <button
            onClick={takeOneFromCart}
            className="cart__item-quantity__btn minus"
            type="button"
          >
            <span></span>
          </button>
        </div>
        <div className="cart__item-img">
          <img width="30" src={gallery?.[0]} alt="" />
        </div>
      </li>
    );
  }
}

CartItem.protoTypes = {
    data: PropTypes.object.isRequired
}

export default CartItem;
