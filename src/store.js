/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';

import dataSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

let storeRef = null;

export function getStore() {
  return storeRef;
}

// For Redux DevTools: https://github.com/zalmoxisus/redux-devtools-extension#usage
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ name: 'ZyloInterview'})
    : compose;

export default(initialState) => {
  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  storeRef = store;
  sagaMiddleware.run(dataSaga);
  return store;
};
