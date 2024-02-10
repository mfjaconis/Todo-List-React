import styles from "./styles.module.css";


export function Task(props) {
  return (
    <div className={styles.container}>
      {!props.task.isCompleted && (
        <input  type="radio" onClick={() => props.handleCompleteTask(props.task.id)} className={styles.button}/>)
      }
      <p
        className={`${styles.title} ${
          props.task.isCompleted && styles.completed
        }`}
      >
        {props.task.id} - {props.task.title} 
      </p>
    
    </div>
  );
}
