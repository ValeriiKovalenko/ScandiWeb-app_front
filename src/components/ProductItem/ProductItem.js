import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import cartIcon from '../../icons/cartIcon.png'
import store from '../../store/store'
import addToCartHandler from '../../store/actionCreators/addToCartHandler'
import itemPageHandler from '../../store/actionCreators/itemPageHandler'

class ProductItem extends PureComponent {
    state = {
        currency:
            localStorage.getItem('currency') ||
            store.getState().currency.value ||
            '$',
        currencyName:
            localStorage.getItem('currencyName') ||
            store.getState().currency.value ||
            'USD',
        fullPrice: '',
    }

    componentDidMount() {
        store.subscribe(() =>
            this.setState({
                currency: store.getState().currency.value?.currency,
                currencyName: store.getState().currency.value?.currencyName,
            })
        )
    }

    addToCart = () => {
        const fullPrice = this.props.item.prices?.find(
            (el) => el.currency === this.state.currencyName
        ).amount
        const { currency } = this.state
        store.dispatch(
            addToCartHandler({ ...this.props.item, fullPrice, currency })
        )
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return
        }
    }

    putInStore = () => {
        const fullPrice = this.props.item.prices?.find(
            (el) => el.currency === this.state.currencyName
        ).amount
        const { currency } = this.state
        store.dispatch(
            itemPageHandler({ ...this.props.item, fullPrice, currency })
        )
    }

    render() {
        const { currency, currencyName } = this.state
        const { item, from } = this.props
        const { name, prices, gallery, inStock } = item
        const { addToCart, putInStore } = this

        const fullPrice = prices?.find(
            (el) => el.currency === currencyName
        )?.amount

        return (
            <li className={inStock ? 'productItem' : 'outOfStock'}>
                <NavLink
                    to={from + '/' + name.split(' ').join('_')}
                    onClick={putInStore}
                >
                    <div className="frame">
                        <img
                            className="productItem__img"
                            src={gallery[0]}
                            alt=""
                        />
                    </div>
                    <h4>{name}</h4>
                    <span>
                        {currency} {fullPrice}
                    </span>
                </NavLink>
                {inStock && (
                    <button
                        onClick={addToCart}
                        type="button"
                        className="addToCartBtn"
                    >
                        <img
                            className="productItem__icon"
                            width="24"
                            height="24"
                            src={cartIcon}
                            alt=""
                        />
                    </button>
                )}
            </li>
        )
    }
}

ProductItem.propTypes = {
    item: PropTypes.object.isRequired,
    from: PropTypes.string.isRequired,
}

export default ProductItem
