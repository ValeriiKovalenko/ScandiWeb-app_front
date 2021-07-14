import React, { PureComponent } from 'react'
import currencies from '../../../../API/currencyControler'
import ArrowIcon from '../../../../icons/arrow-down.svg'
import { client } from '../../../../API/client'
import store from '../../../../store/store'
import currencyHandler from '../../../../store/actionCreators/currencyHandler'

export default class CurrencyPicker extends PureComponent {
    state = {
        currency: localStorage.getItem('currency') || '$',
        isHidden: true,
        currencies: [],
        symbols: { USD: '$', JPY: '¥', GBP: '£', AUD: 'A$', RUB: '₽' },
    }
    componentDidMount() {
        currencies.then((data) => this.setState({ currencies: data }))
    }
    componentDidUpdate(prevProps, prevState) {
        const { currency, symbols } = this.state
        const currencyName = Object.keys(symbols).find(
            (name) => symbols[name] === currency
        )
        store.dispatch(currencyHandler({ currency, currencyName }))

        localStorage.setItem('currency', this.state.currency)
        localStorage.setItem('currencyName', currencyName)
    }

    toggleList = () => {
        this.setState((prevState) => ({ isHidden: !prevState.isHidden }))
    }
    chooseCurency = (e) => {
        this.setState({ currency: e.target.dataset.value, isHidden: true })
        client.currency = e.target.dataset.value
    }

    render() {
        const { toggleList, chooseCurency } = this
        const { currency, isHidden, currencies, symbols } = this.state

        const arrowHandler = ['arrow', isHidden ? 'arrowDown' : 'arrowUp'].join(' ')
        return (
            <div className="currencyPicker">
                <button
                    type="button"
                    className="currencyPicker__btn"
                    onClick={toggleList}
                >
                    {currency}{' '}
                    <img className={arrowHandler} src={ArrowIcon} alt="" />
                </button>
                <div
                    onClick={toggleList}
                    className={isHidden ? 'hidden' : 'currencyPicker__overlay'}
                ></div>
                <ul
                    onClick={chooseCurency}
                    className={isHidden ? 'hidden' : 'active-list'}
                >
                    {currencies.map((name) => {
                        return (
                            <li
                                key={name}
                                className="currency"
                                data-value={symbols[name]}
                            >
                                {symbols[name]} {name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
