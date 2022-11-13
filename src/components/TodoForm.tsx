import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./TodoForm.module.css";

interface ITodoForm {
  addNewTodo: (text: string) => void;
}

export const TodoForm = ({ addNewTodo }: ITodoForm) => {
  const [newTodoText, setNewTodoText] = useState("");

  const isSubmitDisabled = newTodoText.length === 0;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addNewTodo(newTodoText);
    setNewTodoText("");
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTodoText(e.target.value);
  }
  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTodoText}
        onChange={handleChange}
      />
      <button type="submit" disabled={isSubmitDisabled}>
        Criar <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
};
