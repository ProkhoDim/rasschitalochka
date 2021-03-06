import React from 'react';
import styles from './UserMenu.module.css';
import PropTypes from 'prop-types';
import logoutBtn from '../../assets/icons/logoutBtn.svg';

const UserMenu = ({ name, onLogout }) => (
  <div className={styles.userMenuContainer}>
    <span className={styles.userName}> {name}</span>

    <button className={styles.logoutBtn} onClick={onLogout}>
      <img
        src={logoutBtn}
        alt="logout button"
        className={styles.logoutBtnSvg}
      />
      <p className={styles.logoutTitle}> logout</p>
    </button>
  </div>
);

UserMenu.propTypes = {
  name: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
};

export default UserMenu;
