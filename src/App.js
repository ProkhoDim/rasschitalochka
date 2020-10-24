import React, { useState, useEffect } from 'react';
import CurrencyExchange from './Components/CurrencyExchange';
import getCurrencyExchangeCourse from './services/bankAPI';

function App() {
  const [bankData, setBankData] = useState(null);

  useEffect(() => {
    const getBankData = async () => {
      const data = await getCurrencyExchangeCourse();
      const filteredData = data.filter(el => el.ccy !== 'BTC');
      return setBankData(filteredData);
    };
    getBankData();
  }, []);

  return (
    <div className="App">
      {bankData && <CurrencyExchange data={bankData} />}
    </div>
  );
}

export default App;
