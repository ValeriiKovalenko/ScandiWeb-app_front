import React, { PureComponent } from 'react'
import { v4 as uuid } from 'uuid'
import PropTypes from 'prop-types'

class TextInput extends PureComponent {
    render() {
        const value = this.props.value
        // const userCapacity = this.props.userCapacity;
        const userAttributes = this.props.userAttributes
        const { getAttributesValue, id, name } = this.props.data

        const inputFor = uuid()

        return (
            <>
                <input
                    checked={userAttributes?.[name] === value}
                    onChange={() => getAttributesValue(name, value)}
                    id={inputFor}
                    name={name + id}
                    type="radio"
                    value={value}
                />
                <label htmlFor={inputFor}>{value}</label>
            </>
        )
    }
}

TextInput.propTypes = {
    value: PropTypes.string.isRequired,
    userCapacity: PropTypes.string,
    data: PropTypes.object.isRequired,
}
export default TextInput
