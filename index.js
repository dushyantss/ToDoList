import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './app/data/redux/reducer';
import App from './app/App';

const store = createStore(reducer);

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('ToDoList', () => AppWithStore);
