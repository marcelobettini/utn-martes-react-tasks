import Task from "./Task.jsx";

function TaskList({ tasks, setTasks, query }) {
  return (
    <>
      {tasks
        .filter((t) => t.description.includes(query))
        .map((task) => (
          <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
    </>
  );
}

export default TaskList;
