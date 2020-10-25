import { connect } from 'react-redux';
import Logo from './Logo';
import logo from './logo.svg';

const mapStateToProps = state => ({
  logo,
});

export default connect(mapStateToProps)(Logo);
