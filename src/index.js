import React from 'react'
import { render } from 'react-dom'

render(
  <div>Test Redux Again</div>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./print.js', function(){
      console.log("Accepting the updated printMe module!");
      printMe();
  })
}