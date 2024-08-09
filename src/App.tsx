import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Taskform } from "./components/Taskform";
import { TaskInfo } from "./components/TaskInfo";
import { TaskList } from "./components/TaskList";

import clipBoard from "./assets/clip-board.svg";

import "./global.css";
import { useState } from "react";

interface Task {
  id: number;
  text: string;
  isChecked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [checkedCount, setCheckedCount] = useState(0);

  const addTask = (newTask: string) => {
    const newTaskObject: Task = {
      id: tasks.length,
      text: newTask,
      isChecked: false,
    };
    setTasks([...tasks, newTaskObject]);
  };

  const removeTask = (id: number) => {
    const taskToRemove = tasks.find((task) => task.id === id);
    if (taskToRemove?.isChecked) {
      setCheckedCount((prevCount) => prevCount - 1);
    }
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCheckedChange = (id: number, isChecked: boolean) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isChecked } : task
      )
    );
    setCheckedCount((prevCount) => (isChecked ? prevCount + 1 : prevCount - 1));
  };

  let taskInfoValues: number = tasks.length;

  return (
    <div>
      <Header />
      <div className={styles.task}>
        <Taskform addTask={addTask} />

        <TaskInfo taskCount={taskInfoValues} checkedCount={checkedCount} />

        <main>
          {tasks.length === 0 ? (
            <div className={styles.noTask}>
              <img src={clipBoard} />
              <p>
                <span>Você ainda não tem tarefas cadastradas</span>
              </p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          ) : (
            tasks.map((task) => (
              <TaskList
                key={task.id}
                id={task.id}
                taskValue={task.text}
                onRemove={removeTask}
                onCheckedChange={handleCheckedChange}
              />
            ))
          )}
        </main>
      </div>
    </div>
  );
}