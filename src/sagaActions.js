export const sagaActions = {
  FETCH_DATA_SAGA: 'FETCH_DATA_SAGA',
  FETCH_DATA_SAGA_FAILED: 'FETCH_DATA_SAGA_FAILED',
  ADD_DATA_SAGA: 'ADD_DATA_SAGA',
  ADD_DATA_SAGA_FAILED: 'ADD_DATA_SAGA_FAILED',
  UPDATE_DATA_SAGA: 'UPDATE_DATA_SAGA',
  UPDATE_DATA_SAGA_FAILED: 'UPDATE_DATA_SAGA_FAILED',
  DELETE_DATA_SAGA: 'DELETE_DATA_SAGA',
  DELETE_DATA_SAGA_FAILED: 'DELETE_DATA_SAGA_FAILED'
}
export const addTaskSaga = payload => ({ type: sagaActions.ADD_DATA_SAGA, payload })
export const fetchTaskSaga = () => ({ type: sagaActions.FETCH_DATA_SAGA })
export const updateTaskSaga = payload => ({ type: sagaActions.UPDATE_DATA_SAGA, payload })
export const deleteTaskSaga = payload => ({ type: sagaActions.DELETE_DATA_SAGA, payload })
