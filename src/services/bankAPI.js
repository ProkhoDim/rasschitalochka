import axios from 'axios';
const PB_API_URL =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

const AXIOS_BANK_INSTANCE = axios.create({
  baseURL: PB_API_URL,
  headers: {},
});
const getCurrencyExchangeCourse = async () => {
  try {
    const response = await AXIOS_BANK_INSTANCE.get(PB_API_URL);
    const data = response.data;
    const filteredData = data.filter(el => el.ccy !== 'BTC');
    return filteredData;
  } catch (e) {
    console.error(e);
  }
};

// const getCurrencyExchangeCourse = async () => {
//   try {
//     const response = await fetch(PB_API_URL);
//     const data = await response.json();
//     const filteredData = data.filter(el => el.ccy !== 'BTC');
//     return filteredData;
//   } catch (e) {
//     console.error(e);
//   }
// };

export default getCurrencyExchangeCourse;
