import React from 'react';
import { requireNativeComponent } from 'react-native';
import PropTypes from 'prop-types';

const NativeLineChart = requireNativeComponent('NativeLineChart', LineChart);

class LineChart extends React.Component {
  static propTypes = {
    /**
     * The data source of this chart, 
     * it is just a double array for my use case
     */
    chartData: PropTypes.array,
    /**
     * The legend label
     */
    legendLabel: PropTypes.string,
    /**
     * It adjusts the colour of labels
     */
    darkMode: PropTypes.bool,
    /**
     * The main theme colour of the chart
     * - if you pass 'white', it won't work
     * - Only accpects hex format
     */
    themeColor: PropTypes.string
  };

  render() {
    return <NativeLineChart {...this.props} />;
  }
}

export default LineChart;
