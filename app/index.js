// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { FocusStyleManager } from '@blueprintjs/core';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.scss';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

FocusStyleManager.onlyShowFocusOnTabs();

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
