import produce from 'immer';
import { ACTION } from '../constants/actionTypes';

const initialState = {
  todosList: [
    {
      id: 1,
      text: 'to do 1',
      isCompleted: true,
      todoEditingId: false,
    },
    {
      id: 2,
      text: 'Hello',
      isCompleted: false,
    },
  ],
 
  status: 'ALL',
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTION.ADD_TODO:
      return produce(state,draftState => {
        draftState.todosList.push(action.todo)
      })
      case ACTION.GET_TODO_EDITING_ID:
      return produce(state,draftState => {
        draftState.todoEditingId = action.id;
      })
      // case ACTION.ON_EDIT_TODO:
      //   console.log(action.payload)
      //   break;
      default:
        return state;
    }
  }

export default todoReducer;
