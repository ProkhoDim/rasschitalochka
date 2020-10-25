import React from 'react';
import { connect } from 'react-redux';
import styles from './AppName.module.css';

const AppName = () => <h1 className={styles.appName}>Rasschitalochka</h1>;

export default connect()(AppName);
