import React, { Component } from 'react';
import { connect } from 'react-redux';
import Media from '../../common/Media';
import {
  CurrencyExchange,
  ModalBtn,
  TotalBalance,
  TransferMobile,
  TransferPcTablet,
} from '../../components';
import { financeOperation, financeSelectors } from '../../redux/finance';

class HomeView extends Component {
  componentDidMount() {
    const { transactionHistory } = this.props;
    const isTransactionHistoryExist = transactionHistory.length > 0;
    if (!isTransactionHistoryExist) {
      this.props.getFinance();
    }
  }
  render() {
    return (
      <>
        <div className="main_container main_container__table">
          <Media children={<TotalBalance />} device="mobile" />

          <ModalBtn />
          <Media device="mobile">
            <TransferMobile />
          </Media>
          <Media device="fromTablet">
            <TransferPcTablet />
          </Media>
        </div>
        <Media children={<CurrencyExchange />} device="onlyTablet" />
      </>
    );
  }
}

const mapStateToProps = state => ({
  transactionHistory: financeSelectors.getTransactionHistory(state),
});

const mapDispatchToProps = dispatch => ({
  getFinance: () => dispatch(financeOperation.getFinance()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
