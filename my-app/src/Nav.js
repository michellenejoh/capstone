import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className='navigation'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/specials">Specials</Link></li>
        <li><Link to="/testimonials">Testimonals</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/reserve">Reserve a Table</Link></li>
        <li><Link to="/hero">Hero section</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
