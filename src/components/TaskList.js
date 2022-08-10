import { useDispatch } from "react-redux";
import React from "react";
import { checkedTask } from "./todoTasksSlice";

//遍历对象数组 https://mdnice.com/writing/c3c0df37674a42aa812cb3b6e8e542a1

export const TaskList = ({ tasks }) => {
  const dispatch = useDispatch();

  return (
    <section>
      {Object.keys(tasks).map((key, index) => {
        const onChangedClick = (id) => {
          dispatch(checkedTask(id));
        };
        let taskList = tasks[key];
        //遍历某个list里的所有数值，key是总数，和task的id不同，会根据list长度的变化而变化
        return (
          <div key={index}>
            <label htmlFor="check-box" />
            <input
              type="checkbox"
              defaultChecked={taskList.isChecked}
              onChange={onChangedClick}
            />
            <span>
              {key}:{taskList.taskName}
            </span>
          </div>
        );
      })}
    </section>
  );
};
