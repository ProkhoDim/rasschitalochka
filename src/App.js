import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import { ErrorPage } from './pages';
import './fonts/fonts.css';
import { HomeView, StatView } from './Views';
import {
  AppBar,
  CurrencyExchange,
  NavBar,
  Sidebar,
  TotalBalance,
} from './components';
import Media from './common/Media';

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
          <AppBar />
          <NavBar children={<TotalBalance />} />
          <Media children={<Sidebar />} device="mobile" />
          <Media children={<Sidebar />} device="desktop" />
          <Media children={<CurrencyExchange />} device="tablet" />
          <Media children={<CurrencyExchange />} device="desktop" />

          <Switch>
            <Route exact path={routes.HOME} component={HomeView} />
            <Route exact path={routes.STATISTICS} component={StatView} />

            <Media
              children={
                <Route
                  exact
                  path={routes.CURRENCY}
                  component={CurrencyExchange}
                />
              }
              device="mobile"
            />

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
          </Switch>
        </div>
      </>
    );
  }
}

export default App;

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
