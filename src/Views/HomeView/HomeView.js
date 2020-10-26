import React, { Component } from 'react';
import Media from '../../common/Media';
import { CurrencyExchange, ModalBtn, Sidebar } from '../../components';

class HomeView extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="main_container">
          <Media children={<Sidebar />} device="mobile" />

          <ModalBtn />
        </div>
        <Media children={<CurrencyExchange />} device="tablet" />
      </>
    );
  }
}

export default HomeView;
