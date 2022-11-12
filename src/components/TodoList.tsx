import { ClipboardText } from "phosphor-react";
import { TodoItem } from "./TodoItem";
import styles from "./TodoList.module.css";

export const TodoList = () => {
  const todoList = [
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet Deleniti, ab. Adipisci iste itaque quos velit minima perferendis.",
      isChecked: true,
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ab. Adipisci iste itaque quos velit minima perferendis.",
      isChecked: false,
    },
    {
      id: 3,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ab. Adipisci iste itaque quos velit minima perferendis.",
      isChecked: false,
    },
    {
      id: 4,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ab. Adipisci iste itaque quos velit minima perferendis.",
      isChecked: true,
    },
  ];

  const isTodoListEmpty = todoList.length === 0;
  return (
    <div className={styles.todoListContainer}>
      <header className={styles.info}>
        <div>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>
        <div>
          <strong>Concluídas</strong>
          <span>0</span>
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
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
};
