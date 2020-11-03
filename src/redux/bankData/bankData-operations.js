import axios from 'axios';
import bankDataActions from './bankData-actions';

const {
  getBankDataRequest,
  getBankDataSuccess,
  getBankDataError,
} = bankDataActions;

const PB_API_URL =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

const AXIOS_BANK_INSTANCE = axios.create({
  baseURL: PB_API_URL,
  headers: {},
});

const getBankData = () => async dispatch => {
  dispatch(getBankDataRequest());
  try {
    const { data } = await AXIOS_BANK_INSTANCE.get(PB_API_URL);
    console.log(data);
    if (typeof data === 'string') {
      dispatch(getBankDataSuccess(null));
      return;
    }
    dispatch(getBankDataSuccess(data));
  } catch (e) {
    dispatch(getBankDataError(e));
  }
};

export default { getBankData };
