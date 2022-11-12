import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
