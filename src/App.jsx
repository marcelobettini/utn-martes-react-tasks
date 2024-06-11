import { useState, useEffect } from "react";
import Input from "./components/Input";
import Search from "./components/Search";
import TaskList from "./components/TaskList";
import { getTasksFromStorage } from "./utils/getTasksFromStorage";

function App() {
  const wtf = true;
  const [tasks, setTasks] = useState(getTasksFromStorage());
  const [query, setQuery] = useState("");

  const handleAddTask = (description) => {
    const now = new Date();
    const newTask = {
      id: self.crypto.randomUUID(),
      description,
      dueDate: new Intl.DateTimeFormat("es-AR", {
        dateStyle: "long",
      }).format(now),
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <>
      <header>
        <h1>Lista de tareas</h1>
        <p>No es original... pero sirve para aprender</p>
      </header>
      {wtf ? <Search onQuery={(text) => setQuery(text)} /> : null}
      <Input onAddTask={(desciption) => handleAddTask(desciption)} />
      <TaskList tasks={tasks} setTasks={setTasks} query={query} />
    </>
  );
}

export default App;
