import React, { Component } from 'react'
import LogoIcon from '../../icons/a-logo.svg';
import {NavLink} from 'react-router-dom';

const style = {
    position: "absolute",
    left: "50%",
    top: "24px",
    transform: "translateX(-50%)"

}

export default class Logo extends Component {

    render() {
        return <NavLink to={"/"}><img style={style} src={LogoIcon} alt="Logo" /></NavLink>;
    }
}
