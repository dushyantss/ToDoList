import { actionTypes } from './actions';

const initialState = { todos: [] };

function todosReducer(state = initialState.todos, action) {
  const { type, payload } = action;
  let newId;
  const lastItem = state[state.length - 1];
  if (lastItem) {
    newId = lastItem.id + 1;
  } else {
    newId = 0;
  }

  switch (type) {
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

export default function reducer(state = initialState, action) {
  return {
    todos: todosReducer(state.todos, action),
  };
}
