import React from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import './Loading.css';

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
      .get('/user')
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
        <p>Bonjour {this.getUserName}</p>
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

export default Loading;
