import { useSelector } from "react-redux";
import React from "react";
import { TaskList } from "./TaskList";
import {allTasks} from "./todoTasksSlice";

const TodoList = () => {
  const tasks = useSelector(allTasks)
  const todoTasks = useSelector(() => {
    return tasks.filter((task) => !task.isChecked);
  });

  return <TaskList tasks={todoTasks} />;
};

export default TodoList;
