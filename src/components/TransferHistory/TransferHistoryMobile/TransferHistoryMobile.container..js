import { connect } from 'react-redux';
import { getTransactionHistory } from '../../../redux/finance/finance-selectors';
import TransferHistoryMobile from './TransferHistoryMobile';

const mapStateToProps = state => ({
  dataBase: getTransactionHistory(state),
});

export default connect(mapStateToProps)(TransferHistoryMobile);
