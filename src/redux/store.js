import { createStore, applyMiddleware } from 'redux';

import { persistStore } from 'redux-persist';

import logger from "redux-logger";

import rootReducer from './root-reducer';

const middlewares = [logger]; // we take an array here because me might want to pass more middlewares later.

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);