/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reducer, { storageKeys } from './app/data/redux/reducer';
import { initialData } from './app/data/redux/actions';
import App from './app/ui/App';

function fetchInitialState(store) {
  let initialState = { todos: [], initialDataFetched: { fetched: false, error: null } };
  try {
    AsyncStorage.getItem(storageKeys.state).then((value) => {
      initialState = JSON.parse(value);
      store.dispatch(initialData(initialState, true, null));
    });
  } catch (e) {
    Reactotron.log('====================================');
    Reactotron.log('Could not load initial data');
    Reactotron.log('====================================');
    store.dispatch(initialData(initialState, false, e));
  }
}

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

  fetchInitialState(store);
}

// startWithInitialState();
setup({ todos: [], initialDataFetched: false });
