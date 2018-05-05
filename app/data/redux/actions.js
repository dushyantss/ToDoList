export const actionTypes = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  REMOVE_COMPLETED: 'REMOVE_COMPLETED',
};

export const add = item => ({ type: actionTypes.ADD, payload: item });
export const remove = item => ({ type: actionTypes.REMOVE, payload: item });
export const removeCompleted = () => ({ type: actionTypes.REMOVE_COMPLETED, payload: null });
