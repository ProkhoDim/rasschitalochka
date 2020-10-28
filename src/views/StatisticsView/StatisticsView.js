import React from 'react';
import styles from './Statistics.module.css';
import Chart from '../../components/Statistics/Chart';
import Legend from '../../components/Statistics/Legend';
import ChartSelection from '../../components/Statistics/ChartSelection';
import UpdateChartBtn from '../../components/Statistics/UpdateChartBtn';
import Total from '../../components/Statistics/Total';
const data = [
  { category: 'Main Expenses', amount: 8700, fill: '#ecb22a' },
  { category: 'Food', amount: 3800, fill: '#e28b20' },
  { category: 'Car', amount: 1500, fill: '#d25925' },
  { category: 'Self Care', amount: 800, fill: '#67b7d0' },
  { category: 'Ghild Care', amount: 2208, fill: '#5593d7' },
  { category: 'House Products', amount: 300, fill: '#3e6ba8' },
  { category: 'Education', amount: 3400, fill: '#9cc254' },
  { category: 'Entertainment', amount: 1230, fill: '#73ad57' },
  { category: 'Othe Expenses', amount: 610, fill: '#507c3a' },
];

const StatisticsView = () => {
  return (
    <>
      <section>
        <div className={styles.Statistics + ' main_container'}>
          {/* добавить рендер по условию от 768px */}
          <h2 className={styles.Title}>Cost Diagram</h2>
          <div className={styles.Wrapper}>
            <div className={styles.Chart}>
              <Chart data={data} />
              <UpdateChartBtn />
            </div>
            <div className={styles.Data}>
              <ChartSelection />
              <Legend />
              <Total />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatisticsView;
