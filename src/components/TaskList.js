import { useSelector } from "react-redux";

const TaskList = () => {
  const todoTask = useSelector((state) => state.tasks);

  return (
    <section>
      <label htmlFor="check-box" />
      <input className="check-box" type="checkbox" />
    </section>
  );
};

export default TaskList;
