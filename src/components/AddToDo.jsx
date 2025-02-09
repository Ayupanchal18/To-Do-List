import React, { useState } from "react";

const AddToDo = ({ addTodo }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 my-4">
            <input
                type="text"
                className="border p-2 flex-1 rounded-md"
                placeholder="Add a new task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Add
            </button>
        </form>
    );
};

export default AddToDo;
