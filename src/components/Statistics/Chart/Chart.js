import React from 'react';
import T from 'prop-types';
import ChartWrapper from '../ChartWrapper';
import { VictoryPie } from 'victory';

const styles = {
  data: {
    stroke: '#fff',
    strokeWidth: 1,
    fill: ({ datum }) => datum.fill,
  },
  labels: {
    fontSize: 13,
    fill: '#fff',
    labelRadius: 60,
  },
};

const Chart = ({ data }) => {
  return (
    <ChartWrapper>
      <VictoryPie
        x="category"
        y="amount"
        data={data}
        style={styles}
        labelRadius={60}
        labelPlacement="parallel"
        padding={{ top: 0, bottom: 30, left: 0, right: 0 }}
      />
    </ChartWrapper>
  );
};

Chart.propTypes = {
  data: T.array.isRequired,
};

export default Chart;
