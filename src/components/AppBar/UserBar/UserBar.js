import React, { PureComponent } from 'react'
import CurrencyPicker from './CurrencyPicker/CurrencyPicker'
import Cart from './Cart/Cart'
import './UserBar.scss'

export default class UserBar extends PureComponent {
    render() {
        return (
            <div className="userBar">
                <CurrencyPicker />
                <Cart />
            </div>
        )
    }
}
