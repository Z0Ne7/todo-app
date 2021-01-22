import { ACTION } from '../constants/actionTypes';

export const addTodo = (todo) => {
  return {
    type: ACTION.ADD_TODO,
    todo,
  };
};

export const getTodoEditingId = (id) => {
  return {
    type: ACTION.GET_TODO_EDITING_ID,
    id,
  };
};

export const onEditTodo = (todo, id) => {
  return {
    type: ACTION.ON_EDIT_TODO,
    payload : {todo,id},
  };
};
