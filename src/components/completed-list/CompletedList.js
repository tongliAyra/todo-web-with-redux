import { useSelector } from "react-redux";
import React from "react";
import { TaskList } from "../task-list/TaskList";
import { allTasks } from "../api/todoTasksSlice";

export const CompletedList = () => {
  const tasks = useSelector(allTasks);
  const completedTasks = useSelector(() => {
    return tasks.filter((task) => task.isChecked);
  });

  return (
    <section>
      <h3>Completed</h3>
      <TaskList tasks={completedTasks} />
    </section>
  );
};
