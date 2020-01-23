import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../singnup/logo-OPUS.png';
import FloatingLabel from 'floating-label-react';
import 'floating-label-react/styles.css';

import './FormPostOffer.css';
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => ({
  token: state.token
});

class FormPostOffer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      society_name: '',
      title: '',
      picture: '',
      price: '',
      capacity: '',
      offer_description: '',
      address_street: '',
      address_city: '',
      zip_code: '',
      country: '',
      isReservationSend: false
    };
  }

  postNewOffer = () => {
    axios
      .post(
        'http://localhost:8000/offers/add',
        {
          society_name: this.state.society_name,
          title: this.state.title,
          picture: this.state.picture.substring(12),
          price: this.state.price,
          capacity: this.state.capacity,
          offer_description: this.state.offer_description,
          address_street: this.state.address_street,
          address_city: this.state.address_city,
          zip_code: this.state.zip_code,
          country: this.state.country
        },
        {
          headers: {
            Authorization: this.props.token
          }
        }
      )
      .then(response => {
        console.log(response);
        this.setState({
          society_name: '',
          title: '',
          picture: '',
          price: '',
          capacity: '',
          offer_description: '',
          address_street: '',
          address_city: '',
          zip_code: '',
          country: '',
          isReservationSend: true
        });
      })
      .catch(error => {
        console.error(error);
        alert("Echec de l'envoie du formulaire");
      });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return this.state.isReservationSend ? (
      <Redirect to="/home" />
    ) : (
      <>
        <img className="logoCommunOpus" src={logo} alt="logo OPUS"></img>

        <h1 className="titlePostOffer">Publiez votre annonce</h1>

        <form className="formPostOffer" onSubmit={this.handleSubmit}>
          <FloatingLabel
            name="society_name"
            placeholder="Société"
            type="text"
            value={this.state.society_name}
            onChange={this.handleChange}
          />

          <FloatingLabel
            placeholder="Titre de l'annonce"
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
          <FloatingLabel
            placeholder="Prix"
            name="price"
            type="number"
            value={this.state.price}
            onChange={this.handleChange}
            required
          />
          <FloatingLabel
            name="picture"
            type="file"
            accept="image/png, image/jpeg"
            value={this.state.picture}
            onChange={this.handleChange}
            required
          />
          <FloatingLabel
            placeholder="Capacité"
            name="capacity"
            type="number"
            value={this.state.capacity}
            onChange={this.handleChange}
            required
          />
          <FloatingLabel
            placeholder="Description de l'offre"
            name="offer_description"
            type="textarea"
            value={this.state.offer_description}
            onChange={this.handleChange}
            component="textarea"
            required
          />

          <FloatingLabel
            placeholder="Adresse"
            name="address_street"
            type="text"
            value={this.state.address_street}
            onChange={this.handleChange}
            required
          />
          <FloatingLabel
            placeholder="Ville"
            name="address_city"
            type="text"
            value={this.state.address_city}
            onChange={this.handleChange}
            required
          />

          <FloatingLabel
            placeholder="Code Postal"
            name="zip_code"
            type="text"
            value={this.state.zip_code}
            onChange={this.handleChange}
            required
          />
          <FloatingLabel
            placeholder="Pays"
            name="country"
            type="text"
            value={this.state.country}
            onChange={this.handleChange}
            required
          />

          <input
            className="buttonSignUp"
            type="submit"
            value="Valider"
            onClick={this.postNewOffer}
          />
        </form>

        <Link to="/profile">
          <button className="buttonReturn">Retour</button>
        </Link>
      </>
    );
  }
}

export default connect(mapStateToProps)(FormPostOffer);
