import React, { PureComponent } from 'react'
import Container from '../Container/Container'
import NavBar from './NavBar/NavBar'
import Logo from './Logo'
import UserBar from './UserBar/UserBar'

class AppBar extends PureComponent {
    render() {
        console.log(
            '%c ',
            `font-size:300px; background-image:url(https://miro.medium.com/max/1068/0*WwAJP2U-pFbydOfi.jpeg);
             background-size: contain; background-repeat: no-repeat;`
        )
        return (
            <header className="header">
                <Container component="header">
                    <NavBar />
                    <Logo />
                    <UserBar />
                </Container>
            </header>
        )
    }
}

export default AppBar
