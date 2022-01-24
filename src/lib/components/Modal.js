import './styles/modal.css'
import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ text, open }) => {

  Modal.propTypes = {
		text: PropTypes.string,
    open: PropTypes.bool
	};

  const [ isOpen, setIsOpen ] = useState(open)

  const closeModal = () => {
    setIsOpen(!open)
  }

  return (
    <Fragment>
    {isOpen &&
        <div className="modal-container">
            <div className="overlay modal-trigger"></div>
            <div className="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="dialogDesc">
                <button 
                aria-label="close modal"
                className="close-modal modal-trigger" onClick={closeModal}>X</button>
                <p id="dialogDesc">{text}</p>
            </div>
          </div>
    }
    </Fragment>
    
  );
};

export default Modal;
