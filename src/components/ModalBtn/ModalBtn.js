import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal/Modal';
import AddCost from '../AddCost/AddCost';
import AddIncome from '../AddIncome/AddIncome';
import styles from './ModalBtn.module.css';

const ModalBtn = () => {
  const [showModal, setShowModal] = useState(false);
  const [addIncome, setAddIncome] = useState(true);
  const [title, setTitle] = useState('Add Income');

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  const setModalContent = e => {
    if (e.target.textContent === 'Add Income') {
      setAddIncome(true);
      setTitle('Add Income');
      toggleModal();
    } else {
      setAddIncome(false);
      setTitle('Add Cost');
      toggleModal();
    }
  };

  return (
    <>
      <div className={styles.modalBtnBox}>
        <button className={styles.modalBtn} onClick={setModalContent}>
          Add Income
        </button>
        <button className={styles.modalBtn} onClick={setModalContent}>
          Add Cost
        </button>
      </div>
      {showModal && (
        <Modal title={title} onClose={toggleModal}>
          {addIncome ? <AddIncome /> : <AddCost />}
        </Modal>
      )}
    </>
  );
};

export default connect()(ModalBtn);
