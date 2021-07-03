import React, { Component } from "react";

export default class Input extends Component {
  state = {
    checked: false,
  };
    componentDidMount() {
        if (this.props?.userSize?.value === this.props.displayValue) {
          this.setState({checked: true})
      }
  }
  render() {
    const {
      id,
      displayValue,
      location,
      attributeName,
      getAttributesValue,
      miniCart,
      productName,
    } = this.props;
    return (
      <div
        className={`${
          location === "page" ? "page__sizeInputBox" : "cart__sizeInputBox"
        }`}
      >
        <input
          checked={this.props?.userSize?.value === this.props.displayValue}
          onChange={(e) => {
            miniCart && getAttributesValue(attributeName, displayValue);
            // getSize(e);
          }}
          id={displayValue + id}
          className={`${
            location === "page" ? "page__sizeInput" : "cart__sizeInput"
          }`}
          name={productName+id}
          type="radio"
          value={displayValue}
        />
        <label
          className={`${
            location === "page" ? "page__sizeLabel" : "cart__sizeLabel"
          }`}
          htmlFor={displayValue + id}
        >
          {displayValue}
        </label>
      </div>
    );
  }
}
