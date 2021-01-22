import React, { memo, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { onEditTodo, getTodoEditingId } from '../actions';

const Todo = memo((props) => {
  const {
    todo,
    todoEditingId,
    getTodoEditingId,
    onEditTodo,
    index,
    markCompleted,
    removeTodo,
  } = props;
  // console.log(todo);
  const dispatch = useDispatch()
  const [text, setText] = useState(todo.text);
  const isEditing = todoEditingId === todo.id;
  const editTodo = e => {
    e.preventDefault();
    dispatch(onEditTodo(text,index))
  };
  return (
    <li
      className={`${isEditing ? 'editing' : ''} ${
        todo.isCompleted ? 'completed' : ''
      }`}
    >
      {!isEditing ? (
        <div className='view'>
          <input
            className='toggle'
            type='checkbox'
            checked={todo.isCompleted}
            onChange={() => markCompleted(todo.id)}
          />
          <label onDoubleClick={() => getTodoEditingId(todo.id)}>
            {todo.text}
          </label>
          <button
            className='destroy'
            onClick={() => removeTodo(todo.id)}
          ></button>
        </div>
      ) : (
       <form onSubmit={editTodo}>
       <input
          className='edit'
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={editTodo}
        />
       </form>
      )}
    </li>
  );
});
const mapStateToProps = (state, props) => {
  return {
    todoEditingId: state.todos.todoEditingId,
    ...props,
  };
};

const mapDispatchToProps = {
  onEditTodo,
  getTodoEditingId,
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
