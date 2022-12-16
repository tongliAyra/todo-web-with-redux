import { configureStore } from '@reduxjs/toolkit'
import rootSaga from './saga/saga'
import createSagaMiddleware from 'redux-saga'
import taskReducer from './taskSlice'

const sagaMiddleware = createSagaMiddleware()
//createStore 的对比 -- configureStore -- redux tool kit 的使用
// configureStore 的优势-- 官方源码的简单查看--- 官方文档的tips

export default configureStore({
  reducer: { tasks: taskReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)
