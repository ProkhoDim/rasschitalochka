import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import ModalBtn from './ModalBtn';

// this operations didn`t exist yet!!!
// const mapDispatchToProps = {
//   onAddIncomeBtnClick: authOperations.addIncome,
//   onAddCostBtnClick: authOperations.addCost,
// };

export default connect()(ModalBtn);
