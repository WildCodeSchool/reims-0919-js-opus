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
import MyReservations from './components/myReservations/MyReservations';
import ProfileDetail from './components/profileDetail/ProfileDetail';
import CgvInProfile from './components/cgv/CgvInProfile';
import MyOffers from './components/myOffers/MyOffers';
import MyFavorites from './components/myFavorites/MyFavorites';

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
        <Route
          exact
          path="/profile"
          render={() => (props.token ? <Profile /> : <Redirect to="/" />)}
        />
        <Route
          exact
          path="/myreservations"
          render={() =>
            props.token ? <MyReservations /> : <Redirect to="/" />
          }
        />
        <Route
          exact
          path="/myoffers"
          render={() => (props.token ? <MyOffers /> : <Redirect to="/" />)}
        />
        <Route
          exact
          path="/myfavorites"
          render={() => (props.token ? <MyFavorites /> : <Redirect to="/" />)}
        />
        <Route exact path="/profileDetail" component={ProfileDetail} />
        <Route exact path="/cgv" component={CgvInProfile} />
      </Switch>
    </div>
  );
};

export default connect(mapStateToProps)(App);
