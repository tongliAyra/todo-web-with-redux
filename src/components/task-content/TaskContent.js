import React, { useEffect, useState } from 'react'
import { TaskInput } from '../task-input/TaskInput'
import { TaskList } from '../task-list/TaskList'
import { addTasks, deleteTasks, fetchTasks, updateTasks } from '../api/api'
import { TaskOverview } from '../task-overview/TaskOverview'

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
    <div>
      <TaskInput
        handleAddTask={ handleAddTask }
        handleUpdateTask={ handleUpdateTask }
        todoTaskList={ todoTaskList }
        completedTaskList={ completedTaskList }
      />
      { showTaskList.showAllTask &&
        <TaskList
          taskList={ taskList }
          handleUpdateTask={ handleUpdateTask }
          handleDeleteTask={ handleDeleteTask }
        />
      }
      { showTaskList.showTodoTask &&
        <TaskList
          taskList={ todoTaskList }
          handleUpdateTask={ handleUpdateTask }
          handleDeleteTask={ handleDeleteTask }
        />
      }
      { showTaskList.showCompletedTask &&
        <TaskList
          taskList={ completedTaskList }
          handleUpdateTask={ handleUpdateTask }
          handleDeleteTask={ handleDeleteTask }
        />
      }
      <TaskOverview
        todoTaskCount={ todoTaskCount }
        handleTaskFilter={ setShowTaskList }
        completedTaskId={ completedTaskId }
        handleDeleteTask={ handleDeleteTask }
      />
    </div>
  )
}
