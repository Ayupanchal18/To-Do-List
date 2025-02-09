import React, { useState } from "react";
import ToDoItem from "./ToDoItem";


const ToDoList = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <ul className="mt-4 space-y-2 "  >
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
