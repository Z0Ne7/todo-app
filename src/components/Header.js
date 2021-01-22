import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as action from '../actions';

const Header = memo((props) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const { addTodo, isCheckedAll } = props;
  const onAddTodo = (e = {}) => {
    if (e.key === 'Enter' && text) {
      dispatch(
        action.addTodo({
          id: new Date().valueOf(),
          text,
          isCompleted: false,
        })
      );
      // addTodo({
      //   id: new Date().valueOf(),
      //   text,
      //   isCompleted: false,
      // });
      setText('');
    }
  };
  return (
    <header className='header'>
      <h1>todos</h1>
      <input
        className='new-todo'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => onAddTodo(e)}
        checked={isCheckedAll}
      />
    </header>
  );
});

export default Header;
