import { ChangeEvent, useState, MouseEvent, FormEvent } from "react";
import styles from "./Taskform.module.css";

export interface TaskProps {
  addTask: (task: string) => void;
}

export function Taskform({ addTask }: TaskProps) {
  const [newTaskValue, setNewTaskValue] = useState("");

  const handleTaskInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("");
    setNewTaskValue(event.target.value);
  };

  const addValuesOnArray = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addTask(newTaskValue);
    setNewTaskValue("");
  };

  function handleNewCommentInvalid(event: FormEvent<HTMLInputElement>) {
    const inputElement = event.target as HTMLInputElement;
    inputElement.setCustomValidity("Este campo é obrigatório.");
  }

  return (
    <div>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTaskValue}
          onChange={handleTaskInputValue}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <button onClick={addValuesOnArray}>
          Criar
        </button>
      </form>
    </div>
  );
}
