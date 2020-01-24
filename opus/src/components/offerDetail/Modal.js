import React, { Component } from 'react';
import MomentInput from 'react-moment-input';
import moment from 'moment';
import { connect } from 'react-redux';
import axios from 'axios';

import './OfferDetail.css';

const mapStateToProps = state => ({
  token: state.token
});

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: null,
      end_date: null
    };
  }

  makeAReservation = () => {
    const firstDate =
      this.state.start_date.substring(0, 10) +
      ' ' +
      (Number(this.state.start_date.substring(11, 13)) + 1) +
      this.state.start_date.substring(13);
    const secondDate =
      this.state.end_date.substring(0, 10) +
      ' ' +
      (Number(this.state.end_date.substring(11, 13)) + 1) +
      this.state.end_date.substring(13);

    axios
      .post(
        'http://localhost:8000/booking',
        {
          start_date: `${firstDate}`,
          end_date: `${secondDate}`,
          id_offer: this.props.id
        },
        {
          headers: {
            Authorization: this.props.token
          }
        }
      )
      .then(res => {
        console.log(res);
        this.props.closeModal();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div
        className="modal"
        style={{
          transform: this.props.openModal
            ? 'translateY(0vh'
            : 'translateY(-100vh)',
          opacity: this.props.openModal ? '1' : '0'
        }}
      >
        <button className="btnCloseModale" onClick={this.props.closeModal}>
          X
        </button>
        <div>
          {/* //////////////////////////// CALENDAR ////////////////////////////////////////// */}
          <h2>Date de début</h2>

          <MomentInput
            translations={{
              DATE: 'Date',
              TIME: 'Heure',
              DAYS_MON: 'Lun',
              DAYS_TUE: 'Mar',
              DAYS_WED: 'Mer',
              DAYS_THU: 'Jeu',
              DAYS_FRI: 'Ven',
              DAYS_SAT: 'Sam',
              DAYS_SUN: 'Dim',
              MONTHS_JANUARY: 'Janvier',
              MONTHS_FEBRUARY: 'Fevrier',
              MONTHS_MARCH: 'Mars',
              MONTHS_APRIL: 'Avril',
              MONTHS_MAY: 'Mai',
              MONTHS_JUNE: 'Juin',
              MONTHS_JULY: 'Juillet',
              MONTHS_AUGUST: 'Aout',
              MONTHS_SEPTEMBER: 'Septembre',
              MONTHS_OCTOBER: 'Octobre',
              MONTHS_NOVEMBER: 'Novembre',
              MONTHS_DECEMBER: 'Decembre'
            }}
            format="DD-MM-YYYY HH:mm"
            options={true}
            readOnly={false}
            icon={true}
            enableInputClick={true}
            onClose={date =>
              this.setState({
                start_date: moment(date._d).format('YYYY/MM/DD HH:mm:ss')
              })
            }
          />

          <h2>Date de fin</h2>

          <MomentInput
            translations={{
              DATE: 'Date',
              TIME: 'Heure',
              DAYS_MON: 'Lun',
              DAYS_TUE: 'Mar',
              DAYS_WED: 'Mer',
              DAYS_THU: 'Jeu',
              DAYS_FRI: 'Ven',
              DAYS_SAT: 'Sam',
              DAYS_SUN: 'Dim',
              MONTHS_JANUARY: 'Janvier',
              MONTHS_FEBRUARY: 'Fevrier',
              MONTHS_MARCH: 'Mars',
              MONTHS_APRIL: 'Avril',
              MONTHS_MAY: 'Mai',
              MONTHS_JUNE: 'Juin',
              MONTHS_JULY: 'Juillet',
              MONTHS_AUGUST: 'Aout',
              MONTHS_SEPTEMBER: 'Septembre',
              MONTHS_OCTOBER: 'Octobre',
              MONTHS_NOVEMBER: 'Novembre',
              MONTHS_DECEMBER: 'Decembre'
            }}
            format="DD-MM-YYYY HH:mm"
            options={true}
            readOnly={false}
            icon={true}
            enableInputClick={true}
            onClose={date =>
              this.setState({
                end_date: moment(date._d).format('YYYY/MM/DD HH:mm:ss')
              })
            }
          />
          <button
            className="btnValidDate"
            onClick={() => this.makeAReservation()}
          >
            Enregistrer
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Modal);
