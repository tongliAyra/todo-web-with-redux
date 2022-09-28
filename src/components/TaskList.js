import { useDispatch } from "react-redux";
import React from "react";
import {deleteTasks, updateTasks} from "./todoTasksSlice";
import "./taskList.css";

export const TaskList = ({tasks}) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {Object.keys(tasks)
        .sort((a, b) => b - a)
        .map((key, index) => {
          let taskList = tasks[key];

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
