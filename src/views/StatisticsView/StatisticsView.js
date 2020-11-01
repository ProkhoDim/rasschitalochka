import React from 'react';
import T from 'prop-types';
import styles from './Statistics.module.css';
import Chart from '../../components/Statistics/Chart';
import Legend from '../../components/Statistics/Legend';
import ChartSelection from '../../components/Statistics/ChartSelection';
// import UpdateChartBtn from '../../components/Statistics/UpdateChartBtn';
import Total from '../../components/Statistics/Total';

const StatComponent = ({ data, updateDiagram, totalCostCalculated }) => {
  return (
    <>
      <section>
        <div className={styles.Statistics + ' main_container'}>
          <h2 className={styles.Title}>Cost Diagram</h2>
          <div className={styles.Wrapper}>
            <div className={styles.Chart}>
              <Chart
                data={
                  data.length === 0
                    ? [
                        {
                          amount: 999,
                          category: 'No Costs in this period',
                          fill: 'gray',
                          id: 'NOcosts',
                        },
                      ]
                    : data
                }
              />
            </div>
            <div className={styles.Data}>
              <ChartSelection updateDiagram={updateDiagram} />
              <Legend data={data} />
              <Total totalCostByParameter={totalCostCalculated} />
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
