import axios from 'axios';
const PB_API_URL =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

const getCurrencyExchangeCourse = async cb => {
  try {
    return await axios.get(PB_API_URL).then(res => res.data);
  } catch (e) {
    console.error(e);
  }
};

export default getCurrencyExchangeCourse;
