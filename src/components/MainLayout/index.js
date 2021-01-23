import { withRouter } from 'dva/router';
import LeftMenus from '../LeftMenus';
import Header from '../Header'
import './index.css';

function MainLayout(props) {
  return (
    <div className="layout">
      <div className="leftContent">
        <LeftMenus />
      </div>
      <div className="rightContent">
        <Header />
        <div className="mainContent">{props.children}</div>
      </div>

    </div>
  );
}

export default withRouter(MainLayout);
