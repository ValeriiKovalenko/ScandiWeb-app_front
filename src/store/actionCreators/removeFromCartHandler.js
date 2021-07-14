import removeFromCart from '../actions/removeFromCart'

function currencyHandler(value) {
    return {
        type: removeFromCart,
        items: value,
    }
}

export default currencyHandler
