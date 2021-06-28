import React, { Component } from 'react'
import './Container.scss';

 class Container extends Component {
     render() {
         const { component } = this.props;
        return <div className={component==="header" ? "header-container" : "main-container"}>{this.props.children}</div>;
    }
 }
export default Container;
