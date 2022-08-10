import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { checkedTask } from "./todoTasksSlice";

//遍历对象数组 https://mdnice.com/writing/c3c0df37674a42aa812cb3b6e8e542a1

export const TaskList = () => {
  const allTasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <section>
      {Object.keys(allTasks).map((key) => {
        const taskList = allTasks[key];

        const onChangedClick = () => {
          dispatch(checkedTask(key));
        };

        return (
          <div key={taskList.id}>
            <label htmlFor="check-box" />
            <input
              type="checkbox"
              defaultChecked={taskList.isChecked}
              onChange={onChangedClick}
            />
            <span>{taskList.taskName}</span>
          </div>
        );
      })}
    </section>
  );
};
