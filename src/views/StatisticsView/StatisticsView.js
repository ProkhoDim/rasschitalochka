import React from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { financeSelectors } from '../../redux/finance';
import styles from './Statistics.module.css';
import Chart from '../../components/Statistics/Chart';
import Legend from '../../components/Statistics/Legend';
import ChartSelection from '../../components/Statistics/ChartSelection';
import UpdateChartBtn from '../../components/Statistics/UpdateChartBtn';
import Total from '../../components/Statistics/Total';

const StatisticsView = ({ data }) => {
  return (
    <>
      <section>
        <div className={styles.Statistics + ' main_container'}>
          <h2 className={styles.Title}>Cost Diagram</h2>
          <div className={styles.Wrapper}>
            <div className={styles.Chart}>
              <Chart data={data} />
              <UpdateChartBtn />
            </div>
            <div className={styles.Data}>
              <ChartSelection />
              <Legend data={data} />
              <Total />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

StatisticsView.propTypes = {
  data: T.array.isRequired,
};

const mapStateToProps = state => ({
  data: financeSelectors.getDataTransactionsForRender(state),
});
export default connect(mapStateToProps)(StatisticsView);
