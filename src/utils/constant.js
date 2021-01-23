import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
export const menuList = [
  {
    title: 'Dashboard',
    id: 'dashboard',
    path: 'dashboard',

    icon: AppstoreOutlined,
    subMenus: [
      {
        title: '分析页',
        id: 'analysis',
        path: 'analysis',

        icon: '',
      },
      {
        title: '监控页',
        id: 'monitor',
        path: 'monitor',
        icon: '',
      }
    ]
  }
];
