import React from 'react';
import axios from 'axios';
import './Directory.css';
import Header from '../header/Header';
import Offer from '../offer/Offer';
import Footer from '../footer/Footer';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  token: state.token
});

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offers: [],
      isLoaded: false,
      searchCity: ''
    };
  }

  componentDidMount = () => {
    this.getOffers();
  };

  getOffers = () => {
    axios
      .get(`http://localhost:8000/offers/${this.state.searchCity}`, {
        headers: {
          Authorization: this.props.token
        }
      })
      .then(res => res.data)
      .then(data =>
        this.setState({
          offers: data,
          isLoaded: true
        })
      );
  };

  handleChange = event => {
    this.setState({ searchCity: event.target.value });
  };

  handleSubmit = event => {
    this.getOffers();
    event.preventDefault();
  };

  render() {
    const { offers, isLoaded } = this.state;
    if (!isLoaded) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <>
          <div className="offers-display">
            {offers.map(({ id, ...otherOfferSelection }, index) => (
              <Offer key={index} {...otherOfferSelection} />
            ))}
          </div>
          <Header
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            searchCity={this.state.searchCity}
          />
          <Footer />
        </>
      );
    }
  }
}

export default connect(mapStateToProps)(Directory);
