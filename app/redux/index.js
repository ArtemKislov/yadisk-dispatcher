import React from 'react';
import { Provider } from 'react-redux';
import Router from '../router';
import configureStore from './configureStore';

export const store = configureStore();

const Redux = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default Redux;
