const PB_API_URL =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

const getCurrencyExchangeCourse = async () => {
  try {
    const response = await fetch(PB_API_URL);
    const data = await response.json();
    const filteredData = data.filter(el => el.ccy !== 'BTC');
    return filteredData;
  } catch (e) {
    console.error(e);
  }
};

export default getCurrencyExchangeCourse;
