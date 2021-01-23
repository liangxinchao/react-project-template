import { Router, Route, routerRedux, Switch, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
import MainLayout from './components/MainLayout'

const routeConfig = ({ app, history }) => {
  const Analysis = dynamic({
    app,
    models: () => [
      import('./models/dashboard'),
    ],
    component: () => import('./routes/dashboard/Analysis'),
  });
  const Monitor = dynamic({
    app,
    models: () => [
      import('./models/dashboard'),
    ],
    component: () => import('./routes/dashboard/Monitor'),
  });

  return <Router history={history}>
    <MainLayout>
    <Switch>
      <Route exact path="/"
        render={() => <Redirect to="/dashboard/analysis" />}
      />
      <Route exact path="/dashboard/analysis" component={Analysis} ></Route>
      <Route exact path="/dashboard/monitor" component={Monitor} ></Route>

    </Switch>
    </MainLayout>
    
  </Router>
}

export default routeConfig;