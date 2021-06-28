import React, { Component } from "react";
import Container from '../Container/Container';
import NavBar from "./NavBar/NavBar";
import Logo from './Logo';
import UserBar from "./UserBar/UserBar";


class AppBar extends Component {
  render() {
    return (
      <header className="header">
        <Container component="header">
          <NavBar />
          <Logo />
          <UserBar />
          
        </Container>
      </header>
    );
  }
}

export default AppBar;
