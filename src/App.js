import logo from "./logo.svg";
import "./App.css";
import { Headers } from "./components/Header";
import { AddForm } from "./components/AddForm";
import { Item } from "./components/Item";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [title, setTitle] = useState("");
  const [nullText, setNullText] = useState(false);
  const [editId, setEditId] = useState(null);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  function deleteTask(id) {
    setTasks(tasks.filter((item) => item.id !== id));
  }
  function saveTask(e) {
    e.preventDefault();
    if (!title) {
      setNullText(true);
    } else if (editId) {
      const updatetask = tasks.map((item) => {
        if (item.id === editId) {
          return { ...item, title: title };
        }
        return item;
      });
      setTasks(updatetask);
      setTitle("");
      setEditId(null);
    } else {
      setNullText(false);
      const newTask = { id: tasks.length + 1, title: title };
      setTasks([...tasks, newTask]);
      setTitle("");
    }
  }
  function editTask(id) {
    setEditId(id);
    const editTask = tasks.find((item) => item.id === id);
    setTitle(editTask.title);
  }
  return (
    <div className={"App " + theme}>
      <Headers theme={theme} setTheme={setTheme}></Headers>
      <div className="container">
        <AddForm
          title={title}
          setTitle={setTitle}
          saveTask={saveTask}
          nullText={nullText}
          setNullText={setNullText}
          editId={editId}
        ></AddForm>
        <section>
          {tasks.map((i) => (
            <Item
              key={i.id}
              data={i}
              deleteTask={deleteTask}
              editTask={editTask}
            ></Item>
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
