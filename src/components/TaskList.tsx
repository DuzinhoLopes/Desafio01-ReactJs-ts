import { Trash } from "@phosphor-icons/react";
import styles from "./TaskList.module.css";
import { useState } from "react";

interface TaskListValues {
  id: number;
  taskValue: string;
  onRemove: (id: number) => void;
  onCheckedChange: (id: number, isChecked: boolean) => void;
}

export function TaskList({
  id,
  taskValue,
  onRemove,
  onCheckedChange,
}: TaskListValues) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onCheckedChange(id, newCheckedState);
  };

  return (
    <div className={styles.divContent}>
      <form className={styles.form}>
        <input type="hidden" value={id} />
        <input
          type="checkbox"
          className={styles.checkBoxRound}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label className={isChecked ? styles.labelChecked : ""}>
          {taskValue}
        </label>
        <button type="button" onClick={() => onRemove(id)}>
          <Trash size={20} />
        </button>
      </form>
    </div>
  );
}
