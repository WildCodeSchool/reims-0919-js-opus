import React from 'react';

import axios from 'axios';

import './App.css';


import Header from './components/header/Header';

import Directory from './components/directory/Directory';
import FormPostOffer from './components/formPostOffer/FormPostOffer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      offers: [],
      isLoaded: false,
      email: '',
      password: ''
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

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { offers, isLoaded } = this.state;

    if (!isLoaded) {
      return <h1>Loading...</h1>;
    } else {
      // <Directory offers={offers} />
      return (
        <div className="App">
          <Header />
          <Directory offers={offers} />
          <FormPostOffer />
        </div>
      );
    }
  }
}

export default App;
