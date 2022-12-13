import { configureStore } from '@reduxjs/toolkit'
import rootSaga from './saga'
import createSagaMiddleware from 'redux-saga'
import taskReducer from './taskSlice'

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: { tasks: taskReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)
