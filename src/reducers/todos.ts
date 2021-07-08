import { Todo, FetchTodosAction } from '../actions';
import { ACTION_TYPE } from '../actions/type';

// We are creating an unneded coupling between the reducer and a fixed action type
export const todosReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ACTION_TYPE.FETCH_TODOS:
      return action.payload;
    default:
      return state;
  }
};
