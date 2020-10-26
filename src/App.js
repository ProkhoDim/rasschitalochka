import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from './routes';
import { ErrorPage } from './pages';
import './css/global.css';
import './css/fonts.css';

import { HomeView, LoginView, RegView, StatView } from './Views';
import {
  AddCost,
  AddIncome,
  AppBar,
  CurrencyExchange,
  NavBar,
  Sidebar,
  TotalBalance,
} from './components';
import Media from './common/Media';
import { PublicRoute, PrivateRoute } from './common';
import { authSelectors } from './redux/auth';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount = () => {
    // this.props.onLoad('5f913cad9043240c96228636');
    // console.log('done');
    // this.props.onSubmit('5f913cad9043240c96228636', {
    //   date: Date.now(),
    //   type: '+',
    //   category: 'Job',
    //   amount: 2000,
    //   balanceAfter: 15000,
    //   comments: 'get money by my Job',
    //   typeBalanceAfter: '-',
    // });
  };

  render() {
    const { isAuthenticated } = this.props;
    return (
      <>
        <Switch>
          <PublicRoute
            path={routes.LOGIN}
            restricted
            redirectTo={routes.HOME}
            component={LoginView}
          />
          <PublicRoute
            path={routes.REGISTER}
            restricted
            redirectTo={routes.HOME}
            component={RegView}
          />

          {isAuthenticated && (
            <>
              <div className="Container">
                <AppBar />
                <div className="page_wrap">
                  <div className="aside_container">
                    <NavBar children={<TotalBalance />} />
                    <Media children={<Sidebar />} device="desktop" />
                    <Media children={<CurrencyExchange />} device="desktop" />
                  </div>
                  <Route path={routes.STATISTICS} component={StatView} />
                  <Route path={routes.HOME} exact component={HomeView} />
                  <Media
                    children={
                      <Route
                        path={routes.CURRENCY}
                        component={CurrencyExchange}
                      />
                    }
                    device="mobile"
                  />

                  <Media device="fromTablet">
                    <Redirect to={routes.HOME} from={routes.CURRENCY} />
                  </Media>
                </div>
              </div>
            </>
          )}
          <PrivateRoute path={routes.STATISTICS} redirectTo={routes.LOGIN} />
          <PrivateRoute path={routes.HOME} redirectTo={routes.LOGIN} />
          <ErrorPage />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(App);

// import React, { useState, useEffect } from 'react';
// import CurrencyExchange from './Components/CurrencyExchange';
// import getCurrencyExchangeCourse from './services/bankAPI';

// function App() {
//   const [bankData, setBankData] = useState(null);

//   useEffect(() => {
//     const getBankData = async () => {
//       const data = await getCurrencyExchangeCourse();
//       const filteredData = data.filter(el => el.ccy !== 'BTC');
//       return setBankData(filteredData);
//     };
//     getBankData();
//   }, []);

//   return (
//     <div className="App">
//       {bankData && <CurrencyExchange data={bankData} />}
//     </div>
//   );
// }
