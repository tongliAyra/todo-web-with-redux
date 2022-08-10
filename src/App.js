import Header from "./components/Header";
import TodoList from "./components/TodoList";
import CompletedList from "./components/CompletedList";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <section>
      <Header />
      {/*<TodoList />*/}
      {/*<CompletedList />*/}
      <TaskList />
    </section>
  );
}

export default App;
