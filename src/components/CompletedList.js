import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { checkedTask } from "./todoTasksSlice";

const CompletedList = () => {
  const todo = useSelector((state) =>
    state.tasks.filter((task) => task.isChecked)
  );
  console.log("filter", todo);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkedTask());
  };

  const render = todo.map((task) => (
    <section key={task.id}>
      <label htmlFor="check-box" />
      <input
        key={task.id}
        className="check-box"
        type="checkbox"
        defaultChecked={task.isChecked}
        onChange={handleClick}
      />
      <p className={task.id}>{task.taskName}</p>
    </section>
  ));

  return (
    <section>
      <h3>Completed</h3>
      <div>{render}</div>
    </section>
  );
};
export default CompletedList;
