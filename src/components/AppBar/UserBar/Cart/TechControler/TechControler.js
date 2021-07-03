import React, { Component } from "react";
import Swatch from "./Swatch/Swatch";
import Text from "./Text/Text";
import { v4 as uuid } from "uuid";

class TechControler extends Component {
  state = {
    id: uuid(),
    miniCart: true
  };
  render() {
    const {
      attributes,
      itemName,
      getAttributesValue, Color, Capacity } = this.props;
    const { id, miniCart } = this.state;
    
    return (
      <>
        {attributes.map(({ type, items, name }) => {
        if (type === "swatch"){  
           return (
             <Swatch
               key={uuid()}
               data={items}
               id={id}
               itemName={itemName}
               getAttributesValue={getAttributesValue}
               miniCart={miniCart}
               color={Color?.value}
             />
           );}
         if (type === "text") {
           return (
             <Text
               getAttributesValue={getAttributesValue}
               key={uuid()}
               data={items}
               name={name}
               id={id}
               itemName={itemName}
               miniCart={miniCart}
               capacity={Capacity?.value}
             />
           );
         }
          return true
        })}
      </>
    );
  }
}

export default TechControler;
