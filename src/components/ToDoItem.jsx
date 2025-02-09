import React, { useState } from "react";


export default function ToDoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex items-center justify-between bg-gray-200 p-2 mb-2 rounded">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="flex-1 px-2 py-1 border rounded"
        />
      ) : (
        <span
          onClick={() => toggleComplete(todo.id)}
          className={`flex-1 cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
        >
          {todo.text}
        </span>
      )}

      <div className="space-x-2">
        <button onClick={handleEdit} className="text-blue-500">
          {isEditing ? "Save" : "✏"}
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="text-red-500">
          ✖
        </button>
      </div>
    </li>
  );
}
