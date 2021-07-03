import React, { Component } from 'react'
import PropTypes from 'prop-types';

 class ColorInput extends Component {
     render() {
         const  displayValue  = this.props.displayValue;
         const value  = this.props.value
         const { miniCart, getAttributesValue, itemName, id, color } = this.props.data;
       
        return (
          <>
            <input
              checked={color === value}
              onChange={() => miniCart && getAttributesValue("Color", value)}
              id={displayValue + id}
              name={id+ itemName}
              type="radio"
              value={displayValue}
            />
            <label
              style={{ backgroundColor: value }}
              htmlFor={displayValue + id}
            ></label>
          </>
        );
    }
 }


ColorInput.propTypes = {
  displayValue: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};
export default ColorInput;