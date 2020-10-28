import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from './routes';
import './css/global.css';
import './css/fonts.css';

import {
  HomeView,
  LoginView,
  RegView,
  StatisticsView,
  ErrorPage,
} from './views';
import {
  AppBar,
  CurrencyExchange,
  NavBar,
  Sidebar,
  TotalBalance,
} from './components';
import Media from './common/Media';
import { PublicRoute, PrivateRoute } from './common';
import { authOperations, authSelectors } from './redux/auth';
import { connect } from 'react-redux';
import IncomeMobile from './components/AddIncome/IncomeMobile';
import CostMobile from './components/AddCost/CostMobile';

class App extends Component {
  componentDidMount = () => {
    this.props.getCurrentUser();
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
                  <Route
                    path={routes.STATISTICS}
                    exact
                    component={StatisticsView}
                  />
                  <Route path={routes.HOME} exact component={HomeView} />
                  <Route
                    path={routes.ADDINCOME}
                    exact
                    component={IncomeMobile}
                  />
                  <Route path={routes.ADDCOST} exact component={CostMobile} />
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

const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

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
