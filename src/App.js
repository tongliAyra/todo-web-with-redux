import Header from "./components/Header";
import TodoList from "./components/TodoList";
import CompletedList from "./components/CompletedList";

function App() {
  return (
    <section>
      <Header />
      <TodoList />
      <CompletedList />
    </section>
  );
}

export default App;
