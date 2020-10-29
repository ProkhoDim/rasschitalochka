import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { financeSelectors } from '../../redux/finance';
import StatComponent from './StatisticsView';

const colors = [
  '#ecb22a',
  '#e28b20',
  '#d25925',
  '#67b7d0',
  '#5593d7',
  '#3e6ba8',
  '#9cc254',
  '#73ad57',
  '#507c3a',
];

class StatisticsView extends Component {
  state = {
    data: [],
    year: '',
    month: '',
    totalCost: 0,
  };
  componentDidMount() {
    this.setState({ data: this.props.data, totalCost: 0 });
  }

  getCategoriesTransactions = totalCostReturn => {
    const {
      getDataForComponent,
      getAmountsCategory,
      getUniqueCategory,
      state,
    } = this;
    const data = getDataForComponent(state);
    const categories = getUniqueCategory(data);
    const amount = getAmountsCategory(categories, data);
    const totalCost = amount.reduce((acc, itm) => acc + itm, 0);
    if (totalCostReturn) {
      return totalCost;
    }
    return { categories, amount };
  };

  getTotalCost = transactions => {
    if (transactions.length !== this.state.data.length) {
      return this.getCategoriesTransactions(true);
    }
    return false;
  };

  getDataByMonth = (month, items) =>
    items.filter(({ date }) => {
      const isItemInMonth = new Date(date).getMonth() === Number(month);
      return isItemInMonth;
    });

  getDataByYear = (year, items) =>
    items.filter(({ date }) => {
      const isItemInYear = new Date(date).getFullYear() === Number(year);
      return isItemInYear;
    });

  getDataForComponent = ({ year, month, data }) => {
    const { getDataByMonth, getDataByYear } = this;
    const isYearExist = !Number.isNaN(+year) === true && !!year === true;
    const isMonthExist = !Number.isNaN(+month) === true && !!month === true;
    if (isYearExist && isMonthExist)
      return getDataByMonth(month, getDataByYear(year, data));

    if (isYearExist) return getDataByYear(year, data);

    if (isMonthExist) return getDataByMonth(month, data);

    return data;
  };

  getUniqueCategory = items =>
    Array.from(new Set(items.flatMap(item => item.category).sort()));

  getAmountsCategory = (categories, transactions) =>
    categories.map(category =>
      transactions
        .filter(transaction => transaction.category.includes(category))
        .map(category => category.amount)
        .reduce((count, amount) => count + amount, 0),
    );

  getDataTransactionsForRender = ({ categories, amount }) =>
    categories
      .map((category, index) =>
        amount[index]
          ? {
              id: uuidv4(),
              category,
              amount: amount[index],
              fill: colors[index],
            }
          : { category },
      )
      .sort((a, b) => {
        return b.amount > a.amount ? 1 : -1;
      });

  updateDiagram = ({ year, month }) => {
    this.setState(prevState => {
      return { ...prevState, year, month };
    });
  };

  render() {
    const { data, year, month } = this.state;
    const costData = this.getDataForComponent({ data, year, month });
    return (
      <StatComponent
        data={this.getDataTransactionsForRender(
          this.getCategoriesTransactions(),
        )}
        updateDiagram={this.updateDiagram}
        totalCostCalculated={this.getTotalCost(costData)}
      />
    );
  }
}

const mapStateToProps = state => ({
  data: financeSelectors.getCostTransactions(state),
});

export default connect(mapStateToProps)(StatisticsView);
