import React from 'react';
import './App.css';

import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Directory from './components/directory/Directory';
import FormPostOffer from './components/formPostOffer/FormPostOffer';
import SignUp from './components/singnup/SignUp';
import SignIn from './components/signin/SignIn';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/home" component={Directory} />
          <Route exact path="/postoffer" component={FormPostOffer} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
