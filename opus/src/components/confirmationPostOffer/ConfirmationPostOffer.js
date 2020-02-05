import React, { Component } from 'react';
import './ConfirmationPostOffer.css';

class ConfirmationPostOffer extends Component {
  render() {
    return (
      <div
        className="modalAlert"
        style={{ display: this.props.openModal ? 'flex' : 'none' }}
      >
        <p>Annonce Publiée !</p>
      </div>
    );
  }
}

export default ConfirmationPostOffer;
