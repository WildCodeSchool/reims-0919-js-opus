import React from 'react';
import axios from 'axios';

import './App.css';

import Directory from './components/directory/Directory';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      offers: [],
      isLoaded: false
    };
  }

  componentDidMount = () => {
    this.getOffers();
  };

  getOffers = () => {
    axios
      .get('http://localhost:8000/offer')
      .then(res => res.data)
      .then(data =>
        this.setState({
          offers: data,
          isLoaded: true
        })
      );
  };

  render() {
    const { offers, isLoaded } = this.state;

    if (!isLoaded) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="App">
          <Directory offers={offers} />
        </div>
      );
    }
  }
}

export default App;
