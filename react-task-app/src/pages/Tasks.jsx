import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (text.trim()) {
      setTasks([...tasks, { text, completed: false }]);
      setText("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const filtered = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <div className="flex mb-4 gap-2">
        <input
          className="border p-2 rounded w-full"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add new task"
        />
        <Button onClick={addTask}>Add</Button>
      </div>
      <div className="flex gap-2 mb-4">
        <Button variant="secondary" onClick={() => setFilter("all")}>
          All
        </Button>
        <Button variant="secondary" onClick={() => setFilter("active")}>
          Active
        </Button>
        <Button variant="secondary" onClick={() => setFilter("completed")}>
          Completed
        </Button>
      </div>
      <div className="space-y-2">
        {filtered.map((task, i) => (
          <Card key={i}>
            <div className="flex justify-between items-center">
              <span
                className={task.completed ? "line-through text-gray-400" : ""}
              >
                {task.text}
              </span>
              <div className="flex gap-2">
                <Button variant="secondary" onClick={() => toggleTask(i)}>
                  {task.completed ? "Undo" : "Complete"}
                </Button>
                <Button variant="danger" onClick={() => deleteTask(i)}>
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
