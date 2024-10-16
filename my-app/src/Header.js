import React from 'react';
import logo from "./Logo.png";
import Nav from './Nav';

function Header () {
    return (
    <header>
        <img src={logo} alt="logo"/>
        <Nav />
    </header>
    );
}

export default Header;