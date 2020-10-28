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
    await axios.post('api/register', userData);
    dispatch(authActions.registerSuccess());
  } catch (error) {
    dispatch(authActions.registerError(error));
  }
};

const login = userData => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const res = await axios.post('api/login', userData);
    token.set(res.data.token);
    dispatch(authActions.loginSuccess(res.data));
  } catch (error) {
    dispatch(authActions.loginError(error));
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
    auth: { token: persistedToken, id },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  try {
    dispatch(authActions.getCurrentUserRequest());
    const {
      data: {
        finance: { totalBalance, data },
      },
    } = await axios.get(`api/finance/${id}`);
    dispatch(authActions.getCurrentUserSuccess({ totalBalance, data }));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error));
  }
};

export default {
  logOut,
  getCurrentUser,
  register,
  login,
  token,
};
