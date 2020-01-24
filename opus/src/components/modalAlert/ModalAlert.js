import React, { Component } from 'react';
import './ModalAlert.css';

class ModalAlert extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="modalAlert"
        style={{ display: this.props.openModal ? 'flex' : 'none' }}
      >
        <p>Inscription Effectuée !</p>
      </div>
    );
  }
}

export default ModalAlert;
