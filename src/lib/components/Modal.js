import './styles/modal.css'
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ text, close }) => {

  Modal.propTypes = {
		text: PropTypes.string,
    close: PropTypes.bool || PropTypes.func
	};

  return (
    <Fragment>
      <div className="modal-container">
        <div className="overlay modal-trigger"></div>
        <div className="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="dialogDesc">
            <button 
            aria-label="close modal"
            className="close-modal modal-trigger" onClick={close}>X</button>
            <p id="dialogDesc">{text}</p>
        </div>
      </div>
    </Fragment>
    
  );
};

export default Modal;
