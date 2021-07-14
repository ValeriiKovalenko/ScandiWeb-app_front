import React, { PureComponent } from 'react'
import Input from './Input'
import { v4 as uuid } from 'uuid'

class sizeControler extends PureComponent {
    state = {
        id: uuid(),
    }

    render() {
        const {
            attributes,
            itemName,
            location = 'cart',
            getAttributesValue,
            userSize,
            miniCart,
            productName,
            userAttributes,
        } = this.props

        return (
            <div
                className={`${
                    location === 'page'
                        ? 'page__sizeControler'
                        : 'cart__sizeControler'
                }`}
            >
                {attributes.map(({ name, items }) => {
                    return items.map(({ displayValue }) => {
                        return (
                            <Input
                                miniCart={miniCart}
                                getAttributesValue={getAttributesValue}
                                userSize={userSize}
                                key={uuid()}
                                id={itemName}
                                size={userAttributes?.Size}
                                location={location}
                                displayValue={displayValue}
                                itemName={itemName}
                                attributeName={name}
                                productName={productName}
                            />
                        )
                    })
                })}
            </div>
        )
    }
}

export default sizeControler
