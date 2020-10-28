import { connect } from 'react-redux';
import { getTransactionHistory } from '../../../redux/finance/finance-selectors';
import TransferHistoryPcTablet from './TransferHistoryPcTablet';

const mapStateToProps = state => ({
  dataBase: getTransactionHistory(state),
});

export default connect(mapStateToProps)(TransferHistoryPcTablet);
