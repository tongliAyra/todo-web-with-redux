import React, { useEffect, useState } from 'react'
import { TaskInput } from '../task-input/TaskInput'
import { TaskList } from '../task-list/TaskList'
import { addTasks, deleteTasks, fetchTasks, updateTasks } from '../api/api'
import { TaskOverview } from '../task-overview/TaskOverview'
import { StyledTaskContent } from '../styled-component/StyledTaskContent'

export const TaskContent = () => {
  const [taskList, setTaskList] = useState([])
  const [showTaskList, setShowTaskList] = useState({
    showAllTask: true,
    showTodoTask: false,
    showCompletedTask: false
  })

  const buildTaskList = async () => {
    const response = await fetchTasks()
    setTaskList(response.data)
  }

  const handleAddTask = async ({ taskName, isChecked }) => {
    await addTasks(taskName, isChecked)
    buildTaskList()
  }

  const handleUpdateTask = async ({ id, taskName, isChecked }) => {
    await updateTasks({ id, taskName, isChecked })
    buildTaskList()
  }

  const handleDeleteTask = async (id) => {
    await deleteTasks(id)
    buildTaskList()
  }

  useEffect(() => {
    buildTaskList()
  }, [])

  const todoTaskList = taskList.filter((task) => task.isChecked === false)
  const completedTaskList = taskList.filter((task) => task.isChecked === true)
  const todoTaskCount = todoTaskList.length
  const completedTaskId = completedTaskList.map((task) => task.id)

  return (
    <StyledTaskContent>
      <TaskInput
        handleAddTask={ handleAddTask }
        handleUpdateTask={ handleUpdateTask }
        todoTaskList={ todoTaskList }
        completedTaskList={ completedTaskList }
      />
      <TaskList
        taskList={ showTaskList.showAllTask && taskList ||
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
