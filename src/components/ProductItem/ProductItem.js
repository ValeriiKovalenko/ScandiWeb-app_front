import React, { Component } from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import CartIcon from "../../icons/emptyCart.svg";

import store from "../../store/store";

import addToCartHandler from "../../store/actionCreators/addToCartHandler";
import itemPageHandler from "../../store/actionCreators/itemPageHandler";


// Notifications
import { success } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/Material.css";
import { defaults } from "@pnotify/core";
import "material-design-icons/iconfont/material-icons.css";

class ProductItem extends Component {
  state = {
    currency:
      localStorage.getItem("currency") ||
      store.getState().currency.value ||
      "$",
    currencyName:
      localStorage.getItem("currencyName") ||
      store.getState().currency.value ||
      "USD",
    fullPrice: "",
  };

  componentDidMount() {
    store.subscribe(() =>
      this.setState({
        currency: store.getState().currency.value?.currency,
        currencyName: store.getState().currency.value?.currencyName,
      })
    );
  }



  addToCart = () => {
    const fullPrice = this.props.item.prices?.find(
      (el) => el.currency === this.state.currencyName
    ).amount;
    const { currency } = this.state;

    store.dispatch(
      addToCartHandler({ ...this.props.item, fullPrice, currency })
    );

    //   Notification
    defaults.styling = "material";
    defaults.icons = "material";
    success({
      title: `You put ${this.props.item.name} in your cart`,
      animateSpeed: "fast",
      delay: 1500,
      sticker: false,
    });
  };
  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }
  putInStore = () => {
    const fullPrice = this.props.item.prices?.find(
      (el) => el.currency === this.state.currencyName
    ).amount;
    const { currency } = this.state;
    store.dispatch(
      itemPageHandler({ ...this.props.item, fullPrice, currency })
    );
  };



  render() {
    const { currency, currencyName } = this.state;
    const { item, from } = this.props;
    const { name, prices, gallery } = item;
    const { addToCart, putInStore } = this;
    const fullPrice = prices?.find(
      (el) => el.currency === currencyName
    )?.amount;
    return (
      <li className="productItem">
        <NavLink
          to={from + "/" + name.split(" ").join("_")}
          onClick={putInStore}
        >
          <div className="frame">
            <img className="productItem__img" src={gallery[0]} alt="" />
          </div>
          <h4>{name}</h4>
          <span>
            {currency} {fullPrice}
          </span>
        </NavLink>
        <button onClick={addToCart} type="button" className="addToCartBtn">
          <img
            className="productItem__icon"
            width="24"
            height="24"
            src={CartIcon}
            alt=""
          />
        </button>
      </li>
    );
  }
}

ProductItem.propTypes = {
    item: PropTypes.object.isRequired,
    from: PropTypes.string.isRequired
}

export default ProductItem;
