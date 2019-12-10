import React from 'react';

import './offer.css';

const Offer = ({
  picture,
  society_name,
  adress_city,
  title,
  capacity,
  price
}) => {
  return (
    <div className="card">
      <img src={picture} alt={society_name} />
      <div className="info">
        <p className="card-adress">{adress_city}</p>
        <div className="title-info">
          <p>{title}</p>
          <img
            src="https://i.ibb.co/gDDGF5Q/Homme-50x50px.png"
            alt="nombres de personnes"
            style={{ height: '8%', width: '8%', margin: '0.2rem' }}
          />
          <p>{capacity}</p>
          <span>|</span>
          <p>{price}€/h</p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
