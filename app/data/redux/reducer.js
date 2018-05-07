import { AsyncStorage } from 'react-native';
import Reactotron from 'reactotron-react-native';
import { actionTypes } from './actions';

export const storageKeys = {
  state: 'state',
};

function todosReducer(state, action) {
  const { type, payload } = action;
  let newId;
  const lastItem = state[state.length - 1];
  if (lastItem) {
    newId = lastItem.id + 1;
  } else {
    newId = 0;
  }

  switch (type) {
    case actionTypes.INITIAL_DATA: {
      if (action.payload.initialDataFetched.fetched) {
        return action.payload.todos;
      }
      return state;
    }
    case actionTypes.ADD: {
      return [...state, { id: newId, text: payload, isCompleted: false }];
    }
    case actionTypes.REMOVE: {
      return state.filter(item => item.id !== payload.id);
    }
    case actionTypes.REMOVE_COMPLETED: {
      return state.filter(item => !item.isCompleted);
    }
    case actionTypes.TOGGLE_COMPLETED: {
      return state.map((item) => {
        if (item.id === payload.id) {
          const newItem = { ...item }; // Copy into new item
          newItem.isCompleted = !item.isCompleted;
          return newItem;
        }
        return item;
      });
    }
    default: {
      return state;
    }
  }
}

function initialDataFetchedReducer(state, action) {
  if (action.type === actionTypes.INITIAL_DATA) {
    return action.payload.initialDataFetched;
  }
  return state;
}

export default function reducer(state, action) {
  const newState = {
    todos: todosReducer(state.todos, action),
    initialDataFetched: initialDataFetchedReducer(state.initialDataFetched, action),
  };
  Reactotron.log(state);
  if (state.initialDataFetched.fetched) {
    AsyncStorage.setItem(storageKeys.state, JSON.stringify(newState));
  }

  return newState;
}
