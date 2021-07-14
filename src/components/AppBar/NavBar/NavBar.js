import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends PureComponent {
    render() {
        return (
            <nav>
                <ul className="navList">
                    <li>
                        <NavLink activeClassName="active-link" to="/tech">
                            TECH
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active-link" to="/clothes">
                            CLOTHES
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}
