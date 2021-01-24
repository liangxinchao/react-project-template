import React from 'react';
import ReactDOM from 'react-dom';
import dva from 'dva';
import 'antd/dist/antd.css';
import router from './router';
import initModel from './models/init'
import './utils/flexible';
import './index.css';


const app = dva();
app.model(initModel);
app.router(router);
app.start('#root')

