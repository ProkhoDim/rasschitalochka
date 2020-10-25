import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import routes from './routes';
import { ErrorPage } from './pages';
import NavBar from './components/NavBar';
import SvgIcons from './components/NavBar/SvgIcons';

import AppBar from './components/AppBar';
import ModalBtn from './components/ModalBtn';
import SideBar from './components/Sidebar';
import './fonts/fonts.css';
import StatisticsView from './Views/StatisticsView'; //когда будет роутинг удалить

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
        <div className="App">
          <StatisticsView />
          <AppBar />
          <SideBar />
          <ModalBtn />
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
