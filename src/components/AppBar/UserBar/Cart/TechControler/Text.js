import React, { Component } from "react";
import { v4 as uuid } from "uuid";

class Text extends Component {
  render() {
    const { data, id, itemName, name } = this.props;
    return (
      <div className="textControler">
        {name === "Capacity"
          ? data.map(({ value }) => {
              return (
                <div key={uuid()} className="textControler__box">
                  <input
                    id={value + id}
                    name={itemName+ id}
                    type="radio"
                    value={value}
                  />
                      <label htmlFor={value + id}>{value}</label>
                </div>
              );
            })
          : ""}
      </div>
    );
  }
}
export default Text;
