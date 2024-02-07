export function Task(props) {
    return (
        <p>{props.task.id } - {props.task.title } {props.task.isCompleted} </p>
    )
}