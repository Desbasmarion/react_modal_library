import './styles/modal.css'
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ props }) => {

  Modal.propTypes = {
		props: PropTypes.string,
	};

  const [ isOpen, setIsOpen ] = useState(true)

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className='Modal'>
      <div className="modal-container">
            <div className="overlay modal-trigger"></div>
            <div className="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="dialogDesc">
                <button 
                aria-label="close modal"
                className="close-modal modal-trigger" onClick={closeModal}>X</button>
                <p id="dialogDesc">{props}</p>
            </div>
        </div>
    </div>
  );
};

export default Modal;
