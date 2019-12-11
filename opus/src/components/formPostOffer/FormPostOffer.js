import React from 'react';
import axios from 'axios';

import './FormPostOffer.css';

class FormPostOffer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      society_name: '',
      title: '',
      picture: '',
      price: null,
      capacity: null,
      offer_description: '',
      adress_street: '',
      adress_city: '',
      zip_code: '',
      country: ''
    };
  }

  postNewOffer = () => {
    axios
      .post('http://localhost:8000/offers/add', {
        society_name: this.state.society_name,
        title: this.state.title,
        picture: this.state.picture,
        price: this.state.price,
        capacity: this.state.capacity,
        offer_description: this.state.offer_description,
        adress_street: this.state.adress_street,
        adress_city: this.state.adress_city,
        zip_code: this.state.zip_code,
        country: this.state.country
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      society_name: '',
      title: '',
      picture: '',
      price: null,
      capacity: null,
      offer_description: '',
      adress_street: '',
      adress_city: '',
      zip_code: '',
      country: ''
    });
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
            value={this.state.email}
            required
          />
          <label>Title</label>
          <input
            name="title"
            type="text"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label>Price</label>
          <input
            name="price"
            type="number"
            value={this.state.password}
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
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label>Offer description</label>
          <textarea
            name="offer_description"
            type="textarea"
            value={this.state.password}
            onChange={this.handleChange}
            required
          ></textarea>
          <div className="adress">
            <div className="adressbar1">
              <label>Adress</label>
              <input
                name="adress_street"
                type="text"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <label>City</label>
              <input
                name="adress_city"
                type="text"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="adressbar2">
              <label>Zip code</label>
              <input
                name="zip_code"
                type="text"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <label>Country</label>
              <input
                name="country"
                type="text"
                value={this.state.password}
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
      </div>
    );
  }
}

export default FormPostOffer;
