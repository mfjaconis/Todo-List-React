import { useRef, useState } from "react";
import { Task } from "./components/Task";

import styles from "./App.module.css";

export function App() {
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState([]);

  function handleAddTask() {
    const newTask = {
      id: tasks.length + 1,
      title: inputRef.current.value,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);

    inputRef.current.value = "";
  }
  // precisa verificar por qual motivo está ocorrendo a mudança somente depois de adicionar uma nova tarefa
  function handleCompleteTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);


    const newTasks = [...tasks] 
    newTasks[taskIndex].isCompleted = true

    setTasks(newTasks)
  }

  function handleDeleteTask(id) {
    const deleteTaskIndex = tasks.filter(task => task.id !== id)
    setTasks(deleteTaskIndex);
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
          <Task handleCompleteTask={handleCompleteTask} key={item.id} task={item} handleDeleteTask={handleDeleteTask} />
        ))}
        {!tasks.length && <p>Nenhuma Tarefa ainda ✍🧾</p>}
      </div>
    </main>
  );
}

export default App;
