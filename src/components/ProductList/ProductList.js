import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { getAllItems } from '../../API/itemsControler'
import ProductItem from '../ProductItem/ProductItem'
import { v4 as uuid } from 'uuid'
import { client } from '../../API/client'

class ProductList extends PureComponent {
    state = {
        results: [],
    }

    componentDidMount() {
        getAllItems().then((data) => this.setState({ results: data }))
    }
    render() {
        const { results } = this.state
        const { category } = this.props
        return (
            <ul className="productList">
                {results.map(
                    (item) =>
                        (item.category === category ||
                            category === 'all products') && (
                            <ProductItem
                                from={`/${item.category}`}
                                key={uuid()}
                                item={item}
                                choosenCurrency={client.currency}
                            />
                        )
                )}
            </ul>
        )
    }
}

ProductList.propTypes = {
    category: PropTypes.string.isRequired,
}
export default ProductList
