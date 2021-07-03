import React, { Component } from "react";
import CartIcon from "../../../../icons/cart.svg";
import CartItem from "./CartItem";
import store from "../../../../store/store";
import { v4 as uuid } from "uuid";
import { NavLink } from "react-router-dom";
import routes from "../../../../routes";

export default class Cart extends Component {
  state = {
    items: JSON.parse(localStorage.getItem("cart")) || [],
    menuIsOpen: false,
    total: 0,
    currency: "",
  };
  componentDidMount() {
    store.subscribe(() => {
      const cart = store.getState().cart;
      this.setState({ items: cart });
      this.countTotal(cart);
    });
  }

  toggleCartMenu = () => {
    this.setState((prevState) => ({ menuIsOpen: !prevState.menuIsOpen }));
    if (!this.state.menuIsOpen) {
      window.scrollTo({ top: 0, behavior: "auto" });
      window.onscroll = () => window.scrollTo({ top: 0, behavior: "auto" });
    } else {
      window.onscroll = null;
    }
  };
  countTotal = (cart) => {
    const total = cart
      .reduce((acc, item) => {
        return (acc += item.quantity * item.fullPrice);
      }, 0)
      .toFixed(2);
    const currency = store.getState().currency.value.currency;

    this.setState({ total, currency });
  };

  closeOverlay = (e) => {
    if (e.target === e.currentTarget) {
      this.toggleCartMenu();
    }
  };
  
  componentWillUnmount() {
    this.setState = ()=> {return}
  }
  render() {
    const { items, menuIsOpen, total, currency } = this.state;
    const { toggleCartMenu, closeOverlay } = this;
    const menuHandler = ["cart__menu", menuIsOpen ? "" : "hidden"].join(" ");

    return (
      <div className="cart">
        <button className="cart__btn" type="button" onClick={toggleCartMenu}>
          {items.length > 0 && (
            <div className="cart__counter">{items.length}</div>
          )}
          <img className="cart__icon" src={CartIcon} alt="" />
        </button>

        <div className={menuHandler}>
          <div onClick={closeOverlay} className="cart__overlay">
            <div className="cart__feeling">
              <h3 className="cart__feeling-title">
                My Bag,{" "}
                <span className="cart__feeling-count">
                  {items.length}{" "}
                  {items.length > 1 || items.length === 0 ? "items" : "item"}
                </span>
              </h3>
              <ul className="cart__list">
                {items.map((item) => {
                  return <CartItem data={item} key={uuid()} />;
                })}
              </ul>
              <div className="cart__total-price">
                <span className="cart__total-price__title">Total</span>
                <span className="cart__total-price__price">
                  {currency}
                  {total}
                </span>
              </div>
              {items.length > 0 && (
                <div className="cart__controls">
                  <NavLink to={routes.cart}>
                    {" "}
                    <button
                      onClick={toggleCartMenu}
                      type="button"
                      className="cart__controls-bag"
                    >
                      VIEW BAG
                    </button>
                  </NavLink>
                  <button type="button" className="cart__controls-check">
                    CHECK OUT
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
