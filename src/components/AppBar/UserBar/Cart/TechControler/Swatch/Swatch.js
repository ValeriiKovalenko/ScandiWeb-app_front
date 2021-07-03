import React, { Component } from "react";
import PropTypes from 'prop-types';
import { v4 as uuid } from "uuid";
import ColorInput from "./ColorInput";

 class Swatch extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="swatchControler">
        {data.map(({ value, displayValue }) => {
          return (
            <div key={uuid()} className="swatchControler__box">
              <ColorInput
                data={this.props}
                value={value}
                displayValue={displayValue}
              />
            </div>
          );
        })}
      </div>
    );
  }
 }

Swatch.propTypes = {
   data: PropTypes.array.isRequired
 }

export default Swatch;
