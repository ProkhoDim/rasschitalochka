import React from 'react';
import logo from '../../assets/icons/logo.svg';
import styles from './Logo.module.css';

const Logo = () => (
  <img src={logo} alt="logo" width="50" className={styles.logo} />
);

export default Logo;
