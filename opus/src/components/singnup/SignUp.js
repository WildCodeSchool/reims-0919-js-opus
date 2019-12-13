import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo-OPUS.png';
import './signUp.css';

export default class SignUp extends Component {
  state = {
    firstname: '',
    lastname: '',
    society_name: '',
    email: '',
    password: '',
    city: ''
  };

  postNewUser = () => {
    axios
      .post('http://localhost:8000/users/add', {
        firstname: this.state.firstname,
        lastname: this.state.lastnamne,
        society_name: this.state.society_name,
        email: this.state.email,
        password: this.state.password,
        city: this.state.city
      })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <img className="logoCommunOpus" src={logo} alt="logo OPUS"></img>

        <form className="containerFormSignUp" onSubmit={this.handleSubmit}>
          <input
            className="inputSignUP"
            type="text"
            placeholder="Prénom"
            onChange={this.handleChange}
            value={this.state.firsttname}
            name="firstname"
          />
          <input
            className="inputSignUP"
            type="text"
            placeholder="Nom"
            onChange={this.handleChange}
            value={this.state.lastname}
            name="lastname"
          />
          <input
            className="inputSignUP"
            type="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
          />
          <input
            className="inputSignUP"
            type="text"
            placeholder="Ville"
            onChange={this.handleChange}
            value={this.state.city}
            name="city"
          />
          <input
            className="inputSignUP"
            type="password"
            placeholder="Mot de passe"
            onChange={this.handleChange}
            value={this.state.password}
            name="password"
          />
          <input
            className="inputSignUP"
            type="text"
            placeholder="Société"
            onChange={this.handleChange}
            value={this.state.society_name}
            name="society_name"
          />
          <div>
            <input type="checkbox" id="accept" required></input>
            <label htmlFor="accept">J'accepte les termes CGU et CGV</label>
          </div>

          <input
            className="btnSignUp"
            type="submit"
            value="Valider"
            onClick={this.postNewUser}
          />
        </form>
      </>
    );
  }
}
