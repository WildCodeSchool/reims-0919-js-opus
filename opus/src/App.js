import React from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Directory from './components/directory/Directory';
import FormPostOffer from './components/formPostOffer/FormPostOffer';
import SignUp from './components/singnup/SignUp';
import SignIn from './components/signin/SignIn';
import OfferDetail from './components/offerDetail/OfferDetail';
import Contrats from './components/termes/Contrats';
import Loading from './components/loading/Loading';
import Profile from './components/profile/Profile';
import ProfileDetail from './components/profileDetail/ProfileDetail';

const mapStateToProps = state => ({
  token: state.token
});

const App = props => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/loader" component={Loading} />
        <Route
          exact
          path="/home"
          render={() => (props.token ? <Directory /> : <Redirect to="/" />)}
        />
        <Route
          exact
          path="/postoffer"
          render={() => (props.token ? <FormPostOffer /> : <Redirect to="/" />)}
        />
        <Route exact path="/offerDetail" component={OfferDetail} />
        <Route exact path="/contrats" component={Contrats} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profileDetail" component={ProfileDetail} />
      </Switch>
    </div>
  );
};

export default connect(mapStateToProps)(App);
