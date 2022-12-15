import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { Provider } from 'react-redux'
import store from './redux/store'
import { fetchTaskSaga } from './redux/saga/sagaActions'

store.dispatch(fetchTaskSaga())
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={ store }>
    <App />
  </Provider>
)
