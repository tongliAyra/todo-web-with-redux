import axios from 'axios'
import { runSaga } from 'redux-saga'
import { addTaskSaga, updateTaskSaga } from '../../../../src/redux/saga/sagaActions'
import { addSingleTask, updateSingleTask } from '../../../../src/redux/saga/saga'
import { addTasks, updateTask } from '../../../../src/redux/taskSlice'

jest.mock('axios')

describe('add single task', () => {
  beforeEach(() => { jest.clearAllMocks() })

  it('should post new task success', async () => {
    const dispatchActions = []
    axios.post.mockResolvedValue([])

    await runSaga(
      { dispatch: (action) => dispatchActions.push(action) },
      addSingleTask, addTaskSaga('mock-task')).toPromise()

    expect(axios.post).toBeCalledTimes(1)
    expect(dispatchActions.length).toEqual(1)
    expect(dispatchActions).toContainEqual(addTasks())
  })

  it('should post new task failed', async () => {
    const dispatchActions = []
    axios.post.mockRejectedValue()

    await runSaga(
      { dispatch: (action) => dispatchActions.push(action) },
      addSingleTask, addTaskSaga('mock-task')).toPromise()

    expect(axios.post).toBeCalledTimes(1)
    expect(dispatchActions.length).toEqual(1)
    expect(dispatchActions).toContainEqual({ type: 'ADD_DATA_SAGA_FAILED' })
  })

})

describe('update single task', () => {
  beforeEach(() => { jest.clearAllMocks() })

  it('should update task success', async () => {
    const dispatchActions = []
    axios.put.mockResolvedValue([])

    await runSaga(
      { dispatch: (action) => dispatchActions.push(action) },
      updateSingleTask, updateTaskSaga('mock-task')).toPromise()

    expect(axios.put).toBeCalledTimes(1)
    expect(dispatchActions.length).toEqual(1)
    expect(dispatchActions).toContainEqual(updateTask())
  })

  it('should post new task failed', async () => {
    const dispatchActions = []
    axios.put.mockRejectedValue()

    await runSaga(
      { dispatch: (action) => dispatchActions.push(action) },
      updateSingleTask, updateTaskSaga('mock-task')).toPromise()

    expect(axios.put).toBeCalledTimes(1)
    expect(dispatchActions.length).toEqual(1)
    expect(dispatchActions).toContainEqual({ type: 'UPDATE_DATA_SAGA_FAILED' })
  })

})
