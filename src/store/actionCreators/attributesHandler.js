import changeAttributes from '../actions/changeAttributes'

function currencyHandler(value) {
    return {
        type: changeAttributes,
        attributes: value,
    }
}

export default currencyHandler
