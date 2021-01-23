import { withRouter } from 'dva/router';
import { PageHeader, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './index.css';
const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

function Header(props) {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>)
  return (
    <div className="header">
      <PageHeader
        className="site-page-header"
        title=""
        // breadcrumb={{ routes }}
        subTitle=""
        extra={[
          <Dropdown overlay={menu}>
            <span className="ant-dropdown-link1" onClick={e => e.preventDefault()}>
              梁新朝
    </span>
          </Dropdown>
        ]}
      />
    </div>
  );
}

export default withRouter(Header);
