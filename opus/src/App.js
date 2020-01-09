import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';
import Directory from './components/directory/Directory';
import FormPostOffer from './components/formPostOffer/FormPostOffer';
import SignUp from './components/singnup/SignUp';
import SignIn from './components/signin/SignIn';
import Footer from './components/footer/Footer';
import offerDetail from './components/offerDetail/offerDetail';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/home" component={Directory} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/postoffer" component={FormPostOffer} />
        <Route exact path="/offerDetail" component={offerDetail} />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
