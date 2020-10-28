import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import AddCost from '../AddCost/AddCost';
import AddIncome from '../AddIncome/AddIncome';
import styles from './ModalBtn.module.css';
import routes from '../../routes';

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

  const isMobile = window.screen.width < 768 ? true : false;

  return (
    <>
      <div className={styles.modalBtnBox}>
        {isMobile && (
          <>
            <NavLink className={styles.modalBtn} exact to={routes.ADDINCOME}>
              Add Income
            </NavLink>
            <NavLink className={styles.modalBtn} exact to={routes.ADDCOST}>
              Add Cost
            </NavLink>
          </>
        )}
        {!isMobile && (
          <>
            <button className={styles.modalBtn} onClick={setModalContent}>
              Add Income
            </button>
            <button className={styles.modalBtn} onClick={setModalContent}>
              Add Cost
            </button>
          </>
        )}
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

// ModalBtn.propTypes = {
//   onAddIncomeBtnClick: PropTypes.func.isRequired,
//   onAddCostBtnClick: PropTypes.func.isRequired,
// };

export default ModalBtn;
