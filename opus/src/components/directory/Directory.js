import React from 'react';
import axios from 'axios';
import './Directory.css';
import Header from '../header/Header';
import Offer from '../offer/Offer';
import Footer from '../footer/Footer';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  token: state.token
});

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offers: [],
      isLoaded: false,
      searchCity: '',
      show: false,
      personCountEnabled: false,
      personCount: 10,
      priceMin: 0,
      priceEnabled: false,
      priceMax: 100,
      datesEnabled: false,
      classFilter: 'containerFilterOn',
      compare: 'inputChoise',
      isChecked: null
    };
    this.resetAllFilter = this.resetAllFilter.bind(this);
  }

  componentDidMount = () => {
    this.getOffers();
  };

  getOffers = () => {
    let url = '';
    if (this.state.searchCity !== '') {
      url += `?city=${this.state.searchCity}`;
    }
    if (this.state.personCountEnabled) {
      if (this.state.searchCity !== '') {
        url += `&person=${this.state.personCount}`;
      } else {
        url += `?person=${this.state.personCount}`;
      }
    }
    if (this.state.priceEnabled) {
      if (this.state.searchCity !== '' || this.state.personCountEnabled) {
        url += `&minprice=${this.state.priceMin}&maxprice=${this.state.priceMax}`;
      } else {
        url += `?minprice=${this.state.priceMin}&maxprice=${this.state.priceMax}`;
      }
    }
    if (this.state.datesEnabled) {
      //// nothing
    }
    axios
      .get(`http://localhost:8000/offers${url}`, {
        headers: {
          Authorization: this.props.token
        }
      })
      .then(res => res.data)
      .then(data =>
        this.setState({
          offers: data,
          isLoaded: true
        })
      );
  };

  handleChange = event => {
    this.setState({ searchCity: event.target.value });
  };

  handleSubmit = event => {
    this.setState({
      show: false,
      classFilter: 'containerFilterOn'
    });
    this.getOffers();
    event.preventDefault();
  };

  async resetAllFilter(event) {
    await this.setState({
      show: false,
      personCountEnabled: false,
      priceEnabled: false,
      datesEnabled: false,
      searchCity: '',
      personCount: 10,
      priceMin: 0,
      priceMax: 100,
      isChecked: false,
      classFilter: 'containerFilterOn'
    });
    this.getOffers();
    event.preventDefault();
  }

  showFilters = () => {
    this.setState({ show: !this.state.show });
    if (this.state.show) {
      this.setState({ classFilter: 'containerFilterOn' });
    } else {
      this.setState({ classFilter: 'containerFilterOff' });
    }
  };

  toggleFilter = e => {
    this.setState({
      [e.target.name]: !this.state[e.target.name]
    });
  };

  onFilterChange = e => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleChangeMin = e => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({
        priceMin: e.target.value === '' ? 0 : parseInt(e.target.value)
      });
    }
  };

  handleChangeMax = e => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({
        priceMax: e.target.value === '' ? 0 : parseInt(e.target.value)
      });
    }
  };

  comparePrice = () => {
    if (this.state.priceMax > this.state.priceMin) {
      this.setState({ compare: 'inputChoise' });
    } else {
      this.setState({ compare: 'inputChoiseNok' });
    }
  };

  render() {
    const { offers, isLoaded } = this.state;
    if (!isLoaded) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <>
          <div className="offers-display">
            {offers.map(({ id, ...otherOfferSelection }, index) => (
              <Offer key={index} {...otherOfferSelection} />
            ))}
          </div>
          <Header
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            searchCity={this.state.searchCity}
            show={this.state.show}
            personCountEnabled={this.state.personCountEnabled}
            personCount={this.state.personCount}
            priceMin={this.state.priceMin}
            priceEnabled={this.state.priceEnabled}
            priceMax={this.state.priceMax}
            datesEnabled={this.state.datesEnabled}
            classFilter={this.state.classFilter}
            compare={this.state.compare}
            showFilters={this.showFilters}
            toggleFilter={this.toggleFilter}
            onFilterChange={this.onFilterChange}
            handleChangeMin={this.handleChangeMin}
            handleChangeMax={this.handleChangeMax}
            comparePrice={this.comparePrice}
            resetAllFilter={this.resetAllFilter}
            isChecked={this.state.isChecked}
          />
          <Footer />
        </>
      );
    }
  }
}

export default connect(mapStateToProps)(Directory);
