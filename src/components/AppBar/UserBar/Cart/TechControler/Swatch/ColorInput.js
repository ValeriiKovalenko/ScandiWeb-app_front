import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'

class ColorInput extends PureComponent {
    render() {
        const { displayValue, value, userColor } = this.props

        const { getAttributesValue, itemName, id } = this.props.data
        const inputFor = uuid()
        return (
            <>
                <input
                    checked={userColor === value}
                    onChange={() => getAttributesValue('Color', value)}
                    id={inputFor}
                    name={id + itemName}
                    type="radio"
                    value={displayValue}
                />
                <label
                    style={{ backgroundColor: value }}
                    htmlFor={inputFor}
                ></label>
            </>
        )
    }
}

ColorInput.propTypes = {
    displayValue: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
}
export default ColorInput
