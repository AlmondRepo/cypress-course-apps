import { useState } from "react";
import { Trash2 } from "lucide-react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">React To-Do App</h1>
      <div className="bg-white shadow-lg rounded-lg p-4 w-full">
        <div className="flex gap-2">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task..."
            className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>
      </div>
      <ul className="mt-4 w-full bg-white shadow-lg rounded-lg p-4">
        {tasks.map((t, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b last:border-none">
            <span className="text-gray-800">{t}</span>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:text-red-700 transition"
            >
              <Trash2 size={16} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
