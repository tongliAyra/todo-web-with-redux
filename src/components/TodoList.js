import { useSelector } from "react-redux";
import React from "react";
import { TaskList } from "./TaskList";

const TodoList = () => {
  const todoTasks = useSelector((state) => {
    return state.tasks.filter((task) => !task.isChecked);
  });

  return <TaskList tasks={todoTasks} />;
};

export default TodoList;
