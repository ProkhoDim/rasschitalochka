import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';

import s from './Modal.module.css';

const MODAL_ROOT = document.getElementById('modal_root');

class Modal extends Component {
  modalRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.onClose();
  };

  handleBackdropClick = e => {
    if (this.modalRef.current && e.target !== this.modalRef.current) {
      return;
    }
    this.props.onClose();
  };
  render() {
    const { children, title, onClose } = this.props;
    return createPortal(
      <div
        className={s.modal_wrapper}
        ref={this.modalRef}
        onClick={this.handleBackdropClick}
      >
        <div className={s.modal_content}>
          <div className={s.heading_wrapper}>
            <button
              className={s.button}
              type="button"
              onClick={onClose}
            ></button>
            <h2 className={s.modal_title}>{title}</h2>
          </div>
          {children}
        </div>
      </div>,
      MODAL_ROOT,
    );
  }
}

export default Modal;
