import React from 'react';
import MarioImg from './images/Mario and Adrian A.jpg'
function Chicago() {
  return (
    <section className="chicago">
      <div>
      <img src={MarioImg} alt="Restaurant owners"/>
      </div>
      <div>
      <h2>Little Lemon</h2>
      <p>Chicago</p>
      <p>Discover the history of our Chicago location...</p>
      </div>
    </section>
  );
}

export default Chicago;
