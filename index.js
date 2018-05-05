import React from 'react';
import { AppRegistry } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reducer from './app/data/redux/reducer';
import App from './app/ui/App';

function configureStore() {
  if (process.env.NODE_ENV) {
    // Add Reactotron
    Reactotron
      .configure({
        name: 'Todo List',
      })
      .useReactNative()
      .use(reactotronRedux()) // add reactotron redux
      .connect(); // let's connect!

    return Reactotron.createStore(reducer, {}, compose(applyMiddleware()));
  }
  return createStore(reducer);
}

const store = configureStore();

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

Reactotron.log('Stupid thing does not work with createStore(reducer), needs 3 arguments');

AppRegistry.registerComponent('ToDoList', () => AppWithStore);
