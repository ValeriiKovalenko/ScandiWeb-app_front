import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import currencyReducer from './currencyReducer'
import itemPageReducer from './itemPageReducer'

const rootReducer = combineReducers({
    cart: cartReducer,
    currency: currencyReducer,
    itemPage: itemPageReducer,
})

export default rootReducer
