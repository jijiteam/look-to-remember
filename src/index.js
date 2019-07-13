/* eslint-disable import/first */
/* eslint-enable allowImportExportEverywhere */
require('dotenv').config();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { applyMiddleware, compose, createStore } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';

import reducer from './reducer';

import(process.env.NODE_ENV === 'development' ? './assets/style/bootstrapDev.scss' : './assets/style/bootstrap.scss');
import './assets/style/animate.scss';
import './index.scss';

import MyStory from './MyStory';

const middleWares = [thunk];
if (process.env.NODE_ENV === 'development') {
  middleWares.push(createLogger());
}

const rootPersistConfig = { key: 'root', storage, whitelist: ['dynamicStory'] };
const persistedReducer = persistReducer(rootPersistConfig, reducer);
const store = createStore(persistedReducer, compose(applyMiddleware(...middleWares)));

const App = () => (
  <Provider store={store}>
    <PersistGate loading="Loading..." persistor={persistStore(store)}>
      <MyStory />
    </PersistGate>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
