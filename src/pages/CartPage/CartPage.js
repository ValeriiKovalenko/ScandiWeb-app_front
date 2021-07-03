import React, { Component } from "react";
import CartPageItem from "../../components/CartPageItem/CartPageItem";
import { v4 as uuid } from "uuid";
import store from "../../store/store";

class CartPage extends Component {
  state = {
    items: [],
  };
  componentDidMount() {
    let cart = store.getState().cart;
    this.setState({ items: cart });

    store.subscribe(() => {
      cart = store.getState().cart;
      this.setState({ items: cart });
    });
  }
  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }
  render() {
    const { items } = this.state;
    return (
      <section className="cartPage">
        <h2 className="cartPage__title">CART</h2>

        {(items.length > 0 &&
          items.map((item) => {
            return <CartPageItem key={uuid()} item={item} />;
          })) || <h3>Your cart is empty</h3>}
      </section>
    );
  }
}

export default CartPage;
