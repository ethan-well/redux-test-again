import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions/index';

const visibilityFilter = (todos, filter)  => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter(todo => (!todo.completed))
    case 'SHOW_COMPLETED':
      return todos.filter(todo => (todo.completed))
    default:
      todso
  }
}

const mapStateToProps = state => ({
  todos: visibilityFilter(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);



