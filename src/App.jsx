import { useRef, useState } from "react";
import { Task } from "./components/Task";

import styles from "./App.modules.css";

export function App() {
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    const newTask = {
      id: tasks.length + 1,
      title: inputRef.current.value,
      isCompleted: true,
    };

    setTasks([...tasks, newTask]);

    inputRef.current.value = "";
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}> Todo List</h1>
      <div className={styles.inputGroup}>
        <input
          className={styles.input}
          placeholder="Nome da tarefa..."
          ref={inputRef}
          type="text"
        />
        <button className={styles.button} onClick={handleAddTask}>
          Adicionar
        </button>
      </div>
      <div className={styles.tasks}>
        {tasks.map((item) => (
          <Task key={item.id} task={item} />
        ))}
        {!tasks.length && <p>Nenhuma Tarefa ainda ✍🧾</p>}
      </div>
    </main>
  );
}

export default App;
