import React, { PureComponent } from 'react'
import { getAllItems } from '../../API/itemsControler'
import store from '../../store/store'
import { v4 as uuid } from 'uuid'
import DOMPurify from 'dompurify'
import Gallery from '../../components/Gallery/Gallery'
import SizeControler from '../../components/AppBar/UserBar/Cart/SizeControler/SizeControler'
import Swatch from '../../components/AppBar/UserBar/Cart/TechControler/Swatch/Swatch'
import Text from '../../components/AppBar/UserBar/Cart/TechControler/Text/Text'
import addToCartHandler from '../../store/actionCreators/addToCartHandler'
import attributesHandler from '../../store/actionCreators/attributesHandler'

class ItemPage extends PureComponent {
    state = {
        item: {},
        itemName: '',
        size: '',
        price: '',
        currency: '',
        attributes: {},
    }
    async componentDidMount() {
        await this.setState({
            itemName: this.props.match.params.id.split('_').join(' '),
        })

        await getAllItems().then((data) => {
            const currentItem = data.find(
                (item) => item.name === this.state.itemName
            )
            this.setState({ item: currentItem })
        })
        if (this.state.price === '') {
            this.getPrice()
        }
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return
        }
    }

    getPrice = () => {
        const { prices } = this.state.item
        let currencyName = localStorage.getItem('currencyName')
        const price = prices?.find((el) => el.currency === currencyName).amount
        const currencySymbol = localStorage.getItem('currency')
        this.setState({ price, currency: currencySymbol })
        store.subscribe(() => {
            currencyName =
                store.getState().currency.value.currencyName ||
                localStorage.getItem('currencyName')
            const currencySymbol = store.getState().currency.value.currency
            const price = prices?.find(
                (el) => el.currency === currencyName
            ).amount

            this.setState({ price, currency: currencySymbol })
        })
    }

    getAttributesValue = (name, value) => {
        this.setState((prevState) => ({
            attributes: { ...prevState.attributes, [name]: value },
        }))
    }

    addToCart = () => {
        if (
            this.state.item.attributes.length !==
            Object.keys(this.state.attributes).length
        ) {
            alert('Please, check all the opions')
            return
        }

        store.dispatch(
            addToCartHandler({
                ...this.state.item,
                fullPrice: this.state.price,
                currency: this.state.currency,
            })
        )

        store.dispatch(
            attributesHandler({
                itemName: this.state.itemName,
                userAttributes: this.state.attributes,
            })
        )
    }

    render() {
        const { getSize, addToCart, getAttributesValue } = this
        const { item, price, currency, itemName } = this.state
        const { name, gallery, attributes, description, inStock } = item

        return (
            <article className="itemPage">
                <Gallery gallery={gallery} />
                <div className="itemPage__info">
                    <h2 className="itemPage__info-title">{name}</h2>
                    {attributes?.map(({ name, type, items }) => {
                        if (name === 'Size') {
                            return (
                                <div className="sizeBar" key={uuid()}>
                                    <h3 className="itemPage__attribute-title">
                                        {name}:
                                    </h3>{' '}
                                    <SizeControler
                                        getSize={getSize}
                                        attributes={attributes}
                                        itemName={name}
                                        location="page"
                                        getAttributesValue={getAttributesValue}
                                        userAttributes={this.state.attributes}
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
                                        itemName={itemName}
                                        getAttributesValue={getAttributesValue}
                                        userAttributes={this.state.attributes}
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
                                        getAttributesValue={getAttributesValue}
                                        userAttributes={this.state.attributes}
                                        key={uuid()}
                                        data={items}
                                        name={name}
                                        id={uuid()}
                                        itemName={itemName}
                                    />
                                </div>
                            )
                        }
                        return null
                    })}
                    <h3 className="itemPage__info-price">
                        <span className="itemPage__info-price-title">
                            Price:
                        </span>
                        <span>
                            {currency}
                            {price}
                        </span>
                    </h3>
                    {inStock && (
                        <button
                            onClick={addToCart}
                            className="itemPage__info-btn"
                        >
                            ADD TO CART
                        </button>
                    )}
                    <div
                        className="itemPage__info-descr"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(description),
                        }}
                    ></div>
                </div>
            </article>
        )
    }
}

export default ItemPage
