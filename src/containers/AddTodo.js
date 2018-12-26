import React from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

const AddTodo = ({onSubmit}) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          onSubmit(input.value.trim())
          input.value = ''
        }}
      >
        <input ref={node => (input = node)}></input>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(addTodo(value))
});

export default connect(null, mapDispatchToProps)(AddTodo);