const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUsername = state => state.auth.user.name;

const getIsLoading = state => state.auth.isLoading;

export default {
  getIsAuthenticated,
  getUsername,
  getIsLoading,
};
