import axios_bank_instance from '../../services/axios_bank_instance';
import bankDataActions from './bankData-actions';

const {
  getBankDataRequest,
  getBankDataSuccess,
  getBankDataError,
} = bankDataActions;

const getBankData = () => async dispatch => {
  dispatch(getBankDataRequest());
  try {
    const { data } = await axios_bank_instance.get();

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
