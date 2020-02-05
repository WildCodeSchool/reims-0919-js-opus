import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <div className="menu-footer">
        <nav className="footer">
          <Link to="/home">
            <img
              src="https://i.ibb.co/Gkt8z0S/logo-OPUS-sans-fond-100px100px.png"
              alt="logo home"
            />
          </Link>
          <Link to="/myfavorites">
            <img
              src="https://i.ibb.co/9bsMMn3/coeur-rose-2.png"
              alt="logo favorite"
            />
          </Link>
          <img
            className="logo_chat"
            src="https://i.ibb.co/NTJ5q2F/Mes-Messages-Rose.png"
            alt="logo chat"
          />
          <Link to="/profile">
            <img
              src="https://i.ibb.co/YycpBpc/profile-rose-png.png"
              alt="logo profil"
            />
          </Link>
        </nav>
      </div>
    );
  }
}

export default Footer;
