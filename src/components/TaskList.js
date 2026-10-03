import TaskItem from "./TaskItem";

function TaskList({ tasks, dispatch }) {
  if (tasks.length === 0) {
    return (
      <div className="empty">
        No tasks found.
      </div>
    );
  }

  return (
    <div className="task-list">

      {tasks.map(function (task) {
        return (
          <TaskItem
            key={task.id}
            task={task}
            dispatch={dispatch}
          />
        );
      })}

    </div>
  );
}

export default TaskList;