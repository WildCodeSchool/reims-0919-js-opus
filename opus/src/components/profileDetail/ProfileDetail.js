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
        <div class="photoProfile">
          <img
            src="https://cdn.pixabay.com/photo/2020/01/07/23/01/sketch-4748895_960_720.jpg"
            alt="photoProfile"
          />
        </div>

        <div class="infoOfUser">
          <p>
            Prénom : {this.state.userInfo && this.state.userInfo[0].firstname}
          </p>
          <p>Nom : {this.state.userInfo && this.state.userInfo[0].lastname}</p>
          <p>
            Société :{' '}
            {this.state.userInfo && this.state.userInfo[0].society_name}
          </p>
          <p>
            Adresse mail : {this.state.userInfo && this.state.userInfo[0].email}
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
