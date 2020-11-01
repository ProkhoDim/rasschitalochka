import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import UserMenu from './UserMenu';

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
