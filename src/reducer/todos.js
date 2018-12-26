import React from 'react';

const todos = (status = [{id: 0, completed: false, text: 'test'}], action) => {
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
    default:
      return status;
  }
}

export default todos