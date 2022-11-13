import { Check, Circle, Trash } from "phosphor-react";
import styles from "./TodoItem.module.css";

export interface TodoItem {
  id: string;
  content: string;
  isChecked: boolean;
}

interface ITodoItem {
  todo: TodoItem;
  handleToggleTodoCheck: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
}

export const TodoItem = ({
  todo: { content, isChecked, id },
  handleToggleTodoCheck,
  handleDeleteTodo,
}: ITodoItem) => {
  return (
    <div className={styles.todoItem}>
      <button type="button" onClick={() => handleToggleTodoCheck(id)}>
        {isChecked ? (
          <Check className={styles.checked} size={24} weight="bold" />
        ) : (
          <Circle className={styles.notChecked} size={24} />
        )}
      </button>
      <p className={isChecked ? styles.checkedText : styles.normalText}>
        {content}
      </p>
      <button type="button" onClick={() => handleDeleteTodo(id)}>
        <Trash className={styles.trash} size={24} />
      </button>
    </div>
  );
};
