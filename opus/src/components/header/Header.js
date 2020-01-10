import React from 'react';
import './Header.css';
import filter from './fil.png';

const Header = ({ searchCity, handleChange, handleSubmit }) => {
  return (
    <div className="menu-header">
      <nav className="header">
        <input
          className="searchOffer"
          type="search"
          // id="searchOffer"
          placeholder="Recherche"
          value={searchCity}
          onChange={handleChange}
        />
        <input
          className="arrow-submit"
          type="image"
          // id="arrow-submit"
          src="https://i.ibb.co/6b7rbrw/Fl-che-droite-rond-rose-50x50px.png"
          alt="arrow"
          onClick={handleSubmit}
        />

        <button className="btnFilter">
          <img className="iconeFilter" src={filter} alt="icone" />
          Filtre
        </button>
      </nav>
    </div>
  );
};

export default Header;
