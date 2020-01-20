import React from 'react';
import './OfferDetail.css';

const Modal = props => {
  // const Modal = ({ visible, cache }) => {
  return (
    <div
      className="modal"
      style={{
        transform: props.visibleModal ? 'translateY(0vh' : 'translateY(-100vh)',
        opacity: props.visibleModal ? '.9' : '0'
      }}
    >
      <button className="btnCloseModale" onClick={props.closeModal}>
        X
      </button>
      <h3>Plage de réservation</h3>
      <p>
        Holisticly build holistic content vis-a-vis competitive growth
        strategies. Appropriately visualize highly efficient paradigms after
        long-term high-impact opportunities. Conveniently predominate seamless
        paradigms vis-a-vis cross-platform benefits. Objectively productivate
        unique leadership skills via cross-media infrastructures. Appropriately
        communicate stand-alone testing procedures and.
      </p>
    </div>
  );
};

export default Modal;
