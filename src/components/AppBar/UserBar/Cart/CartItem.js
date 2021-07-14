import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SizeControler from './SizeControler/SizeControler'
import TechControler from './TechControler/TechControler'
import store from '../../../../store/store'
import addToCartHandler from '../../../../store/actionCreators/addToCartHandler'
import removeFromCartHandler from '../../../../store/actionCreators/removeFromCartHandler'
import attributesHandler from '../../../../store/actionCreators/attributesHandler'

class CartItem extends PureComponent {
    state = {
        name: this.props.data.name,
        userAttributes: this.props.data?.userAttributes?.userAttributes,
        price: {},
    }

    componentDidMount() {
        const { prices } = this.props.data
        const currnecyFromStore = store.getState().currency.value
        const currentAmount = prices.find(
            (el) => el.currency === currnecyFromStore?.currencyName
        )?.amount

        this.setState({ price: { ...currnecyFromStore, currentAmount } })
    }

    addMoreItems = () => {
        store.dispatch(addToCartHandler({ ...this.props.data }))
    }
    takeOneFromCart = () => {
        store.dispatch(removeFromCartHandler({ ...this.props.data }))
    }
    getAttributesValue = async (name, value) => {
        await this.setState((prevState) => ({
            userAttributes: { ...prevState.userAttributes, [name]: value },
        }))

        await store.dispatch(
            attributesHandler({
                itemName: this.props.data.name,
                userAttributes: this.state.userAttributes,
            })
        )
    }
    render() {
        const {
            name,
            gallery,
            attributes,
            category,
            quantity,
            userAttributes,
        } = this.props.data

        const { addMoreItems, takeOneFromCart, getAttributesValue } = this

        const { price } = this.state
        return (
            <li className="cart__item">
                <div className="cart__item-info">
                    <h4 className="cart__item-title">{name}</h4>
                    <span className="cart__item-info__price">
                        {price.currency}
                        {price.currentAmount}
                    </span>

                    {category === 'clothes' && (
                        <div>
                            <span className="label-name">Size</span>
                            <SizeControler
                                userAttributes={userAttributes?.userAttributes}
                                attributes={attributes}
                                itemName={name}
                                getAttributesValue={getAttributesValue}
                                miniCart={true}
                            />
                        </div>
                    )}
                    {category === 'tech' && (
                        <TechControler
                            userAttributes={userAttributes?.userAttributes}
                            attributes={attributes}
                            itemName={name}
                            getAttributesValue={getAttributesValue}
                        />
                    )}
                </div>
                <div className="cart__item-quantity">
                    <button
                        onClick={addMoreItems}
                        className="cart__item-quantity__btn plus"
                        type="button"
                    >
                        <span></span>
                    </button>
                    <span>{quantity}</span>
                    <button
                        onClick={takeOneFromCart}
                        className="cart__item-quantity__btn minus"
                        type="button"
                    >
                        <span></span>
                    </button>
                </div>
                <div className="cart__item-img">
                    <img width="30" src={gallery?.[0]} alt="" />
                </div>
            </li>
        )
    }
}

CartItem.protoTypes = {
    data: PropTypes.object.isRequired,
}

export default CartItem
