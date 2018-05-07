export const actionTypes = {
  INITIAL_DATA: 'INITIAL_DATA',
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  REMOVE_COMPLETED: 'REMOVE_COMPLETED',
  TOGGLE_COMPLETED: 'TOGGLE_COMPLETED',
};

export const initialData =
  (data, isFetched, error) => (
    {
      type: actionTypes.INITIAL_DATA,
      payload: {
        todos: data.todos, initialDataFetched: { fetched: isFetched, error },
      },
    }
  ); // data could also hold error
export const add = text => ({ type: actionTypes.ADD, payload: text });
export const remove = item => ({ type: actionTypes.REMOVE, payload: item });
export const removeCompleted = () => ({ type: actionTypes.REMOVE_COMPLETED, payload: null });
export const toggleCompleted = item => ({ type: actionTypes.TOGGLE_COMPLETED, payload: item });
