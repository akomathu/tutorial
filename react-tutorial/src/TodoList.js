import React from 'react'
import todo from './todo'

const TodoList = ({ todos }) => {
  return todos.map((todo) => <todo todo={todo} key={todo} />);
};

export default TodoList