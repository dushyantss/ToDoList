export const actionTypes = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  REMOVE_COMPLETED: 'REMOVE_COMPLETED',
  TOGGLE_COMPLETED: 'TOGGLE_COMPLETED',
};

export const add = text => ({ type: actionTypes.ADD, payload: text });
export const remove = item => ({ type: actionTypes.REMOVE, payload: item });
export const removeCompleted = () => ({ type: actionTypes.REMOVE_COMPLETED, payload: null });
export const toggleCompleted = item => ({ type: actionTypes.TOGGLE_COMPLETED, payload: item });
