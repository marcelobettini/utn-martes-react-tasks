import { RiDeleteBin6Line } from "react-icons/ri";
import "./Task.css";
function Task({ task, tasks, setTasks }) {
  const handleTaskCompleted = (id) => {
    const filteredTasks = tasks.map((t) =>
      t.id !== id ? t : { ...t, isCompleted: !t.isCompleted }
    );
    setTasks(filteredTasks);
  };

  const handleDelete = (id) => {
    const remainingTasks = tasks.filter((t) => t.id !== id);
    setTasks(remainingTasks);
  };
  return (
    <div className="taskContainer">
      <p
        onClick={() => handleTaskCompleted(task.id)}
        className={task.isCompleted ? "completed" : ""}
      >
        {task.description} - {task.dueDate}
      </p>
      <RiDeleteBin6Line onClick={() => handleDelete(task.id)} />
    </div>
  );
}

export default Task;
