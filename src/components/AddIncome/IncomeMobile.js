import React from 'react';
import routes from '../../routes';
import AddIncome from './AddIncome';
import s from './IncomeMobile.module.css';

const IncomeMobile = props => {
  const handleGoBack = () => {
    const { state } = props.location;

    if (state && state.from) {
      return props.history.push(state.from);
    }

    props.history.push(routes.HOME);
  };
  return (
    <div className={s.mobile_wrapper}>
      <div className={s.mobile_header}>
        <button className={s.mobile_button} onClick={handleGoBack}></button>
        <h2 className={s.mobile_heading}>Add Income</h2>
      </div>
      <AddIncome onCloseModal={handleGoBack} />
    </div>
  );
};

export default IncomeMobile;
