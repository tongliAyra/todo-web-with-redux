import { useDispatch } from "react-redux";
import {addTasks} from "./todoTasksSlice";
import {useState} from "react";
import "./Header.css";
import { Input} from "antd";
import {ErrorMessage} from "./ErrorMessage";

const Header = () => {
  const [task, setTask] = useState("");
  const [error,setError] = useState(false)
  const dispatch = useDispatch();

  const handleAddTasks = () => {
    if (task.match(/^\s*$/) ) {
      setError(true)
    }else {
      dispatch(addTasks({
        taskName: task.trim(),
        isChecked: false
      }));
      setTask("");
      setError(false)
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
        {error && <ErrorMessage/>}
      </div>
    </header>
  );
};

export default Header;
