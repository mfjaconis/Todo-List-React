import { useRef, useState } from "react";
import { Task } from "./components/Task";

export function App() {
  const inputRef = useRef(null)
  const [tasks, setTasks] = useState([])

  function handleAddTask() {
    const newTask = {
      id: tasks.length + 1,
      title: inputRef.current.value,
      isCompleted: false
    }

    setTasks([...tasks, newTask])

    inputRef.current.value = ''
  }

  return (
    <main>
      <h1> Todo List</h1>
      <input placeholder="Nome da tarefa..." ref={inputRef} type="text" />
      <button onClick={handleAddTask}>Adicionar</button>
      {tasks.map((item) => (
        <Task key={item.id} task={item} />
      ))}
      {!tasks.length && <p>Nenhuma Tarefa ainda ✍🧾</p>}
    </main>
  );
}

export default App;
