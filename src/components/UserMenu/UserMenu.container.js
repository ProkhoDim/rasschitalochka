import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import UserMenu from './UserMenu';
import logoutBtn from './logoutBtn.svg';

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  logoutBtn,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
