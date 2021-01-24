import React, {Component} from 'react';
import * as echarts from 'echarts'
import { withRouter } from 'dva/router';
// import 'echarts/lib/chart/pie'
// import 'echarts/lib/component/title'
// import 'echarts/lib/component/toolbox'
import './index.css';

class ReactEcharts extends Component {
  componentDidMount() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById(this.props.id));
      // 绘制图表
      this.myChart = myChart;
      console.log('mychart', this.props.option)
      this.props.option && myChart.setOption(this.props.option)
  }
  render() {
    const { height, width } = this.props;
      return (
          <div id={this.props.id} style={{ width: width || 200, height: height || 200 }}></div>
      );
  }
}

export default ReactEcharts;
