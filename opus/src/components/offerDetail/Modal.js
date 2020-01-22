import React, { Component } from 'react';
import './OfferDetail.css';
import MomentInput from 'react-moment-input';
import moment from 'moment';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateDeb: null,
      dateFin: null
    };
  }

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
          {/* //////////////////////////// CLALENDAR ////////////////////////////////////////// */}
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
              this.setState({ dateDeb: moment(date._d).format('L HH:mm:ss') })
            }
          />

          <h2>Date de fin</h2>

          <MomentInput
            translations={{
              DATE: 'Date',
              TIME: 'Heure',
              DAYS_MON: 'Lun',
              DAYS_TUE: 'Mar',
              MONTHS_JANUARY: 'Janvier',
              MONTHS_OCTOBER: 'Octobre'
            }}
            format="DD-MM-YYYY HH:mm"
            options={true}
            readOnly={false}
            icon={true}
            enableInputClick={true}
            onClose={date =>
              this.setState({ dateFin: moment(date._d).format('L HH:mm:ss') })
            }
          />
          <button className="btnValidDate">Enregistrer</button>
        </div>
      </div>
    );
  }
}
