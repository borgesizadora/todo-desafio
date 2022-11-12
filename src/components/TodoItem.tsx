import { Check, Circle, Trash } from "phosphor-react";
import styles from "./TodoItem.module.css";

export interface TodoItem {
  id: number;
  content: string;
  isChecked: boolean;
}

interface ITodoItem {
  todo: TodoItem;
}

export const TodoItem = ({ todo: { content, isChecked } }: ITodoItem) => {
  return (
    <div className={styles.todoItem}>
      {isChecked ? (
        <button type="button">
          <Check className={styles.checked} size={24} weight="bold" />
        </button>
      ) : (
        <button type="button">
          <Circle className={styles.notChecked} size={24} />
        </button>
      )}
      <p className={isChecked ? styles.checkedText : styles.normalText}>
        {content}
      </p>
      <button type="button">
        <Trash className={styles.trash} size={24} />
      </button>
    </div>
  );
};
