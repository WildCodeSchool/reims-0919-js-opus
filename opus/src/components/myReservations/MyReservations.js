import React, { Component } from 'react';

import axios from 'axios';
import { connect } from 'react-redux';
import Offer from '../offer/Offer';

import './MyReservations.css';
import Footer from '../footer/Footer';

const mapStateToProps = state => ({
  token: state.token
});

class MyReservations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offers: null
    };
  }

  getMyReservations = () => {
    axios
      .get(`http://localhost:8000/booking`, {
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

  componentDidMount() {
    this.getMyReservations();
  }

  render() {
    const { offers } = this.state;
    return (
      offers && (
        <>
          <h2 className="text-reservation">Mes réservations :</h2>
          <div className="offers-display-reservation">
            {offers.map((offerInformation, index) => {
              return (
                <Offer
                  key={index}
                  reservation_date={offerInformation[1]}
                  {...offerInformation[0]}
                />
              );
            })}
          </div>
          <Footer />
        </>
      )
    );
  }
}

export default connect(mapStateToProps)(MyReservations);
