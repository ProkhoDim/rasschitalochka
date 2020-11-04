const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUsername = state => state.auth.user.name;

const getIsLoading = state => state.auth.isLoading;

const getError = state => state.auth.error;

const getToken = state => state.auth.token;

export default {
  getIsAuthenticated,
  getUsername,
  getIsLoading,
  getError,
  getToken,
};
