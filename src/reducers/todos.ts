import { Todo, Action, ACTION_TYPE } from '../actions';

// We are creating an unneded coupling between the reducer and a fixed action type
export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ACTION_TYPE.FETCH_TODOS:
      return action.payload;
    case ACTION_TYPE.DELETE_TODO:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
