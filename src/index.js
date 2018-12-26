import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';
import VisibleTodoList from './containers/VisibleTodoList';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <VisibleTodoList />
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./print.js', function(){
      console.log("Accepting the updated printMe module!");
      printMe();
  })
}