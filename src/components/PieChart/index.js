import React from 'react';
import { withRouter } from 'dva/router';
import { pieOption } from '../../utils/chartOption'
import ReactCharts from '../ReactEcharts'
import './index.css';

class PieChart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pieOption,
    };
  }
  
  render() {
    return (
      <div className="pieChart">
        <ReactCharts   {...this.props} />
      </div>
    );
  }

}

export default PieChart;
