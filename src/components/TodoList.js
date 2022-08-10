import { useSelector } from "react-redux";
import React from "react";

const TodoList = () => {
  const todo = useSelector((state) =>
    state.tasks.filter((task) => !task.isChecked)
  );

  const render = todo.map((task) => (
    <section key={task.id}>
      <label htmlFor="check-box" />
      <input className="check-box" type="checkbox" />
      <p className={task.id}>{task.taskName}</p>
    </section>
  ));
  return <section>{render}</section>;
};

export default TodoList;
