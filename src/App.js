import React, { Component, lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import * as routes from './constants/routes';
import './css/fonts.css';
import './css/helpers.css';
import './css/global.css';

import { ErrorPage } from './Views';
import { PublicRoute, PrivateRoute } from './common';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Layouts } from './layouts';

const LoginPage = lazy(() => import('./Views/Login'));

const RegPage = lazy(() => import('./Views/Registration'));

const HomePage = lazy(() => import('./Views/HomeView'));

const StatPage = lazy(() => import('./Views/StatisticsView'));

class App extends Component {
  componentDidMount = () => {
    this.props.getCurrentUser();
  };

  render() {
    return (
      <>
        <Suspense
          fallback={
            <Loader type="ThreeDots" color="#6d6d6d" height={80} width={80} />
          }
        >
          <Switch>
            <PublicRoute
              path={routes.LOGIN}
              restricted
              exact
              redirectTo={routes.HOME}
              component={LoginPage}
            />
            <PublicRoute
              path={routes.REGISTER}
              restricted
              exact
              redirectTo={routes.HOME}
              component={RegPage}
            />
            <Layouts>
              <PrivateRoute
                path={routes.STATISTICS}
                redirectTo={routes.LOGIN}
                component={StatPage}
              />

              <PrivateRoute
                path={routes.HOME}
                exact
                redirectTo={routes.LOGIN}
                component={HomePage}
              />
            </Layouts>

            <ErrorPage />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
