// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import normalizrMiddleware from 'redux-normalizr-middleware';
import rootReducer from '../reducers';

const router = routerMiddleware(hashHistory);

const normalizr = normalizrMiddleware();

const enhancer = applyMiddleware(thunk, router, normalizr);

export default function configureStore(initialState: Object) {
  return createStore(rootReducer, initialState, enhancer);
}
