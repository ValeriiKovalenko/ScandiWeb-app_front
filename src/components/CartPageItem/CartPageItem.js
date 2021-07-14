import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import SizeControler from '../AppBar/UserBar/Cart/SizeControler/SizeControler'
import Swatch from '../AppBar/UserBar/Cart/TechControler/Swatch/Swatch'
import CartItemGallery from '../CartItemGallery/CartItemGallery'
import Text from '../AppBar/UserBar/Cart/TechControler/Text/Text'
import { NavLink } from 'react-router-dom'
import store from '../../store/store'
import addToCartHandler from '../../store/actionCreators/addToCartHandler'
import removeFromCartHandler from '../../store/actionCreators/removeFromCartHandler'
import attributesHandler from '../../store/actionCreators/attributesHandler'

class CartPageItem extends PureComponent {
    state = {}

    addMoreItems = () => {
        store.dispatch(addToCartHandler({ ...this.props.item }))
    }
    takeOneFromCart = () => {
        store.dispatch(removeFromCartHandler({ ...this.props.item }))
    }

    getAttributesValue = async (name, value) => {
        await this.setState((prevState) => ({
            userAttributes: { ...prevState.userAttributes, [name]: value },
        }))

        if (name === 'Size') {
            await store.dispatch(
                attributesHandler({
                    itemName: this.props.item.name,
                    userAttributes: this.state.userAttributes,
                })
            )
        }
    }
    render() {
        const {
            name,
            category,
            currency,
            attributes,
            quantity,
            gallery,
            fullPrice,
            userAttributes,
        } = this.props.item

        const { addMoreItems, takeOneFromCart, getAttributesValue } = this

        const routeName = name.split(' ').join('_')

        return (
            <div className="cartPageItem">
                <div className="cartPageItem__info">
                    <h3 className="cartPageItem__name">
                        <NavLink to={`/${category}/${routeName}`}>
                            {name}{' '}
                        </NavLink>
                    </h3>

                    <span className="cartPageItem__price">
                        {currency + fullPrice}
                    </span>
                    {attributes?.map(({ name, type, items }) => {
                        if (name === 'Size') {
                            return (
                                <div className="sizeBar" key={uuid()}>
                                    <h3 className="itemPage__attribute-title">
                                        {name}:
                                    </h3>
                                    <SizeControler
                                        userSize={
                                            userAttributes?.userAttributes
                                                ?.Size || userAttributes?.value
                                        }
                                        attributes={attributes}
                                        itemName={name}
                                        location="page"
                                        productName={this.props.item.name}
                                        miniCart={false}
                                        getAttributesValue={getAttributesValue}
                                    />
                                </div>
                            )
                        }
                        if (name === 'Color') {
                            return (
                                <div className="colorBar" key={uuid()}>
                                    <h3 className="itemPage__attribute-title">
                                        {name}:
                                    </h3>{' '}
                                    <Swatch
                                        data={items}
                                        id={uuid()}
                                        itemName={name}
                                        color={
                                            this.state.userAttributes?.Color ||
                                            userAttributes?.userAttributes
                                                ?.Color
                                        }
                                        getAttributesValue={getAttributesValue}
                                    />
                                </div>
                            )
                        }
                        if (
                            name === 'Capacity' ||
                            name === 'With USB 3 ports' ||
                            name === 'Touch ID in keyboard'
                        ) {
                            return (
                                <div className="settingsBar" key={uuid()}>
                                    <h3 className="itemPage__attribute-title">
                                        {name}:
                                    </h3>{' '}
                                    <Text
                                        userAttributes={
                                            this.state.userAttributes ||
                                            userAttributes?.userAttributes
                                        }
                                        key={uuid()}
                                        data={items}
                                        name={name}
                                        id={uuid()}
                                        itemName={name}
                                        getAttributesValue={getAttributesValue}
                                    />
                                </div>
                            )
                        }
                        return null
                    })}
                </div>
                <div className="cartPageItem__controls">
                    <div className="cart__item-quantity">
                        <button
                            type="button"
                            className="cart__item-quantity__btn plus"
                            onClick={addMoreItems}
                        ></button>
                        <span>{quantity}</span>
                        <button
                            type="button"
                            className="cart__item-quantity__btn minus"
                            onClick={takeOneFromCart}
                        ></button>
                    </div>
                    <CartItemGallery gallery={gallery} name={name} />
                </div>
            </div>
        )
    }
}

CartPageItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default CartPageItem
