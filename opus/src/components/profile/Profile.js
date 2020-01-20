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

          <p className="textinfo">Mes Informations personnelles</p>

          <hr className="hrProfile" />
          <Link to="/postoffer">
            <p className="textinfo">Publier une annonce</p>
          </Link>
          <hr className="hrProfile" />

          <p className="textinfo">Mes annonces</p>

          <hr className="hrProfile" />

          <Link to="/myreservations">
            <p className="textinfo">Mes réservations</p>
          </Link>

          <hr className="hrProfile" />

          <p className="textinfo">Mon historique</p>

          <hr className="hrProfile" />

          <p className="textinfo">Aide</p>

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
