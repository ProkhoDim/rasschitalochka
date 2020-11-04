import React, { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

const MODAL_ROOT = document.getElementById('modal_root');

const Modal = ({ title, children, onClose }) => {
  const handleKeyPress = useCallback(
    e => {
      if (e.code !== 'Escape') {
        return;
      }
      onClose();
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  const handleBackdropClick = e => {
    if (e.target !== e.currentTarget) {
      return;
    }
    onClose();
  };

  return createPortal(
    <div className={styles.modal_wrapper} onClick={handleBackdropClick}>
      <div className={styles.modal_content}>
        <div className={styles.heading_wrapper}>
          <button
            className={styles.button}
            type="button"
            onClick={onClose}
          ></button>
          <h2 className={styles.modal_title}>{title}</h2>
        </div>
        {children}
      </div>
    </div>,
    MODAL_ROOT,
  );
};

export default Modal;
