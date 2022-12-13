import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { Provider } from 'react-redux'
import store from './store'
import { sagaActions } from './sagaActions'

store.dispatch({ type: sagaActions.FETCH_DATA_SAGA })
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={ store }>
    <App />
  </Provider>
)
