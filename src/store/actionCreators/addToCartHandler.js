import addToCart from '../actions/addToCart'

function currencyHandler(value) {
    return {
        type: addToCart,
        items: value,
    }
}

export default currencyHandler
