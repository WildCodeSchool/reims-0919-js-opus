import React from 'react';
import { Link } from 'react-router-dom';
import './Offer.css';

const Offer = ({
  picture,
  society_name,
  address_city,
  title,
  capacity,
  price
}) => {
  return (
    <div className="card">
      <Link to="offerDetail">
        <img src={picture} alt={society_name} className="picture" />
      </Link>
      <img
        src="https://i.ibb.co/9bsMMn3/coeur-rose-2.png"
        alt="favori"
        className="logo-favori"
      />
      <div className="info">
        <p className="card-adress">{address_city}</p>
        <div className="title-info">
          <h3>{title}</h3>
          <div className="capacityprice">
            <img
              src="https://i.ibb.co/gDDGF5Q/Homme-50x50px.png"
              alt="nombres de personnes"
              className="capacity-offer"
            />
            <p>{capacity}</p>
            <span>|</span>
            <p>{price}€/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
