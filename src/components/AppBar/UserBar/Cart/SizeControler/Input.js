import React, { PureComponent } from 'react'
import { v4 as uuid } from 'uuid'

export default class Input extends PureComponent {
    state = {
        checked: false,
    }
    componentDidMount() {
        if (this.props?.userSize?.value === this.props.displayValue) {
            this.setState({ checked: true })
        }
    }

    render() {
        const {
            id,
            displayValue,
            location,
            attributeName,
            getAttributesValue,
            productName,
            size,
            userSize,
        } = this.props

        const inputFor = uuid()
        return (
            <div
                className={`${
                    location === 'page'
                        ? 'page__sizeInputBox'
                        : 'cart__sizeInputBox'
                }`}
            >
                <input
                    checked={
                        size === this.props.displayValue ||
                        userSize === this.props.displayValue
                    }
                    onChange={(e) => {
                        getAttributesValue(attributeName, displayValue)
                    }}
                    id={inputFor}
                    className={`${
                        location === 'page'
                            ? 'page__sizeInput'
                            : 'cart__sizeInput'
                    }`}
                    name={productName + id}
                    type="radio"
                    value={displayValue}
                />
                <label
                    className={`${
                        location === 'page'
                            ? 'page__sizeLabel'
                            : 'cart__sizeLabel'
                    }`}
                    htmlFor={inputFor}
                >
                    {displayValue}
                </label>
            </div>
        )
    }
}
