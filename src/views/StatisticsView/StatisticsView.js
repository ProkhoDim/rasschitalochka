import React from 'react';
import T from 'prop-types';
import styles from './Statistics.module.css';
import Chart from '../../components/Statistics/Chart';
import Legend from '../../components/Statistics/Legend';
import ChartSelection from '../../components/Statistics/ChartSelection';
// import UpdateChartBtn from '../../components/Statistics/UpdateChartBtn';
import Total from '../../components/Statistics/Total';

const StatComponent = ({ data, updateDiagram }) => {
  return (
    <>
      <section>
        <div className={styles.Statistics + ' main_container'}>
          <h2 className={styles.Title}>Cost Diagram</h2>
          <div className={styles.Wrapper}>
            <div className={styles.Chart}>
              <Chart data={data} />
            </div>
            <div className={styles.Data}>
              <ChartSelection updateDiagram={updateDiagram} />
              <Legend data={data} />
              <Total />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

StatComponent.propTypes = {
  data: T.array.isRequired,
};

export default StatComponent;
