import { connect } from 'react-redux';
import TotalBalance from './TotalBalance';
import { financeSelectors } from '../../redux/finance';

const mapStateToProps = state => ({
  balance: financeSelectors.getTotalBalance(state),
});

export default connect(mapStateToProps)(TotalBalance);
