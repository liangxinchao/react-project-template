import React, { useMemo, useCallback, useState } from 'react';
import { Menu, Button } from 'antd';
import { withRouter, Link } from 'dva/router'
import { menuList } from '../../utils/constant';
import './index.css';

function getRouteData(list = [], path = '') {
  return list.map(item => {
    return {
      title: item.title,
      id: item.id,
      icon: item.icon,
      path: `${path}/${item.path}`,
      subMenus: item.subMenus?.length > 0 ? getRouteData(item.subMenus, `${path}/${item.path}`) : []
    }
  })
}

const { SubMenu } = Menu;

function LeftMenu(props) {
  const [collapsed, setCollapsed] = useState(false);
  const routeData = getRouteData(menuList);
  const renderMenu = (datas = []) => {
    return datas.map(child => {
      if (child.subMenus?.length > 0) {
        return <SubMenu key={child.id} icon={child.icon ? <child.icon /> : null} title={child.title}>
          {renderMenu(child.subMenus)}
        </SubMenu>
      }
      return <Menu.Item key={child.id}>
        <Link to={child.path}>{child.title}</Link>
      </Menu.Item>
    })
  };
  console.log('renderMenu', renderMenu(routeData))
  return (
    <div className="App">
      <Menu
        defaultSelectedKeys={['dashboard']}
        defaultOpenKeys={['analysis']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        {renderMenu(routeData)}
      </Menu>
    </div>
  );
}

export default withRouter(LeftMenu);
