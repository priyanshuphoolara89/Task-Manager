import { useState } from "react";

function TaskForm({ dispatch }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (text.trim() === "") {
      return;
    }

    dispatch({
      type: "added",
      text: text
    });

    setText("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;