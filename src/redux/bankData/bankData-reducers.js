import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import bankDataActions from './bankData-actions';

const {
  getBankDataRequest,
  getBankDataSuccess,
  getBankDataError,
} = bankDataActions;

const data = createReducer(null, {
  [getBankDataSuccess]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [getBankDataError]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [getBankDataRequest]: () => true,
  [getBankDataSuccess]: () => false,
  [getBankDataError]: () => false,
});

export default combineReducers({
  data,
  error,
  isLoading,
});
