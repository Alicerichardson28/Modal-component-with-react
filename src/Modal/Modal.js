import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import "./Modal.css";
import { CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom'

const Modal = (props) => {
    // if(!props.show) {
    //     return null
    // }

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);


  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div
        className={`modal ${props.show ? "show" : ""}`}
        onClick={props.handleClose}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{props.title || "This is my Modal"}</h4>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">
            <button onClick={props.handleClose} className="button">
              Close
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

// Modal.PropTypes = {
//   title: PropTypes.string
// }

// Modal.defaultProps = {
//   title: 'This is my modal'
// }

export default Modal;
