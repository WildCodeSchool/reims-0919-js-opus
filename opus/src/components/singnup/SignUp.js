import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo-OPUS.png';
import './signUp.css';
import { connect } from 'react-redux';
import { storeToken } from '../../redux/reducer';
import { Link } from 'react-router-dom';
import FloatingLabel from 'floating-label-react';
import 'floating-label-react/styles.css';

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
          this.props.history.push('/loader');
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
          <FloatingLabel
            id="firstname"
            component="textarea"
            name="firstname"
            placeholder="Prénom"
            type="text"
            value={this.state.firstname}
            onChange={this.handleChange}
          />

          <FloatingLabel
            id="lastname"
            name="lastname"
            placeholder="Nom"
            type="text"
            value={this.state.lastname}
            onChange={this.handleChange}
          />

          <FloatingLabel
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <FloatingLabel
            id="city"
            name="city"
            placeholder="Ville"
            type="text"
            value={this.state.city}
            onChange={this.handleChange}
          />

          <FloatingLabel
            id="country"
            name="country"
            placeholder="Pays"
            type="text"
            value={this.state.country}
            onChange={this.handleChange}
          />

          <FloatingLabel
            id="password"
            name="password"
            placeholder="Mot de passe"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <FloatingLabel
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirmer mot de passe"
            type="password"
            value={this.state.confirm_password}
            onChange={this.handleChange}
          />

          <FloatingLabel
            id="societyName"
            name="societyName"
            placeholder="Société"
            type="text"
            value={this.state.society_name}
            onChange={this.handleChange}
          />

          <input
            className="buttonSignUp"
            type="button"
            value="Valider"
            onClick={this.checkPassword}
          />
          <Link to="/">
            <button className="buttonReturn">Retour</button>
          </Link>
        </form>
      </>
    );
  }
}

export default connect(null, mapDispatchToProps)(SignUp);
