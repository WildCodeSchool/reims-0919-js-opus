import React from 'react';

import './Directory.css';

import Offer from '../offer/Offer';

const Directory = offers => (
  <div className="offers-display">
    {offers.offers.map(({ id, ...otherOfferSelection }, index) => (
      <Offer key={index} {...otherOfferSelection} />
    ))}
  </div>
);

export default Directory;
