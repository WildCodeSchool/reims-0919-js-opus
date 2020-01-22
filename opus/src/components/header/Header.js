import React from 'react';
import './Header.css';
import filter from './fil.png';
import calendar from './Calendrier 50x50px.png';

const Header = props => {
  return (
    <div className="menu-header">
      <nav className="header">
        <input
          className="searchOffer"
          type="search"
          placeholder="Recherche Ville"
          value={props.searchCity}
          onChange={props.handleChange}
        />
        <input
          className="arrow-submit"
          type="image"
          src="https://i.ibb.co/6b7rbrw/Fl-che-droite-rond-rose-50x50px.png"
          alt="arrow"
          onClick={props.handleSubmit}
        />

        <button className="btnFilter" onClick={props.showFilters}>
          <img className="iconeFilter" src={filter} alt="icone" />
          <p>Filtres</p>
        </button>
      </nav>
      {/* /////////////////// MULTI FILTRE /////////////////////////////////// */}

      {/* -------------- Number Person */}
      <div className={props.classFilter}>
        <div className="containerFiltres">
          <div className="choise">
            <label className="titleFilter" htmlFor="personCountEnabled">
              Nb place
            </label>
            <input
              className="inputChoise"
              type="text"
              onChange={props.onFilterChange}
              value={props.personCount}
              id="personCount"
              name="personCount"
              pattern="[0-9]*"
              min="1"
              disabled={!props.personCountEnabled}
            ></input>
            <input
              type="checkbox"
              onChange={props.toggleFilter}
              value={props.personCountEnabled}
              id="personCountEnabled"
              name="personCountEnabled"
              checked={props.isChecked}
            ></input>
          </div>
          {/* -------------- Price Min */}
          <div className="choise">
            <label className="titleFilter" htmlFor="priceMinEnabled">
              Prix Mini (€/h)
            </label>
            <input
              className={props.compare}
              type="text"
              pattern="[0-9]*"
              onChange={props.handleChangeMin}
              onBlur={props.comparePrice}
              value={props.priceMin}
              disabled={!props.priceEnabled}
            ></input>
            <input
              type="checkbox"
              onChange={props.toggleFilter}
              value={props.priceEnabled}
              id="priceEnabled"
              name="priceEnabled"
              checked={props.isChecked}
            />
          </div>
          <div className="choise">
            <label className="titleFilter" htmlFor="priceMaxEnabled">
              Prix Maxi (€/h)
            </label>
            <input
              className={props.compare}
              type="text"
              pattern="[0-9]*"
              onChange={props.handleChangeMax}
              onBlur={props.comparePrice}
              value={props.priceMax}
              disabled={!props.priceEnabled}
            ></input>
            <input
              type="checkbox"
              onChange={props.toggleFilter}
              value={props.priceEnabled}
              id="priceEnabled"
              name="priceEnabled"
              checked={props.isChecked}
            ></input>
          </div>
          {/* ------------ Calendar */}
          <div className="choiseCalendar">
            <label className="titleFilter">Dates</label>
            <img className="iconeCalendar" src={calendar} alt="icone" />
            <input
              type="checkbox"
              onChange={props.toggleFilter}
              value={props.datesEnabled}
              id="datesEnabled"
              name="datesEnabled"
              checked={props.isChecked}
            ></input>
          </div>
        </div>
        <div>
          <button className="btnMultiFilter" onClick={props.resetAllFilter}>
            Réinitialiser
          </button>
          <button className="btnMultiFilter" onClick={props.handleSubmit}>
            Filtrer ...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
