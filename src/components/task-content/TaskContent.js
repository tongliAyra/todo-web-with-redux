import React, { useEffect, useState } from 'react'
import { TaskInput } from '../task-input/TaskInput'
import { TaskList } from '../task-list/TaskList'
import { deleteTasksApi, updateTasksApi } from '../../api/api'
import { TaskOverview } from '../task-overview/TaskOverview'
import { StyledTaskContent } from '../styled-component/StyledTaskContent'
import { useDispatch, useSelector } from 'react-redux'
import { allTasks } from '../../taskSlice'
import { fetchTaskSaga } from '../../sagaActions'

export const TaskContent = () => {
  const storedTaskList = useSelector(allTasks)

  const [showTaskList, setShowTaskList] = useState({
    showAllTask: true,
    showTodoTask: false,
    showCompletedTask: false
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTaskSaga())
  },[])

  const handleUpdateTask = async ({ id, taskName, isChecked }) => {
    await updateTasksApi({ id, taskName, isChecked })
  }

  const handleDeleteTask = async (id) => {
    await deleteTasksApi(id)
  }

  const todoTaskList = storedTaskList.filter((task) => task.isChecked === false)
  const completedTaskList = storedTaskList.filter((task) => task.isChecked === true)
  const todoTaskCount = todoTaskList.length
  const completedTaskId = completedTaskList.map((task) => task.id)

  return (
    <StyledTaskContent>
      <TaskInput
        handleUpdateTask={ handleUpdateTask }
        todoTaskList={ todoTaskList }
        completedTaskList={ completedTaskList }
      />
      <TaskList
        taskList={ showTaskList.showAllTask && storedTaskList ||
          showTaskList.showTodoTask && todoTaskList ||
          showTaskList.showCompletedTask && completedTaskList }
        handleDeleteTask={ handleDeleteTask }
        handleUpdateTask={ handleUpdateTask }
      />
      <TaskOverview
        todoTaskCount={ todoTaskCount }
        handleTaskFilter={ setShowTaskList }
        completedTaskId={ completedTaskId }
        handleDeleteTask={ handleDeleteTask }
      />
    </StyledTaskContent>
  )
}
