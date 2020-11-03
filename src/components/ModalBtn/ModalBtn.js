import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Modal from '../Modal/Modal';
import styles from './ModalBtn.module.css';
import * as routes from '../../constants/routes';
import { Media } from '../../common';
import AddTransaction from '../AddTransaction';
import { costs, income } from '../../constants/CategoryValues';
import { financeOperation } from '../../redux/finance';
import * as transactionTypes from '../../constants/transactionTypes';

const ModalBtn = () => {
  const [componentInModal, setComponentInModal] = useState('');
  const dispatch = useDispatch();

  const addTranasactionSubmit = userData =>
    dispatch(financeOperation.addTransaction(userData));

  const closeModal = () => {
    setComponentInModal('');
  };

  const setModalContent = type => {
    setComponentInModal(type);
  };

  return (
    <>
      <div className={styles.modalBtnBox}>
        <Media device="mobile">
          <NavLink className={styles.modalBtn} exact to={routes.ADDINCOME}>
            Add Income
          </NavLink>
          <NavLink className={styles.modalBtn} exact to={routes.ADDCOST}>
            Add Cost
          </NavLink>
        </Media>

        <Media device="fromTablet">
          <button
            className={styles.modalBtn}
            onClick={() => setModalContent(transactionTypes.addIncome)}
          >
            {transactionTypes.addIncome}
          </button>
          <button
            className={styles.modalBtn}
            onClick={() => setModalContent(transactionTypes.addCost)}
          >
            {transactionTypes.addCost}
          </button>
        </Media>
      </div>

      {componentInModal && (
        <Modal title={componentInModal} onClose={closeModal}>
          {componentInModal === transactionTypes.addIncome ? (
            <AddTransaction
              radioButtonData={income}
              onSubmit={addTranasactionSubmit}
              onCloseModal={closeModal}
              type={transactionTypes.addIncome}
            />
          ) : (
            <AddTransaction
              radioButtonData={costs}
              onSubmit={addTranasactionSubmit}
              onCloseModal={closeModal}
              type={transactionTypes.addCost}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default ModalBtn;
