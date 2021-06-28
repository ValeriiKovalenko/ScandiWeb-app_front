import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
// import './NavBar.scss';

export default class NavBar extends Component {

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
              <li>
                <NavLink activeClassName="active-link" to="/kids">
                  KIDS
                </NavLink>
              </li>
            </ul>
          </nav>
        );
    }
}
