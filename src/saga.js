import { call,put, takeEvery,all, takeLatest } from 'redux-saga/effects'
import { addTasksApi, fetchTaskApi } from './api/api'
import { addTasks, fetchTasks } from './taskSlice'
import { sagaActions } from './sagaActions'

function* fetchTaskList(){
  const res = yield call(fetchTaskApi)
  yield put(fetchTasks(res.data))
}

function* addSingleTask(action){
  try {
    const res = yield call(addTasksApi,action.payload)
    yield put(addTasks(res.data))
  }catch (error){
    yield put({ type: sagaActions.ADD_DATA_SAGA_FAILED })
  }
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
    watchAddTasks()
  ])
}
