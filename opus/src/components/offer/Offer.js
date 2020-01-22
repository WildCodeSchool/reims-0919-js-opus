import React from 'react';
import { Link } from 'react-router-dom';
import './Offer.css';

const Offer = ({
  picture,
  society_name,
  address_city,
  title,
  capacity,
  price,
  id,
  start_date,
  reservation,
  is_favorite
}) => {
  return (
    <Link
      to={{
        pathname: '/offerDetail',
        state: {
          offerImage: picture,
          societyName: society_name,
          addressCity: address_city,
          capacityOffice: capacity,
          priceOffer: price,
          titleOffer: title,
          id: id,
          is_favorite: is_favorite
        }
      }}
    >
      <div className="card">
        <img src={picture} alt={society_name} className="picture" />
        <img
          src={
            is_favorite
              ? 'https://i.ibb.co/X21DBT8/coeur-rose-plein-png.png'
              : 'https://i.ibb.co/9bsMMn3/coeur-rose-2.png'
          }
          alt="favori"
          className="logo-favori"
        />
        <div className="info">
          <div className="title">
            <p className="card-adress">{address_city}</p>
            <p className="reservations">
              {reservation !== undefined
                ? `Réservations : ${reservation}`
                : null}
            </p>
            <p className="date">
              {start_date &&
                start_date
                  .replace('T', ' ')
                  .replace(/[-]/g, '/')
                  .replace(/(:[0-9]+\.[0-9]+Z)/g, '')
                  .replace(':', 'H')}
            </p>
          </div>
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
    </Link>
  );
};

export default Offer;
