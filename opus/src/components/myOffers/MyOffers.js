import React, { Component } from 'react';

import axios from 'axios';
import { connect } from 'react-redux';

import Offer from '../offer/Offer';
import Footer from '../footer/Footer';

const mapStateToProps = state => ({
  token: state.token
});

class MyOffers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offers: null
    };
  }

  getMyOffers = () => {
    axios
      .get(`http://localhost:8000/user/offers`, {
        headers: {
          Authorization: this.props.token
        }
      })
      .then(res => res.data)
      .then(data =>
        this.setState({
          offers: data
        })
      );
  };

  componentDidMount = () => {
    this.getMyOffers();
  };

  render() {
    const { offers } = this.state;

    return offers && offers.length === 0 ? (
      <>
        <h2 className="text-no-reservation">Vous n'avez pas créer d'offre</h2>
        <Footer />
      </>
    ) : (
      <>
        <h2 className="text-reservation">Mes annonces :</h2>
        <div className="offers-display-reservation">
          {offers &&
            offers.map((offerInformation, index) => {
              return <Offer key={index} {...offerInformation} />;
            })}
        </div>
        <Footer />
      </>
    );
  }
}

export default connect(mapStateToProps)(MyOffers);
