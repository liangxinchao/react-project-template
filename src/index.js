import React from 'react';
import ReactDOM from 'react-dom';
import dva from 'dva';
import 'antd/dist/antd.css';
import './index.css';
import router from './router';
import initModel from './models/init'

const app = dva();
app.model(initModel);
app.router(router);
app.start('#root')

