import React from 'react';
import axios from 'axios';
import './Directory.css';

import Offer from '../offer/Offer';

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offers: [],
      isLoaded: false
    };
  }

  componentDidMount = () => {
    this.getOffers();
  };

  getOffers = () => {
    axios
      .get('http://localhost:8000/offers')
      .then(res => res.data)
      .then(data =>
        this.setState({
          offers: data,
          isLoaded: true
        })
      );
  };

  render() {
    const { offers, isLoaded } = this.state;
    if (!isLoaded) {
      return <h1>Loading...</h1>;
    } else {
      console.log(offers);
      return (
        <div className="offers-display">
          {offers.map(({ id, ...otherOfferSelection }, index) => (
            <Offer key={index} {...otherOfferSelection} />
          ))}
        </div>
      );
    }
  }
}

export default Directory;
