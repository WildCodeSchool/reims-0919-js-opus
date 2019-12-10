import React from 'react';
import './App.css';
import axios from 'axios';
import Footer from './components/Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      offers: []
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
          offers: data
        })
      );
  };

  render() {
    const { offers } = this.state;

    return (
      <div className="App">
        {offers.map(offer => {
          return (
            <div className="card" key={offer.id_offer}>
              <img src={offer.picture} alt={offer.society_name} />
              <div className="info">
                <p className="card-adress">{offer.adress_city}</p>
                <div className="title-info">
                  <p>{offer.title}</p>
                  <img
                    src="https://i.ibb.co/gDDGF5Q/Homme-50x50px.png"
                    alt="nombres de personnes"
                    style={{ height: '8%', width: '8%', margin: '0.2rem' }}
                  />
                  <p>{offer.capacity}</p>
                  <p>{offer.price}€/h</p>
                </div>
              </div>
            </div>
          );
        })}

        <Footer />
      </div>
    );
  }
}

export default App;
