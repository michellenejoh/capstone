import React from 'react';
import logo from './Logo.png';
import { Link } from 'react-router-dom';

function Footer () {
    return (
    <footer>
        <img src={logo} alt="little lemon logo"/>
         <nav className="foot">
            <h5>Navigation</h5>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/specials">Menu</Link></li>
            <li><Link to="/reserve">Reservations</Link></li>
            <li><Link to="/testimonials">Reviews</Link></li>
            <li><Link to="/hero">Hero section</Link></li>
        </ul>
         </nav>
        <section className='details'>
            <h5>Contact</h5>
            <ul>
                <li>Address</li>
                <li>Phone number</li>
                <li>Email</li>
            </ul>
        </section>
        <section  className="links">
            <h5>Social Media Links</h5>
            <ul>
                    <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
                    <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
                    <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
            </ul>
         </section>
    </footer>
    );
}

export default Footer;