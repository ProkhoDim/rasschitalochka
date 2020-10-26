import axios from 'axios';
const PB_API_URL =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

const getCurrencyExchangeCourse = async cb => {
  try {
    const { data } = await axios.get(PB_API_URL);
    const filteredData = data.filter(el => el.ccy !== 'BTC');
    return filteredData;
  } catch (e) {
    console.error(e);
  }
};

export default getCurrencyExchangeCourse;
