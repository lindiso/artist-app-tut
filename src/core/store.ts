import { applyMiddleware, createStore } from 'redux';
import rootSaga from './sagas';
import appReducer from '~/core/reducer';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

/* Redux Logger */

const reduxLogger = createLogger({
  collapsed: true,
  level: 'info',
});

/* Redux Sagas */

const sagaMiddleware = createSagaMiddleware();

/* Redux Devtools Configuration */

const options = {};
const composeEnhancers = composeWithDevTools(options);

/* Store Configuration */

const createProdStore = () => {
  return createStore(
    appReducer,
    applyMiddleware(
      sagaMiddleware
    )
  );
};

const createDevStore = () => {
  return createStore(
    appReducer,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
        reduxLogger
      )
    )
  );
};

const configureStore = (isProduction: boolean = false) => {
  const storeTemp = isProduction ? createProdStore() : createDevStore();

  sagaMiddleware.run(rootSaga);

  // @ts-ignore
  if (module.hot) {
    // Enable Webpack hot module replacement for reducer
    // @ts-ignore
    module.hot.accept('../modules', () => {
      const nextRootReducer = require('../modules');
      storeTemp.replaceReducer(nextRootReducer);
    });
  }

  return storeTemp;
};

const isProductionStore: boolean = process.env.NODE_ENV === 'production';
const store = configureStore(isProductionStore);


export default store;
