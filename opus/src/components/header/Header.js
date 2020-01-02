import React from 'react';
import './Header.css';

const Header = ({ searchCity, handleChange, handleSubmit }) => {
  return (
    <div className="menu-header">
      <nav className="header">
        <input
          type="search"
          id="searchOffer"
          placeholder="Recherche"
          value={searchCity}
          onChange={handleChange}
        />
        <input
          type="image"
          id="arrow-submit"
          src="https://i.ibb.co/6b7rbrw/Fl-che-droite-rond-rose-50x50px.png"
          alt="arrow"
          onClick={handleSubmit}
        />
      </nav>
    </div>
  );
};

export default Header;
