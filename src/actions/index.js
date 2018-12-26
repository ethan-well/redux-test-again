let nextNodeId = 0;
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextNodeId ++,
  text: text
})