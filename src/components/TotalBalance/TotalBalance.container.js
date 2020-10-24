import { connect } from 'react-redux';
import TotalBalance from './TotalBalance';
import { authSelectors } from '../../redux/auth';

const mapStateToProps = state => ({
  name: authSelectors.getUserBalance(state),
});

export default connect(mapStateToProps)(TotalBalance);
