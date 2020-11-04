import React, { Component } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { financeSelectors } from '../../redux/finance';
import StatComponent from './StatisticsView';

class StatisticsView extends Component {
  static propTypes = {
    data: T.array.isRequired,
  };

  state = {
    data: [],
  };

  componentDidMount() {
    const { data } = this.props;
    this.setState({ data });
  }

  updateDiagram = () => {
    const { data } = this.props;
    this.setState({ data });
  };

  render() {
    const { data } = this.state;
    return (
      <StatComponent
        data={data}
        handleChange={this.handleChange}
        updateDiagram={this.updateDiagram}
      />
    );
  }
}

const mapStateToProps = state => ({
  data: financeSelectors.getDataTransactionsForRender(state),
});

export default connect(mapStateToProps)(StatisticsView);
