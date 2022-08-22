import { useDispatch } from "react-redux";
import {addTasks} from "./todoTasksSlice";
import { useState } from "react";
import "./Header.css";
import { Input } from "antd";
// import { ErrorMessage } from "./ErrorMessage";

const Header = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  // let showError = false;
  const handleAddTasks = () => {
    if (task === "") {
      // showError = true;
      //TODO:wrong work space of show error,rethink the logic
    } else {
      dispatch(addTasks({
        taskName: task,
        isChecked: false
      }));
      setTask("");
    }
  };
  const onChangeName = (e) => {
    setTask(e.target.value);
  };

  return (
    <header>
      <h1>Use this to manage your life and work</h1>
      <div>
        <label htmlFor="add-task" />
        <Input
          type="text"
          className="add-task"
          placeholder=" Enter your todo item"
          value={task}
          onChange={onChangeName}
        />
        <button className="add-btn" onClick={handleAddTasks}>
          +
        </button>
      </div>
      {/*{showError && <ErrorMessage />}*/}
    </header>
  );
};

export default Header;
