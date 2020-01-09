import React from 'react';
import './offerDetail.css';

class offerDetail extends React.Component {
  render() {
    return (
      <div className="divDetail">
        <img
          className="officeImage"
          src="https://via.placeholder.com/50"
          alt="office"
        />

        <div className="detail">
          <h1>Salle de meeting</h1>
          <div className="info">
            <p>Reims</p>
            <p>8p 50€</p>
          </div>
        </div>

        <hr />

        <p className="textDetail">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum
        </p>

        <div>
          <h2>Photos</h2>
          <img className="officeImage" src="https://via.placeholder.com/50" />
        </div>

        <div>
          <h2>Equipements</h2>
        </div>

        <input className="signIn" type="button" value="Valider" />
      </div>
    );
  }
}

export default offerDetail;
