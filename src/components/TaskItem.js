function TaskItem({ task, dispatch }) {
  return (
    <div
      className={
        task.completed
          ? "task-item completed"
          : "task-item"
      }
    >
      <div className="task-left">

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => {
            dispatch({
              type: "toggled",
              id: task.id
            });
          }}
        />

        <span>{task.text}</span>

      </div>

      <button
        className="delete-btn"
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id
          });
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;