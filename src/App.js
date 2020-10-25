import React from 'react';
import AppBar from './components/AppBar';
import ModalBtn from './components/ModalBtn';
import SideBar from './components/Sidebar';

const App = () => (
  <>
    <AppBar />
    <SideBar />
    <ModalBtn />
  </>
);

export default App;

// import React, { useState, useEffect } from 'react';
// import CurrencyExchange from './components/CurrencyExchange';
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
