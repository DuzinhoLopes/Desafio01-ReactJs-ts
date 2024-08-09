import styles from "./TaskInfo.module.css";

interface TaskInfoValues {
  taskCount: number;
  checkedCount: number;
}

export function TaskInfo({ taskCount, checkedCount }: TaskInfoValues) {
  return (
    <div className={styles.info}>
      <span className={styles.taskCreated}>
        Tarefas criadas <span>{taskCount}</span>
      </span>
      <span className={styles.taskCompleted}>
        Concluídas <span>{checkedCount} de {taskCount}</span>
      </span>
    </div>
  );
}
