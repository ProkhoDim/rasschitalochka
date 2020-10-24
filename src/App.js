import React from 'react';


import AppBar from './components/AppBar';
import ModalBtn from './components/ModalBtn';
import SideBar from './components/Sidebar';
import './fonts/fonts.css';
import StatisticsView from './views/StatisticsView'; //когда будет роутинг удалить

const App = () => (
  <> 
    <div className="App">
    <StatisticsView />
    <AppBar />
    <SideBar />
    <ModalBtn />
  </div>
  </>
);

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