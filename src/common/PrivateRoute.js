import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { authSelectors } from '../redux/authorization';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuth(state),
// });

// export default connect(mapStateToProps)(PrivateRoute);
