import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ACTION_TYPE {
  FETCH_TODOS,
  DELETE_TODO,
}

export type Action = FetchTodosAction | DeleteTodoAction;
