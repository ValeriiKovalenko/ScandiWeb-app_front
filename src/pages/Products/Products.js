import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import { withRouter } from 'react-router-dom';

 class Products extends Component {
     render() {
         const { category, location } = this.props;
         
        return (
          <section className="products">
                <h2 className="products__title">{category.toUpperCase()}</h2>
            <ProductList category={category} from={location.pathname}/>
          </section>
        );
    }
 }

export default withRouter(Products);
