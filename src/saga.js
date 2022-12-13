import { call,put,all, takeLatest } from 'redux-saga/effects'
import { fetchTaskApi } from './api/api'
import { fetchTasks } from './taskSlice'
import { sagaActions } from './sagaActions'

function* fetchTaskList(){
  const res = yield call(fetchTaskApi)
  yield put(fetchTasks(res.data))
}

function* watchFetchTasks(){
  yield takeLatest(sagaActions.FETCH_DATA_SAGA,fetchTaskList)
}

export default function* rootSaga(){
  yield all([watchFetchTasks()])
}


// export const addTasksApi = async (taskName, isChecked) => {
//   await axios.post(URL, { taskName, isChecked })
// }
//
// export const fetchTaskApi = async () => await axios.get(URL)
//
// export const updateTasksApi = async (updateTask) => await axios.put(`${URL}/${updateTask.id}`, updateTask)
//
// export const deleteTasksApi = async (id) => await axios.delete(`${URL}/${id}`)
