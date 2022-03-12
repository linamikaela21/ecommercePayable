import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import persistReducer from '../reducers';
import rootSagas from '../reducers/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.REACT_APP_NODE_ENV === 'development') {
  middlewares.push(logger);
}

const compose = composeWithDevTools(applyMiddleware(...middlewares));
const store = createStore(persistReducer, compose);
const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

const exports = { store, persistor };

export default exports;
