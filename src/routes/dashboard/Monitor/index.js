import React, {  useEffect} from 'react'
import { connect } from 'dva';
import Pie from '../../../components/PieChart'
import { pieOption, lineOptions } from '../../../utils/chartOption'
import TopPage from '../../../components/topPage';
import LeftPage from '../../../components/leftPage';
import CenterPage from '../../../components/centerPage';
import RightPage from '../../../components/rightPage';
import { IndexPageStyle, IndexPageContent } from './style';

import './index.css';

function Monitor(props) {
  console.log('dashboard, ', props)
  // useEffect(() => {
  //   props.dispatch({
  //     type: 'dashboard/updateState',
  //     payload: {
  //       hideMenu: true,
  //       hideHeader: true
  //     }
  //   })

  // },[])

  return (
    <IndexPageStyle>

        <TopPage />

 
          <IndexPageContent>
          <LeftPage />
          {/* 中间内容 */}
          <CenterPage className='center-page' />
          {/* 右侧内容 */}
          <RightPage />
</IndexPageContent>
          </IndexPageStyle>
  
  );
}

export default connect(state => {
  return state.dashboard;
})(Monitor);
