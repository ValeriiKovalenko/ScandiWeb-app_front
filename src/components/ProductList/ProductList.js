import React, { Component } from "react";
import { getAllItems } from "../../API/itemsControler";
import ProductItem from "../ProductItem/ProductItem";
import { v4 as uuid } from "uuid";
import { client } from "../../API/client";
class ProductList extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    getAllItems().then((data) => this.setState({ results: data }));
  }
  render() {
    const { results } = this.state;
    const { category, from } = this.props;
    return (
      <ul className="productList">
        {results.map(
          (item) =>
            item.category === category && (
              <ProductItem
                from={from}
                key={uuid()}
                item={item}
                choosenCurrency={client.currency}
              />
            )
        )}
      </ul>
    );
  }
}
export default ProductList;
