import { useSelector } from "react-redux";
import React from "react";
import { TaskList } from "../task-list/TaskList";
import { allTasks } from "../api/todoTasksSlice";

export const TodoList = () => {
  const tasks = useSelector(allTasks);
  const todoTasks = useSelector(() => {
    return tasks.filter((task) => !task.isChecked);
  });

  return <TaskList tasks={todoTasks} />;
};
