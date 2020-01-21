import React from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteToken } from '../../redux/reducer';

import Footer from '../footer/Footer';

import './Profile.css';

const mapStateToProps = state => ({
  token: state.token
});

const mapDispatchToProps = dispatch => ({
  deleteToken: token => dispatch(deleteToken(token))
});

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null
    };
  }

  componentDidMount = () => {
    this.getUserName();
  };

  getUserName = () => {
    axios
      .get(`http://localhost:8000/user`, {
        headers: {
          Authorization: this.props.token
        }
      })
      .then(res => res.data)
      .then(data =>
        this.setState({
          userName: data
        })
      );
  };

  deconnect = () => {
    this.props.deleteToken(null);
  };

  render() {
    return (
      <>
        <div className="imagepro">
          <img
            className="imageProfile"
            src={
              this.state.profile_pic
                ? this.state.profile_pic
                : 'https://forum.pcastuces.com/img/efa5cf51c0711fafc61e73f90e05bc12.png'
            }
            alt="imageProfile"
          />
          <p>{this.state.userName && this.state.userName[0].firstname}</p>
        </div>
        <div className="detailProfil">
          <hr className="hrProfile" />

          <Link to="profileDetail">
            <p className="textinfo">Mes Informations personnelles</p>
          </Link>

          <hr className="hrProfile" />

          <Link to="/postoffer">
            <p className="textinfo">Publier une annonce</p>
          </Link>

          <hr className="hrProfile" />

          <Link to="/myoffers">
            <p className="textinfo">Mes annonces</p>
          </Link>

          <hr className="hrProfile" />

          <Link to="/myreservations">
            <p className="textinfo">Mes réservations</p>
          </Link>

          <hr className="hrProfile" />

          <Link to="/cgv">
            <p className="textinfo">CGU CGV</p>
          </Link>

          <hr className="hrProfile" />

          <p className="textinfo" onClick={() => this.deconnect()}>
            Déconnexion
          </p>

          <hr className="hrProfile" />
        </div>
        <Footer />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
