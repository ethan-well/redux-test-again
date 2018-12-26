import React from 'react';

const todos = (status = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...status,
        {
          id: action.id,
          completed: false,
          text: action.text
        }
      ]
    case 'TOGGLE_TODO':
      return status.map (
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed} : todo
      )
    default:
      return status;
  }
}

export default todos