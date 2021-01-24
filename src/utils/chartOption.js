export const lineOptions = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件营销', '联盟广告', ]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
    ]
};


export const pieOption = {
  darkMode: true,
  backroundColor: '#100C2A',
  title: {
      text: '',
      subtext: '',
      left: 'center'
  },
  tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
      left: 'center',
      top: 'bottom',
      data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
  },
  toolbox: {
      show: true,
      feature: {
          mark: {show: true},
          // dataView: {show: true, readOnly: false},
          // restore: {show: true},
          // saveAsImage: {show: true}
      }
  },
  series: [
      {
          name: '半径模式',
          type: 'pie',
          radius:'50%',
          center: '50%',
          // roseType: 'radius',
          itemStyle: {
              borderRadius: 5
          },
          label: {
              show: false
          },
          emphasis: {
              label: {
                  show: true
              }
          },
          data: [
              {value: 40, name: 'rose 1'},
              {value: 33, name: 'rose 2'},
              {value: 28, name: 'rose 3'},
              {value: 22, name: 'rose 4'},
              
          ]
      },
      // {
      //     name: '面积模式',
      //     type: 'pie',
      //     radius: [20, 140],
      //     center: ['75%', '50%'],
      //     roseType: 'area',
      //     itemStyle: {
      //         borderRadius: 5
      //     },
      //     data: [
      //         {value: 30, name: 'rose 1'},
      //         {value: 28, name: 'rose 2'},
      //         {value: 26, name: 'rose 3'},
      //         {value: 24, name: 'rose 4'},
      //         {value: 22, name: 'rose 5'},
      //         {value: 20, name: 'rose 6'},
      //         {value: 18, name: 'rose 7'},
      //         {value: 16, name: 'rose 8'}
      //     ]
      // }
  ]
};