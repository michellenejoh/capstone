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
      <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
      </div>
    </section>
  );
}

export default Chicago;
