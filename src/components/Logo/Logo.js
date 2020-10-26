import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.css';

const Logo = ({ logo }) => (
  <img src={logo} alt="logo" width="50" className={styles.logo} />
);

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Logo;
