import { useSelector } from "react-redux";
import React from "react";
import { TaskList } from "./TaskList";

const CompletedList = () => {
  const completedTasks = useSelector((state) => {
    return state.tasks.filter((task) => task.isChecked);
  });

  return (
    <section>
      <h3>Completed</h3>
      <TaskList tasks={completedTasks} />
    </section>
  );
};
export default CompletedList;
