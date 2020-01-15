import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from './logo-OPUS.png';
import './signUp.css';
import { connect } from 'react-redux';
import { storeToken } from '../../redux/reducer';

const mapDispatchToProps = dispatch => ({
  storeToken: token => dispatch(storeToken(token))
});

class SignUp extends Component {
  state = {
    firstname: '',
    lastname: '',
    society_name: '',
    email: '',
    password: '',
    city: '',
    confirm_password: '',
    country: ''
  };

  postNewUser = () => {
    axios
      .post('http://localhost:8000/users/signup', {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        society_name: this.state.society_name,
        email: this.state.email,
        password: this.state.password,
        city: this.state.city,
        country: this.state.country
      })
      .then(res => {
        res.data.token && this.props.storeToken(res.data.token);
        if (res.data.token) {
          this.props.history.push('/home');
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  checkPassword = () => {
    if (this.state.password === this.state.confirm_password) {
      alert('Inscription effectuer');
      this.postNewUser();
      this.handleSubmit();
    } else {
      alert('Erreur dans la saisie du mot de passe.');
      this.setState({
        password: '',
        confirm_password: ''
      });
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    this.setState({
      firstname: '',
      lastname: '',
      society_name: '',
      email: '',
      password: '',
      city: '',
      confirm_password: '',
      country: ''
    });
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
            value={this.state.firstname}
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
            type="text"
            placeholder="Pays"
            onChange={this.handleChange}
            value={this.state.country}
            name="country"
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
            type="password"
            placeholder="Confirmez votre mot de passe"
            onChange={this.handleChange}
            value={this.state.confirm_password}
            name="confirm_password"
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

          <Link to="/contrats">
            <p className="readContract">Lire les termes du contrat</p>
          </Link>

          <input
            className="btnSignUp"
            type="button"
            value="Valider"
            onClick={this.checkPassword}
          />
        </form>
      </>
    );
  }
}

export default connect(null, mapDispatchToProps)(SignUp);
