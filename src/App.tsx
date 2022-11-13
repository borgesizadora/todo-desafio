import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import "./global.css";

function App() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  function addNewTodo(todoText: string) {
    const newTodo: TodoItem = {
      id: uuidv4(),
      content: todoText,
      isChecked: false,
    };
    setTodoList((prevList) => [...prevList, newTodo]);
  }

  function toggleTodoCheck(todoId: string) {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === todoId) return { ...todo, isChecked: !todo.isChecked };
      return todo;
    });
    setTodoList(newTodoList);
  }
  function deleteTodo(todoId: string) {
    const newTodoList = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(newTodoList);
  }

  return (
    <div>
      <Header />
      <TodoForm addNewTodo={addNewTodo} />
      <TodoList
        todoList={todoList}
        toggleTodoCheck={toggleTodoCheck}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
