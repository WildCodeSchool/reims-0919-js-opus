import React, { Component } from 'react';
import './Header.css';
import filter from './fil.png';
import calendar from './Calendrier 50x50px.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      personCountEnabled: false,
      personCount: 10,
      priceMin: 0,
      priceEnabled: false,
      priceMax: 100,
      datesEnabled: false,
      classFilter: 'containerFilterOn',
      compare: 'inputChoise'
    };
    this.toggleFilter = this.toggleFilter.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.showFilters = this.showFilters.bind(this);
  }

  showFilters() {
    this.setState({ show: !this.state.show });
    if (this.state.show) {
      this.setState({ classFilter: 'containerFilterOn' });
    } else {
      this.setState({ classFilter: 'containerFilterOff' });
    }
  }

  toggleFilter(e) {
    this.setState({
      [e.target.name]: !this.state[e.target.name]
    });
  }

  onFilterChange(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

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
    return (
      <div className="menu-header">
        <nav className="header">
          <input
            className="searchOffer"
            type="search"
            placeholder="Recherche"
            value={this.props.searchCity}
            onChange={this.props.handleChange}
          />
          <input
            className="arrow-submit"
            type="image"
            src="https://i.ibb.co/6b7rbrw/Fl-che-droite-rond-rose-50x50px.png"
            alt="arrow"
            onClick={this.props.handleSubmit}
          />

          <button className="btnFilter" onClick={this.showFilters}>
            <img className="iconeFilter" src={filter} alt="icone" />
            <p>Filtres</p>
          </button>
        </nav>
        {/* /////////////////// MULTI FILTRE /////////////////////////////////// */}

        {/* -------------- Number Person */}
        <div className={this.state.classFilter}>
          <div className="containerFiltres">
            <div className="choise">
              <label className="titleFilter" htmlFor="personCountEnabled">
                Nb place
              </label>
              <input
                className="inputChoise"
                type="text"
                onChange={this.onFilterChange}
                value={this.state.personCount}
                id="personCount"
                name="personCount"
                pattern="[0-9]*"
                min="1"
                disabled={!this.state.personCountEnabled}
              ></input>
              <input
                type="checkbox"
                onChange={this.toggleFilter}
                value={this.state.personCountEnabled}
                id="personCountEnabled"
                name="personCountEnabled"
              ></input>
            </div>
            {/* -------------- Price Min */}
            <div className="choise">
              <label className="titleFilter" htmlFor="priceMinEnabled">
                Prix Mini (€/h)
              </label>
              <input
                className={this.state.compare}
                type="text"
                pattern="[0-9]*"
                onChange={this.handleChangeMin}
                onBlur={this.comparePrice}
                value={this.state.priceMin}
                disabled={!this.state.priceEnabled}
              ></input>
              <input
                type="checkbox"
                onChange={this.toggleFilter}
                value={this.state.priceEnabled}
                id="priceEnabled"
                name="priceEnabled"
              />
            </div>
            <div className="choise">
              <label className="titleFilter" htmlFor="priceMaxEnabled">
                Prix Maxi (€/h)
              </label>
              <input
                className={this.state.compare}
                type="text"
                pattern="[0-9]*"
                onChange={this.handleChangeMax}
                onBlur={this.comparePrice}
                value={this.state.priceMax}
                disabled={!this.state.priceEnabled}
              ></input>
              <input
                type="checkbox"
                onChange={this.toggleFilter}
                value={this.state.priceEnabled}
                id="priceEnabled"
                name="priceEnabled"
              ></input>
            </div>
            {/* ------------ Calendar */}
            <div className="choiseCalendar">
              <label className="titleFilter">Dates</label>
              <img className="iconeCalendar" src={calendar} alt="icone" />
              <input
                type="checkbox"
                onChange={this.toggleFilter}
                value={this.state.datesEnabled}
                id="datesEnabled"
                name="datesEnabled"
              ></input>
            </div>
          </div>
          <div>
            <button className="btnMultiFilter">Filtrer ...</button>
          </div>
        </div>
      </div>
    );
  }
}
