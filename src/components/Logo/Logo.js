import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import styles from './Logo.module.css';

const Logo = () => (
  <img src={logo} alt="logo" width="50" className={styles.logo} />
);

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Logo;
