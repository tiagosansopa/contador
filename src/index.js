import React from 'react'
import ReactDom from 'react-dom'
import Root from './components/Root.jsx'
import store from './store/configureStore'



ReactDom.render(
  <Root store={store} />,
  document.getElementById('app')
)
