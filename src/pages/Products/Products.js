import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ProductList from '../../components/ProductList/ProductList'
import { withRouter } from 'react-router-dom'

class Products extends PureComponent {
    render() {
        const { category } = this.props

        return (
            <section className="products">
                <h2 className="products__title">{category.toUpperCase()}</h2>
                <ProductList category={category} />
            </section>
        )
    }
}

Products.propTypes = {
    category: PropTypes.string.isRequired,
    location: PropTypes.object,
}

export default withRouter(Products)
