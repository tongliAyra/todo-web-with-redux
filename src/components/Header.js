import { useDispatch } from "react-redux";
import { addTask } from "./todoTasksSlice";
import { useState } from "react";

const Header = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const handleAddTasks = () => {
    dispatch(addTask(task));
    setTask("");
  };

  const onChangeName = (e) => {
    setTask(e.target.value);
  };

  return (
    <header>
      <h1>Use this to manage your life and work</h1>
      <label htmlFor="add-task" />
      <input
        type="text"
        className="add-task"
        placeholder="Enter your todo item"
        onChange={onChangeName}
      />
      <button className="add-btn" onClick={handleAddTasks}>
        +
      </button>
    </header>
  );
};

export default Header;
