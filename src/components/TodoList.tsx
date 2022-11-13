import { ClipboardText } from "phosphor-react";
import { TodoItem } from "./TodoItem";
import styles from "./TodoList.module.css";

interface ITodoList {
  todoList: TodoItem[];
  toggleTodoCheck: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const TodoList = ({
  todoList,
  toggleTodoCheck,
  deleteTodo,
}: ITodoList) => {
  const tasksCreated = todoList.length;

  const tasksCompleted = todoList.reduce((total, todo) => {
    if (todo.isChecked) return (total += 1);
    return total;
  }, 0);

  const isTodoListEmpty = todoList.length === 0;

  return (
    <div className={styles.todoListContainer}>
      <header className={styles.info}>
        <div>
          <strong>Tarefas criadas</strong>
          <span>{tasksCreated}</span>
        </div>
        <div>
          <strong>Concluídas</strong>
          <span>
            {tasksCreated ? `${tasksCompleted} de ${tasksCreated}` : 0}
          </span>
        </div>
      </header>
      {isTodoListEmpty ? (
        <div className={styles.emptyList}>
          <ClipboardText size={56} />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
          </p>
          <p>Crie tarefas e organizer seus itens a fazer</p>
        </div>
      ) : (
        <div className={styles.todoList}>
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleToggleTodoCheck={toggleTodoCheck}
              handleDeleteTodo={deleteTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
};
