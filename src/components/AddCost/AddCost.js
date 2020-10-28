import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import financeOperations from '../../redux/finance/finance-operation';

import s from './AddCost.module.css';
import RadioButton from './RadioButton';

const buttonsValues = [
  'Main expences',
  'Food',
  'Car',
  'Entertainment',
  'Self care',
  'Child care',
  'Household products',
  'Education',
  'Other expences',
];

class AddCost extends Component {
  state = {
    comments: '',
    category: '',
    amount: '',
    date: '',
  };

  dateRef = createRef();

  handleChange = e => {
    const { name, value } = e.target;
    if (name === 'date') {
      this.setState({ date: this.dateRef.current.valueAsNumber });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddCostSubmit(this.state);
    this.props.onCloseModal();
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <div className={s.heading_wrapper}>
          <div className={s.amount_wrapper}>
            <input
              className={s.amount}
              type="number"
              name="amount"
              min="0"
              max="99999"
              step="0.01"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className={s.date_wrapper}>
            <input
              className={s.date}
              name="date"
              type="date"
              ref={this.dateRef}
              required
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className={s.categories_wrapper}>
          <h2 className={s.categories_title}>Categories</h2>
          {buttonsValues.map(value => (
            <RadioButton
              value={value}
              key={value}
              onChange={this.handleChange}
            />
          ))}
        </div>
        <div className={s.comments_wrapper}>
          <h2 className={s.comments_heading}>Comments</h2>
          <textarea
            className={s.comments}
            type="text"
            name="comments"
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className={s.button}>
          Add
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddCostSubmit: userData => dispatch(financeOperations.addCost(userData)),
});

export default connect(null, mapDispatchToProps)(AddCost);
