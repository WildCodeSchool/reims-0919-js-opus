import React from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import './Loading.css';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  token: state.token
});

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null
    };
  }

  componentDidMount = () => {
    this.getUserName();
    setTimeout(() => this.props.history.push('/home'), 4000);
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
      <div className="loader">
        <p>Bonjour {this.state.userName && this.state.userName[0].firstname}</p>
        <Loader
          type="ThreeDots"
          color="#somecolor"
          height={80}
          width={80}
          timeout={4000}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Loading);
