import React, { Component } from 'react'
import LogoIcon from '../../icons/a-logo.svg';

const style = {
    position: "absolute",
    left: "50%",
    top: "24px",
    transform: "translateX(-50%)"

}

export default class Logo extends Component {

    render() {
        return <img style={style} src={LogoIcon} alt="Logo" />;
    }
}
