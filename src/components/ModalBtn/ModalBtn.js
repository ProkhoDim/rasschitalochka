import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Modal from '../Modal/Modal';
import AddCost from '../AddCost/AddCost';
import AddIncome from '../AddIncome/AddIncome';
import styles from './ModalBtn.module.css';
import routes from '../../routes';
import { Media } from '../../common';

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

  // const isMobile = window.screen.width < 768 ? true : false;

  return (
    <>
      <div className={styles.modalBtnBox}>
        {/* {isMobile && ( */}
        <Media device="mobile">
          <NavLink className={styles.modalBtn} exact to={routes.ADDINCOME}>
            Add Income
          </NavLink>
          <NavLink className={styles.modalBtn} exact to={routes.ADDCOST}>
            Add Cost
          </NavLink>
        </Media>
        {/* )} */}
        {/* {!isMobile && ( */}
        <Media device="fromTablet">
          <button className={styles.modalBtn} onClick={setModalContent}>
            Add Income
          </button>
          <button className={styles.modalBtn} onClick={setModalContent}>
            Add Cost
          </button>
        </Media>
        {/* )} */}
      </div>
      {showModal && (
        <Modal title={title} onClose={toggleModal}>
          {addIncome ? (
            <AddIncome onCloseModal={toggleModal} />
          ) : (
            <AddCost onCloseModal={toggleModal} />
          )}
        </Modal>
      )}
    </>
  );
};

export default connect()(ModalBtn);
