import React, { useState, useEffect } from "react";
import { FaPlus, FaTrash } from "react-icons/fa6";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Загружаем задачи из localStorage при первом рендере
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Сохраняем задачи в localStorage при каждом изменении
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: task }]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4  text-white">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="TODO kiriting"
          className="px-4 py-2 rounded-md border border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={addTask}
          className="p-3 rounded-md bg-indigo-500 hover:bg-indigo-600 shadow-md transition"
        >
          <FaPlus />
        </button>
      </div>

      <ul className="w-full max-w-sm">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-800 rounded p-2 mb-2"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => deleteTask(todo.id)}
              className="text-red-400 hover:text-red-600"
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
