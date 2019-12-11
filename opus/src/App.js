import React from 'react';
import axios from 'axios';

import './App.css';

// import Directory from './components/directory/Directory';
import SignUp from './components/singnup/SignUp';

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
      .get('http://localhost:8000/offers')
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
      // <Directory offers={offers} />
      return (
        <div className="App">
          <SignUp />
        </div>
      );
    }
  }
}

export default App;
