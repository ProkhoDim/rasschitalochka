import React from 'react';
import routes from '../../routes';
import AddCost from './AddCost';
import s from './CostMobile.module.css';

const CostMobile = props => {
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
        <h2 className={s.mobile_heading}>Add Cost</h2>
      </div>
      <AddCost onCloseModal={handleGoBack} />
    </div>
  );
};

export default CostMobile;
