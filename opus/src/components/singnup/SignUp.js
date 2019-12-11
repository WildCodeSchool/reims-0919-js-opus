import React, { Component } from 'react';
import logo from './logo-OPUS.png';
import './signUp.css';

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <img className="logoCommunOpus" src={logo} alt="logo OPUS"></img>

        <form className="containerFormSignUp">
          <input className="inputSignUP" type="text" placeholder="Nom" />
          <input className="inputSignUP" type="text" placeholder="Prénom" />
          <input className="inputSignUP" type="email" placeholder="Email" />
          <input
            className="inputSignUP"
            type="password"
            placeholder="Mot de passe"
          />
          <input
            className="inputSignUP"
            type="text"
            placeholder="Société (Optionnel)"
          />
          <div>
            <input type="checkbox" id="accept"></input>
            <label htmlFor="accept">J'accepte les termes CGU et CGV</label>
          </div>
          <input className="btnSignUp" type="submit" value="Valider" />
        </form>
      </div>
    );
  }
}
