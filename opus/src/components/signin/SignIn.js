import React, { Component } from 'react';
import axios from 'axios';
import logo from '../singnup/logo-OPUS.png';
import './SignIn.css';
import { Link } from 'react-router-dom';

export default class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  loginUser = () => {
    axios
      .post('http://localhost:8000/users/signin', {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
    return (
      <>
        <Link to="signup">
          <img className="logoCommunOpus" src={logo} alt="logo OPUS"></img>
        </Link>
        <form className="containerFormSignIn" onSubmit={this.handleSubmit}>
          <input
            className="inputSignIn"
            type="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
          />
          <input
            className="inputSignIn"
            type="password"
            placeholder="Mot de passe"
            onChange={this.handleChange}
            value={this.state.password}
            name="password"
          />
          <Link to="home">
            <input
              className="btnSignIn"
              type="button"
              value="Valider"
              onClick={this.loginUser}
            />
          </Link>
        </form>
      </>
    );
  }
}
