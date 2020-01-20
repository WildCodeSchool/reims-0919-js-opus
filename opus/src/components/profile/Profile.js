import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Footer from '../footer/Footer';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = state => ({
  token: state.token
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

  render() {
    return (
      <>
        <div className="imagepro">
          <img
            className="imageProfile"
            src="https://cdn.pixabay.com/photo/2020/01/07/23/01/sketch-4748895_960_720.jpg"
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

          <p className="textinfo">Mes annonces</p>

          <hr className="hrProfile" />

          <p className="textinfo">Mes réservations</p>

          <hr className="hrProfile" />
          <Link to="/cgv">
            <p className="textinfo">CGU CGV</p>
          </Link>
          <hr className="hrProfile" />
          <Link to="/">
            <p className="textinfo">Déconnexion</p>
          </Link>
          <hr className="hrProfile" />
        </div>
        <Footer />
      </>
    );
  }
}

export default connect(mapStateToProps)(Profile);
