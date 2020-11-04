import axios from 'axios';

const PB_API_URL =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

const AXIOS_BANK_INSTANCE = axios.create({
  baseURL: PB_API_URL,
  headers: {},
});

export default AXIOS_BANK_INSTANCE;
