import React, { Component } from "react";
import Swatch from "./Swatch";
import Text from "./Text";
import { v4 as uuid } from "uuid";

class TechControler extends Component {
  state = {
    id: uuid(),
  };
  render() {
    const { attributes, itemName } = this.props;
    const { id } = this.state;
    return (
      <>
        {attributes.map(({ type, items, name }) => {
        if (type === "swatch"){  
           return <Swatch key={uuid()} data={items} id={id} itemName={itemName} />}
         if (type === "text"){
         return  <Text key={uuid()} data={items} name={name} id={id} itemName={itemName} />}
          return true
        })}
      </>
    );
  }
}

export default TechControler;
