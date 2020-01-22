import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';
import { connect } from 'react-redux';
import axios from 'axios';
import './ProfileDetail.css';

const mapStateToProps = state => ({
  token: state.token
});

class ProfileDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null
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
          userInfo: data
        })
      );
  };

  render() {
    return (
      <>
        <div className="titleProfile">
          <img
            src={
              this.state.profile_pic
                ? this.state.profile_pic
                : 'https://forum.pcastuces.com/img/efa5cf51c0711fafc61e73f90e05bc12.png'
            }
            alt="photoProfile"
          />

          <h1>
            {this.state.userInfo && this.state.userInfo[0].firstname}{' '}
            {this.state.userInfo && this.state.userInfo[0].lastname}
          </h1>
        </div>

        <div className="infoOfUser">
          <p>
            Adresse mail : {this.state.userInfo && this.state.userInfo[0].email}
          </p>
          <p>
            Numéro de téléphone :{' '}
            {this.state.userInfo && this.state.userInfo[0].phone_number}{' '}
          </p>
          <p>
            Société :{' '}
            {this.state.userInfo && this.state.userInfo[0].society_name}
          </p>
          <p>
            Numéro Siren :{' '}
            {this.state.userInfo && this.state.userInfo[0].siren_number}
          </p>

          <p>
            Numéro Siret :{' '}
            {this.state.userInfo && this.state.userInfo[0].siret_number}
          </p>
        </div>

        <Link to="/profile">
          <button className="buttonReturn">Retour</button>
        </Link>

        <Footer />
      </>
    );
  }
}

export default connect(mapStateToProps)(ProfileDetail);
