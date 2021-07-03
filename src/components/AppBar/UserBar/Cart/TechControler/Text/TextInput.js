import React, { Component } from "react";
import PropTypes from "prop-types";

class TextInput extends Component {
  render() {
    const value = this.props.value;
    const userCapacity = this.props.userCapacity;
    const { miniCart, getAttributesValue, itemName, id, name } =
      this.props.data;

    return (
      <>
        <input
          checked={userCapacity === value}
          onChange={() => miniCart && getAttributesValue(name, value)}
          id={value + id}
          name={itemName + id}
          type="radio"
          value={value}
        />
        <label htmlFor={value + id}>{value}</label>
      </>
    );
  }
}

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  userCapacity: PropTypes.string,
  data: PropTypes.object.isRequired,
};
export default TextInput;
