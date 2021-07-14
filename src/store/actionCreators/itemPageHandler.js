import itemPageChange from '../actions/itemPageChange'

function itemPageHandler(value) {
    return {
        type: itemPageChange,
        value: value,
    }
}

export default itemPageHandler
