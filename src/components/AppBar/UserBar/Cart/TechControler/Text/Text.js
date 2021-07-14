import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuid } from 'uuid'
import TextInput from './TextInput'

class Text extends PureComponent {
    render() {
        const { data, name, getAttributesValue, userAttributes } = this.props

        return name ? (
            <div className="textControler">
                {data.map(({ value }) => {
                    return (
                        <div key={uuid()} className="textControler__box">
                            <TextInput
                                getAttributesValue={getAttributesValue}
                                data={this.props}
                                value={value}
                                userAttributes={userAttributes}
                            />
                        </div>
                    )
                })}
            </div>
        ) : null
    }
}

Text.propTypes = {
    data: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    miniCart: PropTypes.bool,
    capacity: PropTypes.string,
}
export default Text
