import React, { Component } from 'react';

import axios from 'axios';
import { connect } from 'react-redux';

import Offer from '../offer/Offer';
import Footer from '../footer/Footer';

const mapStateToProps = state => ({
  token: state.token
});

class MyFavorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offers: null
    };
  }

  getMyFavorites = () => {
    axios
      .get(`http://localhost:8000/favorites`, {
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
    this.getMyFavorites();
  };

  render() {
    const { offers } = this.state;

    return (
      offers && (
        <>
          <div className="offers-display-reservation">
            {offers.map((offerInformation, index) => {
              return <Offer key={index} {...offerInformation} />;
            })}
          </div>
          <Footer />
        </>
      )
    );
  }
}

export default connect(mapStateToProps)(MyFavorites);
