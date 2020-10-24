import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import routes from './routes';
import { ErrorPage } from './pages';
import NavBar from './components/NavBar';
import SvgIcons from './components/NavBar/SvgIcons';

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
    return (
      <>
        <div className="Container">
          <NavBar children={null} />
          <Switch>
            {/* <PublicRoute
              path={routes.LOGIN}
              restricted
              redirectTo={routes.HOME}
              component={LoginPage}
            />
            <PublicRoute
              path={routes.REGISTER}
              restricted
              redirectTo={routes.HOME}
              component={RegPage}
            />
            <PrivateRoute
              path={routes.STATISTICS}
              redirectTo={routes.LOGIN}
              component={StatisticPage}
            />
            <PrivateRoute
              path={routes.HOME}
              redirectTo={routes.LOGIN}
              component={HomePage}
            /> */}
            <ErrorPage />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
