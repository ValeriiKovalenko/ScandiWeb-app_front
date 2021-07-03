import React, { Component } from "react";
import PropTypes from 'prop-types';
import { v4 as uuid } from "uuid";
import TextInput from './TextInput';

class Text extends Component {
  render() {
    const {
      data,
      name,
      miniCart,
      capacity
 
    } = this.props;


    return name === "Capacity" ||
      ((name === "With USB 3 ports" || name === "Touch ID in keyboard") &&
        !miniCart) ? (
      <div className="textControler">
        {data.map(({ value }) => {
          return (
            <div key={uuid()} className="textControler__box">
              <TextInput
                data={this.props}
                value={value}
                userCapacity={capacity}
              
              />
            </div>
          );
        })}
      </div>
    ) : null;
  }
}


Text.propTypes = {
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  miniCart: PropTypes.bool,
  capacity: PropTypes.string
};
export default Text;
