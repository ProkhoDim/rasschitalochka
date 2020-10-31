import axios from 'axios';
import authActions from './auth-actions';

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
  dispatch(authActions.registerRequest());

  try {
    const {
      data: { success },
    } = await axios.post('api/register', userData);
    dispatch(authActions.registerSuccess());
    if (success) {
      window.location.assign(window.location.origin + '/login');
    }
    return true;
  } catch (error) {
    dispatch(authActions.registerError(error.response.data));
  }
};

const login = userData => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const res = await axios.post('api/login', userData);
    token.set(res.data.token);
    dispatch(authActions.loginSuccess(res.data));
  } catch (error) {
    dispatch(authActions.loginError(error.response.data));
  }
};

const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error));
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
    dispatch(authActions.getCurrentUserRequest());
    const {
      data: {
        finance: { totalBalance: balance, data },
      },
    } = await axios.get(`api/finance/${id}`);
    dispatch(authActions.getCurrentUserSuccess({ balance, data }));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.response.data));
  }
};

export default {
  logOut,
  getCurrentUser,
  register,
  login,
  token,
};
