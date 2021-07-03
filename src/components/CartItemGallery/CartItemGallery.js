import React, { Component } from "react";
import PropsTypes from 'prop-types';

class CartItemGallery extends Component {
  state = {
    idx: 0,
  };
  swipeForward = () => {
    const { idx } = this.state;
    const { gallery } = this.props;
    this.setState((prevState) => {
      const lastIdx = gallery.length - 1;
      return idx < lastIdx ? { idx: prevState.idx + 1 } : { idx: 0 };
    });
  };
  swipeBack = () => {
    const { idx } = this.state;
    const { gallery } = this.props;
    this.setState((prevState) => {
      const lastIdx = gallery.length - 1;
      return idx > 0 ? { idx: prevState.idx - 1 } : { idx: lastIdx };
    });
  };
  render() {
    const { gallery, name } = this.props;
    const { idx } = this.state;
    const { swipeForward, swipeBack } = this;
    return (
      <div className="cart__item-gallery">
        <img src={gallery[idx]} alt={name} />
        {gallery.length > 1 && (
          <>
            <button
              type="button"
              className="cart__item-gallery-btn left"
              onClick={swipeBack}
            ></button>
            <button
              type="button"
              className="cart__item-gallery-btn right"
              onClick={swipeForward}
            ></button>
          </>
        )}
      </div>
    );
  }
}

CartItemGallery.propTypes = {
    gallery: PropsTypes.array.isRequired,
    name: PropsTypes.string.isRequired
}

export default CartItemGallery;
