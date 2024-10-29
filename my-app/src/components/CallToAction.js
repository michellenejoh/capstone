import React from 'react';
import food from './images/restauranfood.jpg';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="call-to-action">
      <div>
        <h1>Little Lemon</h1>
        <p>Chicago</p>
        <p>
          We are a family-owned<br/> Mediterranean restaurant,<br/> focused on traditional<br/>
          recipes served with a modern<br/> twist.
        </p>
        <Link to="/reserve">
        <button>Reserve a Table</button>
        </Link>
      </div>
      <img src={food} alt="Delicious food" />
    </section>
  );
}


export default CallToAction;