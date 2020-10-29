import React, { Component, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from './routes';
import './css/global.css';
import './css/fonts.css';

import { ErrorPage } from './views';
import {
  AppBar,
  CurrencyExchange,
  NavBar,
  Sidebar,
  TotalBalance,
  IncomeMobile,
  CostMobile,
} from './components';
import Media from './common/Media';
import { PublicRoute, PrivateRoute } from './common';
import { authOperations, authSelectors } from './redux/auth';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

const HomePage = lazy(() => import('./views/HomeView'));

const LoginPage = lazy(() => import('./views/Login'));

const RegPage = lazy(() => import('./views/Registration'));

const StatPage = lazy(() => import('./views/StatisticsView'));

class App extends Component {
  componentDidMount = () => {
    this.props.getCurrentUser();
  };

  render() {
    const { isAuthenticated } = this.props;
    return (
      <>
        <Switch>
          <Suspense
            fallback={
              <Loader type="ThreeDots" color="#6d6d6d" height={80} width={80} />
            }
          >
            <PublicRoute
              path={routes.LOGIN}
              restricted
              redirectTo={routes.HOME}
            >
              <LoginPage />
            </PublicRoute>
            <PublicRoute
              path={routes.REGISTER}
              restricted
              redirectTo={routes.HOME}
            >
              <RegPage />
            </PublicRoute>
          </Suspense>
          {isAuthenticated && (
            <>
              <AppBar />
              <div className="page_wrap">
                <Media device="desktop">
                  <div className="aside_container">
                    <NavBar />
                    <Sidebar />
                    <CurrencyExchange />
                  </div>
                </Media>
                <Media device="onlyTablet">
                  <NavBar children={<TotalBalance />} />
                </Media>
                <Media device="mobile">
                  <Route
                    path={[routes.HOME, routes.STATISTICS, routes.CURRENCY]}
                    exact
                  >
                    <NavBar />
                  </Route>
                  <Suspense
                    fallback={
                      <Loader
                        type="ThreeDots"
                        color="#6d6d6d"
                        height={80}
                        width={80}
                      />
                    }
                  >
                    <Route path={routes.HOME} exact>
                      <HomePage />
                    </Route>
                    <Route path={routes.STATISTICS} exact>
                      <StatPage />
                    </Route>
                  </Suspense>
                  <Route
                    path={routes.CURRENCY}
                    exact
                    component={CurrencyExchange}
                  />
                  <Route
                    path={routes.ADDINCOME}
                    exact
                    component={IncomeMobile}
                  />
                  <Route path={routes.ADDCOST} exact component={CostMobile} />
                </Media>
                <Media device="fromTablet">
                  <Suspense
                    fallback={
                      <Loader
                        type="ThreeDots"
                        color="#6d6d6d"
                        height={80}
                        width={80}
                      />
                    }
                  >
                    <Route path={routes.HOME} exact>
                      <HomePage />
                    </Route>
                    <Route path={routes.STATISTICS} exact>
                      <StatPage />
                    </Route>
                  </Suspense>
                  <Redirect to={routes.HOME} />
                </Media>
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
