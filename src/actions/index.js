let nextNodeId = 0;

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextNodeId ++,
  text: text
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id: id
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})