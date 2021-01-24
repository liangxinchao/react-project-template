import React, { useState, useEffect} from 'react'
import { withRouter } from 'dva/router';
import { connect } from 'dva';

import LeftMenus from '../LeftMenus';
import Header from '../Header'
import './index.css';

function MainLayout(props) {
  const [hideMenu, setMenu] = useState(false)
  const [hideHeader, setHeader] = useState(false);

  useEffect(() => {
    // const
    console.log('props-menu', props.history);
    props.history.listen((location) => {
      const { pathname } = location;
      const flag = pathname === '/dashboard/monitor';
      setHeader(flag);
      setMenu(flag)
      // if (pathname === '/dashboard/monitor') {
      //   setHeader()
      // }
    })
  }, [])
  return (
    <div className="layout">
      {!hideMenu && <div className="leftContent">
        <div className="left-top">
          <span>我的项目</span>
          </div>
        <LeftMenus />
      </div>}
      <div className="rightContent">
        {!hideHeader && <Header />}
        <div className="mainContent">{props.children}</div>
      </div>
    </div>
  );
}

export default (withRouter(connect(
  state => {
    return state.dashboard;
  }
)(MainLayout)));
