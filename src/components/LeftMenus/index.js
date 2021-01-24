import React, { useMemo, useEffect, useCallback, useState } from 'react';
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
function getOpenKeys(list = []) {
  const getList = list.reduce((pre, next) => {
    pre.push(`${pre.slice(pre.length - 1, pre.length)}/${next}`)
    return pre
  }, [])
  return getList.slice(0, getList.length - 1)
}

const { SubMenu } = Menu;

function LeftMenu(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setKeys] = useState([]);
  const [openKeys, setOpenKeys] = useState([]);

  const routeData = getRouteData(menuList);
  const renderMenu = (datas = []) => {
    return datas.map(child => {
      if (child.subMenus?.length > 0) {
        return <SubMenu key={child.path} icon={child.icon ? <child.icon /> : null} title={child.title}>
          {renderMenu(child.subMenus)}
        </SubMenu>
      }
      return <Menu.Item key={child.path}>
        <Link to={child.path}>{child.title}</Link>
      </Menu.Item>
    })
  };
  useEffect(() => {
    // const
    console.log('props-menu', props.history);
    props.history.listen((location) => {
      const { pathname } = location;
      const [, ...arr] = pathname.split('/')//.map(item => `/${item}`);
      const openKeysData = getOpenKeys(arr);
      console.log('arr', arr);
      console.log('openKeysData', openKeysData)
      setKeys([pathname]);
      setOpenKeys(openKeysData)
    })
  }, [])
  const onMenuItemClick = useCallback(({ key }) => {
    console.log('key', key)
    setKeys([key])

  },[])
  console.log('renderMenu', renderMenu(routeData))
  return (
    <div className="App">
      <Menu
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        onClick={onMenuItemClick}
        onOpenChange={useCallback((keys) => setOpenKeys(keys))}
      >
        {renderMenu(routeData)}
      </Menu>
    </div>
  );
}

export default withRouter(LeftMenu);
