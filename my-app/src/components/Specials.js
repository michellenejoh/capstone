import React from 'react';
import greekSalad from './images/greek salad.jpg';
import bruchetta from './images/bruchetta.png';
import lemonDessert from './images/lemon dessert.jpg';

function Specials() {
  const specials = [
    { id: 1, name: 'Greek salad', price: '$12', description: 'The famous greek salad', image: greekSalad},
    { id: 2, name: 'Bruchetta', price: '$10', description: 'Grilled bread with garlic', image: bruchetta},
    { id: 3, name: 'Lemon Dessert', price: '$15', description: 'Straight from grandma', image: lemonDessert}
  ];

  return (
    <section className="specials">
      <div className="action">
      <h2>This weeks specials!</h2>
      <button>Order online</button>
      </div>
      <ul>
        {specials.map((special) => (
          <li key={special.id}>
            <img src={special.image} alt={special.name} className="special-image" />
            <section className='bg'>
              <div className="price">
              <h3>{special.name}</h3>
              <p><strong>{special.price}</strong></p>
              </div>
              <p>{special.description}</p>
              <p>Order a delivery 🏍️ </p>
            </section>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Specials;
