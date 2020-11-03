import { createAction } from '@reduxjs/toolkit';

const getBankDataRequest = createAction('bankData/getBankDataRequest');
const getBankDataSuccess = createAction('bankData/getBankDataSuccess');
const getBankDataError = createAction('bankData/getBankDataError');

export default {
  getBankDataRequest,
  getBankDataSuccess,
  getBankDataError,
};
