import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({todos, toggleTodo}) => {
  return (
    <ul>
      {
        todos.map(todo => (
          <li
            key={todo.id}
            onClick={ () => toggleTodo(todo.id)}
            className={todo.completed ? 'toggled' : 'no-toggled'}
          >
            {todo.text}
          </li>
        ))
      }
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default TodoList;