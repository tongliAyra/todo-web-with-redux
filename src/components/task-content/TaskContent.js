import React, { useState } from 'react'
import { TaskInput } from '../task-input/TaskInput'
import { TaskList } from '../task-list/TaskList'
import { TaskOverview } from '../task-overview/TaskOverview'
import { StyledTaskContent } from '../styled-component/StyledTaskContent'
import { useDispatch, useSelector } from 'react-redux'
import { allTasks } from '../../redux/taskSlice'
import { addTaskSaga, deleteTaskSaga, updateTaskSaga } from '../../redux/saga/sagaActions'

export const TaskContent = () => {
  const storedTaskList = useSelector(allTasks)
  const dispatch = useDispatch()

  const [showTaskList, setShowTaskList] = useState({
    showAllTask: true,
    showTodoTask: false,
    showCompletedTask: false
  })

  const handleAddTask = (newTask) => {
    dispatch(addTaskSaga({
      taskName: newTask.trim(),
      isChecked: false }))
  }

  const handleUpdateTask = (updateTask) => {
    if (updateTask.length > 1){
      updateTask.map((task) => dispatch(updateTaskSaga(
        {
          id: task.id,
          taskName: task.taskName,
          isChecked: !task.isChecked
        })))
    }else {
      dispatch(updateTaskSaga(
        {
          id: updateTask.id,
          taskName: updateTask.taskName,
          isChecked: !updateTask.isChecked
        }))
    }
  }

  const handleDeleteTask = (id) => {
    dispatch(deleteTaskSaga(id))
  }

  const todoTaskList = storedTaskList.filter((task) => task.isChecked === false)
  const completedTaskList = storedTaskList.filter((task) => task.isChecked === true)
  const todoTaskCount = todoTaskList.length
  const completedTaskId = completedTaskList.map((task) => task.id)

  return (
    <StyledTaskContent>
      <TaskInput
        handleUpdateTask={ handleUpdateTask }
        handleAddTask={ handleAddTask }
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
