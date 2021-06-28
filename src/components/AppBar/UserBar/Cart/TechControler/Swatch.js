import React, { Component } from "react";
import { v4 as uuid } from 'uuid';

export default class Swatch extends Component {
  render() {
    const { data, id, itemName } = this.props;
    return (
      <div className="swatchControler">
        {data.map(({ value, displayValue }) => {
          return (
            <div key={uuid()} className="swatchControler__box">
              <input
                id={displayValue + id}
                name={itemName}
                type="radio"
                value={displayValue}
              />
              <label
                style={{backgroundColor: value}}
                htmlFor={displayValue + id}
              ></label>
            </div>
          );
        })}
      </div>
    );
  }
}
