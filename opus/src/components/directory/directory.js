import React from 'react';

import './directory.css';

import Offer from '../offer/offer';

const Directory = offers => (
  <div className="offers-display">
    {offers.offers.map(({ id, ...otherOfferSelection }, index) => (
      <Offer key={index} {...otherOfferSelection} />
    ))}
  </div>
);

export default Directory;
