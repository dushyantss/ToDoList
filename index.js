import React from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reducer, { storageKeys } from './app/data/redux/reducer';
import App from './app/ui/App';

function setup(initialState) {
  function configureStore() {
    if (process.env.NODE_ENV === 'development') {
      // Add Reactotron
      Reactotron
        .configure({
          name: 'Todo List',
        })
        .useReactNative()
        .use(reactotronRedux()) // add reactotron redux
        .connect(); // let's connect!

      return Reactotron.createStore(reducer, initialState, compose(applyMiddleware()));
    }
    return createStore(reducer, initialState);
  }

  const store = configureStore();

  const AppWithStore = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

  Reactotron.log('Stupid thing does not work with createStore(reducer), needs 3 arguments');

  AppRegistry.registerComponent('ToDoList', () => AppWithStore);
}

function startWithInitialState() {
  let initialState = { todos: [] };
  try {
    AsyncStorage.getItem(storageKeys.state).then((value) => {
      initialState = JSON.parse(value);
      setup(initialState);
    });
  } catch (e) {
    console.log('====================================');
    console.log('Could not load initial data');
    console.log('====================================');
    setup(initialState);
  }
}

startWithInitialState();
