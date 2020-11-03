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

const ModalBtn = () => {
  const [componentInModal, setComponentInModal] = useState('');
  const dispatch = useDispatch();

  const addIncomeName = 'Add Income';
  const addCostName = 'Add Cost';

  const addIncomeSubmit = userData =>
    dispatch(financeOperation.addIncome(userData));

  const addCostSubmit = userData =>
    dispatch(financeOperation.addCost(userData));

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
            onClick={() => setModalContent(addIncomeName)}
          >
            {addIncomeName}
          </button>
          <button
            className={styles.modalBtn}
            onClick={() => setModalContent(addCostName)}
          >
            {addCostName}
          </button>
        </Media>
      </div>

      {componentInModal && (
        <Modal title={componentInModal} onClose={closeModal}>
          {componentInModal === addIncomeName ? (
            <AddTransaction
              radioButtonData={income}
              onSubmit={addIncomeSubmit}
              onCloseModal={closeModal}
            />
          ) : (
            <AddTransaction
              radioButtonData={costs}
              onSubmit={addCostSubmit}
              onCloseModal={closeModal}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default ModalBtn;
