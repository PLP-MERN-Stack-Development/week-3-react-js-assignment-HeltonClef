import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (idx) => {
    setTasks(
      tasks.map((task, i) =>
        i === idx ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (idx) => {
    setTasks(tasks.filter((_, i) => i !== idx));
  };

  const filteredTasks =
    filter === "all"
      ? tasks
      : filter === "active"
      ? tasks.filter((t) => !t.completed)
      : tasks.filter((t) => t.completed);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="border px-2 py-1 rounded w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <Button onClick={addTask}>Add</Button>
      </div>
      <div className="flex gap-2 mb-4">
        <Button
          variant={filter === "all" ? "primary" : "secondary"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "active" ? "primary" : "secondary"}
          onClick={() => setFilter("active")}
        >
          Active
        </Button>
        <Button
          variant={filter === "completed" ? "primary" : "secondary"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </div>
      {filteredTasks.map((task, idx) => (
        <Card key={idx}>
          <div className="flex items-center justify-between">
            <span
              className={task.completed ? "line-through text-gray-400" : ""}
              onClick={() => toggleTask(idx)}
            >
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(idx)}>
              Delete
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}