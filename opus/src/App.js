import React from 'react';

import axios from 'axios';

import './App.css';

import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Directory from './components/directory/Directory';
import FormPostOffer from './components/formPostOffer/FormPostOffer';
import SignUp from './components/singnup/SignUp';
import SignIn from './components/signin/SignIn';
import Footer from './components/footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offers: [],
      isLoaded: false,
      email: '',
      password: ''
    };
  }

  // componentDidMount = () => {
  //   this.getOffers();
  // };

  // getOffers = () => {
  //   axios
  //     .get('http://localhost:8000/offers')
  //     .then(res => res.data)
  //     .then(data =>
  //       this.setState({
  //         offers: data,
  //         isLoaded: true
  //       })
  //     );
  // };

  render() {
    // const { offers, isLoaded } = this.state;

    // if (!isLoaded) {
    //   return <h1>Loading...</h1>;
    // } else {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/home" component={Directory} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/postoffer" component={FormPostOffer} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
