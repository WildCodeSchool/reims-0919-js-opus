import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="menu-header">
        <nav className="header">
          <input type="search" id="searchOffer" placeholder="Recherche" />
          <input
            type="image"
            id="arrow-submit"
            src="https://i.ibb.co/6b7rbrw/Fl-che-droite-rond-rose-50x50px.png"
            alt="arrow"
          />
        </nav>
      </div>
    );
  }
}

export default Header;
