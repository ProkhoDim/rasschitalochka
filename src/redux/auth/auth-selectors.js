const getIsAuthenticated = state => state.auth.isAuthenticated;

// Review state!!!
const getUsername = state => state.auth.user.name;

const getUserBalance = state => state.totalBalance;

export default {
  getIsAuthenticated,
  getUsername,
  getUserBalance,
};
