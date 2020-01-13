import React from 'react';
import axios from 'axios';
import Footer from '../footer/Footer';
import { connect } from 'react-redux';

import './FormPostOffer.css';

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
      country: ''
    };
  }

  postNewOffer = () => {
    axios
      .post(
        'http://localhost:8000/offers/add',
        {
          society_name: this.state.society_name,
          title: this.state.title,
          picture: this.state.picture,
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
          country: ''
        });
        this.props.history.push('/home');
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
    return (
      <div className="form-post-offer">
        <span>Create your offer</span>

        <form onSubmit={this.handleSubmit}>
          <label>Society name</label>
          <input
            name="society_name"
            type="text"
            onChange={this.handleChange}
            value={this.state.society_name}
            required
          />
          <label>Title</label>
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
          <label>Price</label>
          <input
            name="price"
            type="number"
            value={this.state.price}
            onChange={this.handleChange}
            required
          />
          <label>Picture</label>
          <input
            name="picture"
            type="file"
            accept="image/png, image/jpeg"
            value={this.state.picture}
            onChange={this.handleChange}
            required
          />
          <label>Capacity</label>
          <input
            name="capacity"
            type="number"
            value={this.state.capacity}
            onChange={this.handleChange}
            required
          />
          <label>Offer description</label>
          <textarea
            name="offer_description"
            type="textarea"
            value={this.state.offer_description}
            onChange={this.handleChange}
            required
          ></textarea>
          <div className="address">
            <div className="addressbar1">
              <label>Address</label>
              <input
                name="address_street"
                type="text"
                value={this.state.address_street}
                onChange={this.handleChange}
                required
              />
              <label>City</label>
              <input
                name="address_city"
                type="text"
                value={this.state.address_city}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="addressbar2">
              <label>Zip code</label>
              <input
                name="zip_code"
                type="text"
                value={this.state.zip_code}
                onChange={this.handleChange}
                required
              />
              <label>Country</label>
              <input
                name="country"
                type="text"
                value={this.state.country}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>

          <input
            className="sendform"
            type="submit"
            value="Submit Form"
            onClick={this.postNewOffer}
          />
        </form>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(FormPostOffer);
