import React from 'react';

function Footer () {
    return (
    <footer>
        <img/>
         <nav className="foot">
            <h5>Navigation</h5>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="menu.html">Menu</a></li>
            <li><a href="reservations.html">Reservations</a></li>
            <li><a href="order.html">Order Online</a></li>
            <li><a href="login.html">Login</a></li>
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