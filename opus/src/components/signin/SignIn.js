import React, { Component } from 'react';
import axios from 'axios';
import logo from '../singnup/logo-OPUS.png';
import './SignIn.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { storeToken } from '../../redux/reducer';

const mapDispatchToProps = dispatch => ({
  storeToken: token => dispatch(storeToken(token))
});

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorConn: null
    };
  }

  loginUser = () => {
    axios
      .post('http://localhost:8000/users/signin', {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        res.data.token && this.props.storeToken(res.data.token);
        if (res.data.token) {
          this.props.history.push('/home');
        } else {
          this.setState({
            errorConn: 'Identifiant ou mot de passe incorrect',
            password: '',
            email: ''
          });
        }
      })
      .catch(error => {
        console.error(error);
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
        <p className="slogan">"Rendez-vous avec l'avenir"</p>
        <h5 className="titleConnection">Connectez-vous</h5>
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
          <p className="infoErrorConn">{this.state.errorConn}</p>
          <input
            className="btnSignIn"
            type="button"
            value="Valider"
            onClick={this.loginUser}
          />
        </form>
        <div className="separator"></div>
        <Link to="/signup">
          <input className="btnSignUp" type="button" value="Créer un Compte" />
        </Link>
      </>
    );
  }
}

export default connect(null, mapDispatchToProps)(SignIn);
