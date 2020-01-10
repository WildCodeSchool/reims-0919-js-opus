//import React from 'react';
import './Header.css';
import filter from './fil.png';

import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      classFilter: 'menu-header'
    };
    this.showFilters = this.showFilters.bind(this);
  }
  showFilters() {
    this.setState({ show: !this.state.show });
    if (this.state.show) {
      this.state.classFilter = 'menu-header';
    } else {
      this.state.classFilter = 'aaa';
    }
  }

  render() {
    return (
      <div className={this.state.classFilter}>
        {/* div className="menu-header"> */}
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
            Filtre
          </button>
        </nav>
        <button className="btnFilter">
          <img className="iconeFilter" src={filter} alt="icone" />
          Filtre
        </button>
      </div>
    );
  }
}
