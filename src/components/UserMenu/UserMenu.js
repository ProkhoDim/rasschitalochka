import React from 'react';
import styles from './UserMenu.module.css';
// import PropTypes from 'prop-types';

const UserMenu = ({ name, logoutBtn, onLogout }) => (
  <div className={styles.userMenuContainer}>
    <span className={styles.userName}>Name {name}</span>

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

// UserMenu.propTypes = {
//   name: PropTypes.string.isRequired,
//   onLogout: PropTypes.func.isRequired,
//   logoutBtn: PropTypes.string.isRequired,
// };

export default UserMenu;
