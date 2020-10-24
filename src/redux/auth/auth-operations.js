import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://raschitalochka.goit.co.ua/';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

// const register = userData => async dispatch => {
//   dispatch(authActions.registerRequest());

//   try {
//     const response = await axios.post('/users/signup', userData);
//     token.set(response.data.token)
//     dispatch(authActions.registerSuccess(response.data));
//   } catch (error) {
//     dispatch(authActions.registerError(error));
//   }
// }

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

// const getCurrentUser = () => async (dispatch, getState) => {
//   const { auth: { token: persistedToken } } = getState();

//   if (!persistedToken) {
//     return
//   }

//   token.set(persistedToken)
//   dispatch(authActions.getCurrentUserRequest())

//   try {
//     const response = await axios.get('/users/current')

//     dispatch(authActions.getCurrentUserSuccess(response.data))
//   } catch (error) {
//     dispatch(authActions.getCurrentUserError(error))
//   }
// }

export default {
  // register,
  login,
  // token,
  // getCurrentUser
};
