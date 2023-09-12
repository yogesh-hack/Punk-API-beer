// src/components/Card.js
import React from 'react';

const Card = ({ beer }) => {
  return (
    <div className="card">
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
    </div>
  );
};

export default Card;
