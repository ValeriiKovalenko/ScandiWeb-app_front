import React, { Component } from "react";
import { v4 as uuid } from "uuid";

class sizeControler extends Component {
  state = {
    id: uuid(),
  };
  render() {
    const { attributes, itemName, location = "cart" } = this.props;
    const { id } = this.state;
    return (
      <div
        className={`${
          location === "page" ? "page__sizeControler" : "cart__sizeControler"
        }`}
      >
        {attributes.map(({ name, items }) => {
          return items.map(({ displayValue }) => {
            return (
              <div
                key={uuid()}
                className={`${
                  location === "page"
                    ? "page__sizeInputBox"
                    : "cart__sizeInputBox"
                }`}
              >
                <input
                  id={displayValue + id}
                  className={`${
                    location === "page"
                      ? "page__sizeInput"
                      : "cart__sizeInput"
                  }`}
                  name={itemName}
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
          });
        })}
      </div>
    );
  }
}

export default sizeControler;
