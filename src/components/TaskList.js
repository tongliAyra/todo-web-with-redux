import { useDispatch } from "react-redux";
import React from "react";
import {deleteTasks, updateTasks} from "./todoTasksSlice";
import "./taskList.css";

//遍历对象数组 https://mdnice.com/writing/c3c0df37674a42aa812cb3b6e8e542a1

export const TaskList = ({tasks}) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {Object.keys(tasks)
        .sort((a, b) => b - a)
        .map((key, index) => {
          let taskList = tasks[key];
          //遍历某个list里的所有数值，key是总数，和task的id不同，会根据list长度的变化而变化

          const onChangedClick = () => {
            dispatch(updateTasks({
              id:taskList.id,
              taskName: taskList.taskName,
              isChecked: !taskList.isChecked,
            }));
          };

          const onDeleteClick = () => {
            let listId = taskList.id;
            dispatch(deleteTasks(listId));
          };

          const onTaskChange = ()=>{
            const inputName = document.getElementById(`${taskList.id}`).innerHTML;
            dispatch(updateTasks({
              id:taskList.id,
              taskName: inputName,
              isChecked: taskList.isChecked,
            }));
          }
          return (
            <li key={index}>
              <label htmlFor="check-box" />
              <input
                type="checkbox"
                checked={taskList.isChecked}
                onChange={onChangedClick}
              />
              <span id={taskList.id}
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    onBlur={onTaskChange} >
                {taskList.taskName}</span>
              <button className="delete-btn" onClick={onDeleteClick}>
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};
