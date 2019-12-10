import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="menu-footer">
        <nav className="footer">
          <img
            src="https://i.ibb.co/Gkt8z0S/logo-OPUS-sans-fond-100px100px.png"
            alt="logo home"
          />
          <img
            src="https://i.ibb.co/cgprdnv/coeur-rose-png.png"
            alt="logo favorite"
          />
          <img
            src="https://i.ibb.co/NTJ5q2F/Mes-Messages-Rose.png"
            alt="logo chat"
          />
          <img
            src="https://i.ibb.co/YycpBpc/profile-rose-png.png"
            alt="logo profil"
          />
        </nav>
      </div>
    );
  }
}

export default Footer;
