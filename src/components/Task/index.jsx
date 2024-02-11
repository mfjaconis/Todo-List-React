import { useState } from "react";
import { useRef } from "react"
import styles from "./styles.module.css";


export function Task(props) {
  const [editedTitle, setEditedTitle] = useState(props.task.title);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {!props.task.isCompleted && (
          <input type="radio" onClick={() => props.handleCompleteTask(props.task.id)} />)
        }
        {props.editing ? (
          <input
            className={styles.input}
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            autoFocus 
          />
        ) : (
          <p
            className={`${styles.title} 
          ${props.task.isCompleted && styles.completed}`}
          >
            {props.task.id} - {props.task.title}
          </p>
        )
        }
      </div>

      <div>
        <button className={styles.button} onClick={() => props.handleDeleteTask(props.task.id)}>
          Excluir
        </button>
        {props.editing ? (
          <button className={styles.button} onClick={() => props.handleSaveEditeTask(props.task.id, editedTitle)}>
            Salvar
          </button>
        ) : (
          <button className={styles.button} onClick={() => props.handleEditTask(props.task.id)}>
            Editar
          </button>
        )
        }
      </div>



    </div>
  );
}
