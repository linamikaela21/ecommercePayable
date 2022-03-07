import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import persistReducer from '../reducers';

const compose = composeWithDevTools(applyMiddleware(thunk, logger));
const store = createStore(persistReducer, compose);
const persistor = persistStore(store);

const exports = { store, persistor };

export default exports;
