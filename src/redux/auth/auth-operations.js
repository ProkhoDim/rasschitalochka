import axios from 'axios';
import {
  getError,
  registerRequest,
  registerSuccess,
  loginRequest,
  loginSuccess,
  logoutSuccess,
  logoutRequest,
  getCurrentUserRequest,
  getCurrentUserSuccess,
} from './auth-actions';

axios.defaults.baseURL = 'https://raschitalochka.goit.co.ua/';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = userData => async dispatch => {
  dispatch(registerRequest());

  try {
    await axios.post('api/register', userData);
    dispatch(registerSuccess());
    return true;
  } catch (error) {
    dispatch(getError(error.response.data));
  }
};

const login = userData => async dispatch => {
  dispatch(loginRequest());

  try {
    const res = await axios.post('api/login', userData);
    token.set(res.data.token);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(getError(error.response.data));
  }
};

const logOut = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(getError(error));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: {
      token: persistedToken,
      user: { id },
    },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  try {
    dispatch(getCurrentUserRequest());
    const {
      data: {
        finance: { totalBalance: balance, data },
      },
    } = await axios.get(`api/finance/${id}`);
    dispatch(getCurrentUserSuccess({ balance, data }));
  } catch (error) {
    dispatch(getError(error.response.data));
  }
};

export default {
  logOut,
  getCurrentUser,
  register,
  login,
  token,
};
