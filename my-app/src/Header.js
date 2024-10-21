import React from 'react';
import logo from './Logo.png';
import Nav from './Nav';

function Header () {
    return (
    <header>
        <img src={logo} alt="little lemon logo"/>
        <Nav />
    </header>
    );
}

export default Header;