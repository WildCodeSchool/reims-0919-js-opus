import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import { connect } from 'react-redux';
import axios from 'axios';
import './profileDetail.css';

class profileDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div class="photoProfile">
          <img
            src="https://cdn.pixabay.com/photo/2020/01/07/23/01/sketch-4748895_960_720.jpg"
            alt="photoProfile"
          />
        </div>

        <div class="infoOfUser">
          <p>Prénom :</p>
          <p>Nom :</p>
          <p>Société :</p>
          <p>Adresse mail :</p>
        </div>

        <button>Retour</button>
      </div>
    );
  }
}
