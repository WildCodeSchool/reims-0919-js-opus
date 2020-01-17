import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Directory from './components/directory/Directory';
import FormPostOffer from './components/formPostOffer/FormPostOffer';
import SignUp from './components/singnup/SignUp';
import SignIn from './components/signin/SignIn';
import OfferDetail from './components/offerDetail/OfferDetail';
import Contrats from './components/termes/Contrats';
import Loading from './components/loading/Loading';
import Profile from './components/profile/Profile';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn} />

        <Route exact path="/loader" component={Loading} />
        <Route exact path="/home" component={Directory} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/postoffer" component={FormPostOffer} />
        <Route exact path="/offerDetail" component={OfferDetail} />
        <Route exact path="/contrats" component={Contrats} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
};

export default App;
