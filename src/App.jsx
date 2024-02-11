import { useRef, useState } from "react";
import { Task } from "./components/Task";

import styles from "./App.module.css";

export function App() {
  //Referencia do input task
  const inputRef = useRef(null);

  //estado da task
  const [tasks, setTasks] = useState([]);

  //estado de edição da task
  const [editingTaskId, setEditingTaskId] = useState(null)

  //Função para adicionar tarefa
  function handleAddTask() {
    const newTask = {
      id: tasks.length + 1,
      title: inputRef.current.value,
      isCompleted: false,
      isEditing: false
    };

    setTasks([...tasks, newTask]);

    inputRef.current.value = "";
  }

  //Função para riscar a tarefa concluída.
  function handleCompleteTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);

    const newTasks = [...tasks]
    newTasks[taskIndex].isCompleted = true

    setTasks(newTasks)
  }

  //Função para deletar tarefa.
  function handleDeleteTask(id) {
    const deleteTaskIndex = tasks.filter(task => task.id !== id)
    setTasks(deleteTaskIndex);
  }

  //Função para definir o ID da tarefa que será editada.
  function handleEditTask(id) {
    setEditingTaskId(id)
  }

  //Função para salvar a edição da tarefa editada.
  function handleSaveEditeTask(id, editedTitle) {
    const taskIndex = tasks.findIndex(task => task.id === id);

    const newTasks = [...tasks]
    newTasks[taskIndex].title = editedTitle
    

    setEditingTaskId(null);
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
          <Task
            key={item.id}
            task={item}
            editing={editingTaskId === item.id}
            handleCompleteTask={handleCompleteTask}
            handleDeleteTask={handleDeleteTask}
            handleEditTask={handleEditTask}
            handleSaveEditeTask={handleSaveEditeTask}
          />
        ))}
        {!tasks.length && <p>Nenhuma Tarefa ainda ✍🧾</p>}
      </div>
    </main>
  );
}

export default App;
