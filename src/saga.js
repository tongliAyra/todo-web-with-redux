import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { addTasksApi, fetchTaskApi, updateTasksApi } from './api/api'
import { addTasks, fetchTasks, updateTask } from './taskSlice'
import { sagaActions } from './sagaActions'

function* fetchTaskList(){
  try {
    const res = yield call(fetchTaskApi)
    yield put(fetchTasks(res.data))
  }catch (e){
    yield put({ type: sagaActions.FETCH_DATA_SAGA_FAILED })
  }
}

function* addSingleTask(action){
  try {
    const res = yield call(addTasksApi,action.payload)
    yield put(addTasks(res.data))
  }catch (error){
    yield put({ type: sagaActions.ADD_DATA_SAGA_FAILED })
  }
}

function* updateSingleTask(action){
  try {
    const res = yield call(updateTasksApi,action.payload)
    yield put(updateTask(res.data))
  }catch (error){
    yield put({ type: sagaActions.UPDATE_DATA_SAGA_FAILED })
  }
}

function* watchUpdateTasks(){
  yield takeEvery(sagaActions.UPDATE_DATA_SAGA,updateSingleTask)
}

function* watchFetchTasks(){
  yield takeLatest(sagaActions.FETCH_DATA_SAGA,fetchTaskList)
}

function* watchAddTasks(){
  yield takeEvery(sagaActions.ADD_DATA_SAGA,addSingleTask)
}

export default function* rootSaga(){
  yield all([
    watchFetchTasks(),
    watchAddTasks(),
    watchUpdateTasks()
  ])
}
