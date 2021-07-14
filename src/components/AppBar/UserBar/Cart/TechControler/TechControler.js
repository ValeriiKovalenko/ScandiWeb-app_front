import React, { PureComponent } from 'react'
import Swatch from './Swatch/Swatch'
import Text from './Text/Text'
import { v4 as uuid } from 'uuid'

class TechControler extends PureComponent {
    state = {
        id: uuid(),
        miniCart: true,
        userAttributes: {},
    }

    render() {
        const {
            attributes,
            itemName,
            getAttributesValue,
            Capacity,
            userAttributes,
        } = this.props
        const { id, miniCart } = this.state

        return (
            <>
                {attributes.map(({ type, items, name }) => {
                    if (type === 'swatch') {
                        return (
                            <div key={uuid()}>
                                <span className="label-name">{name}</span>
                                <Swatch
                                    key={uuid()}
                                    data={items}
                                    id={id}
                                    itemName={itemName}
                                    getAttributesValue={getAttributesValue}
                                    miniCart={miniCart}
                                    color={userAttributes?.Color}
                                />
                            </div>
                        )
                    }
                    if (type === 'text') {
                        return (
                            <div key={uuid()}>
                                <span className="label-name">{name}</span>
                                <Text
                                    getAttributesValue={getAttributesValue}
                                    userAttributes={userAttributes}
                                    key={uuid()}
                                    data={items}
                                    name={name}
                                    id={id}
                                    itemName={itemName}
                                    miniCart={miniCart}
                                    capacity={Capacity}
                                />
                            </div>
                        )
                    }
                    return true
                })}
            </>
        )
    }
}

export default TechControler
