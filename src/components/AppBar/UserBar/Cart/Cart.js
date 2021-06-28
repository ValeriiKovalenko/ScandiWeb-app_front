import React, { Component } from "react";
import CartIcon from "../../../../icons/cart.svg";
import CartItem from "./CartItem";
import store from "../../../../store/store";
import { v4 as uuid } from "uuid";

export default class Cart extends Component {
  state = {
    items: JSON.parse(localStorage.getItem("cart")) || [],
    menuIsOpen: false,
  };
  componentDidMount() {
    store.subscribe(() => {
      const cart = store.getState().cart;
      console.log(cart);
      this.setState({ items: cart });
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

  closeOverlay = (e) => {
    if (e.target === e.currentTarget) {
      this.toggleCartMenu();
    }
  };

  render() {
    const { items, menuIsOpen } = this.state;
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
                <span>
                  {items.length}{" "}
                  {items.length > 1 || items.length === 0 ? "items" : "item"}
                </span>
              </h3>
              <ul className="cart__list">
                {items.map((item) => {
                  return <CartItem data={item} key={uuid()} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
