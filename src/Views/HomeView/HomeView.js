import React, { Component } from 'react';
import Media from '../../common/Media';
import {
  CurrencyExchange,
  ModalBtn,
  Sidebar,
  TransferMobile,
  TransferPcTablet,
} from '../../components';
import DB from '../../components/TransferHistory/data/transactions.json';

class HomeView extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="main_container main_container__table">
          <Media children={<Sidebar />} device="mobile" />

          <ModalBtn />
          <Media device="mobile">
            <TransferMobile dataBase={DB} />
          </Media>
          <Media device="desktop">
            <TransferPcTablet dataBase={DB} />
          </Media>
          <Media device="tablet">
            <TransferPcTablet dataBase={DB} />
          </Media>
        </div>
        <Media children={<CurrencyExchange />} device="tablet" />
      </>
    );
  }
}

export default HomeView;
