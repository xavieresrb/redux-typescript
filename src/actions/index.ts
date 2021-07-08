import axios from 'axios';
import { Dispatch } from 'redux';
import { ACTION_TYPE } from './type';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ACTION_TYPE.FETCH_TODOS;
  payload: Todo[];
}

const url = 'http://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  // dispatcher redux function used in the action
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ACTION_TYPE.FETCH_TODOS,
      payload: response.data,
    });
  };
};
