import { PlusCircle } from "phosphor-react";
import styles from "./TodoForm.module.css";

export const TodoForm = () => {
  return (
    <form className={styles.todoForm}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
};
