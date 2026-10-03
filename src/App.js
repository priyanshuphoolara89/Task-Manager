import { useReducer, useState } from "react";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import "./App.css";


const initialTasks = [
  {
    id: 1,
    text: "Learn React",
    completed: true
  },
  {
    id: 2,
    text: "Practice useReducer",
    completed: false
  },
  {
    id: 3,
    text: "Build React Project",
    completed: false
  }
];


function taskReducer(tasks, action) {

  switch (action.type) {

    case "added":

      return [
        ...tasks,
        {
          id: Date.now(),
          text: action.text,
          completed: false
        }
      ];


    case "toggled":

      return tasks.map(function (task) {

        if (task.id === action.id) {

          return {
            ...task,
            completed: !task.completed
          };

        }

        return task;
      });


    case "deleted":

      return tasks.filter(function (task) {

        return task.id !== action.id;

      });


    default:

      return tasks;
  }
}


function App() {

  const [tasks, dispatch] = useReducer(
    taskReducer,
    initialTasks
  );

  const [filter, setFilter] = useState("all");


  let filteredTasks = tasks;


  if (filter === "pending") {

    filteredTasks = tasks.filter(function (task) {

      return task.completed === false;

    });

  }


  if (filter === "completed") {

    filteredTasks = tasks.filter(function (task) {

      return task.completed === true;

    });

  }


  const completedCount = tasks.filter(function (task) {

    return task.completed === true;

  }).length;


  return (

    <div className="app">

      <Header
        total={tasks.length}
        completed={completedCount}
      />


      <main className="container">

        <TaskForm dispatch={dispatch} />


        <div className="filters">

          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>


          <button
            className={filter === "pending" ? "active" : ""}
            onClick={() => setFilter("pending")}
          >
            Pending
          </button>


          <button
            className={filter === "completed" ? "active" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>

        </div>


        <TaskList
          tasks={filteredTasks}
          dispatch={dispatch}
        />

      </main>

    </div>

  );
}

export default App;