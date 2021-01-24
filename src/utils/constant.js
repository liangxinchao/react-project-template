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
  },
  {
    title: '列表页',
    id: 'list',
    path: 'list',

    icon: AppstoreOutlined,
    subMenus: [
      {
        title: '搜索列表',
        id: 'search',
        path: 'search',
        icon: '',
        subMenus: [
          {
            title: '搜索列表(文章)',
            id: 'articles',
            path: 'articles',
            icon: '',
          },
          {
            title: '搜索列表(项目)',
            id: 'projects',
            path: 'projects',
            icon: '',
          }
        ]
      },
      {
        title: '查询表格',
        id: 'table-list',
        path: 'table-list',
        icon: '',
      }
    ]
  },
  {
    title: '表单页',
    id: 'form',
    path: 'form',

    icon: AppstoreOutlined,
    subMenus: [
      {
        title: '基础表单',
        id: 'basic-form',
        path: 'basic-form',
        icon: '',
      },
      {
        title: '分步表单',
        id: 'step-form',
        path: 'step-form',
        icon: '',
      }
    ]
  }
];
