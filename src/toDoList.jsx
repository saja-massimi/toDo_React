import { useState,useEffect } from "react";
import "./App.css";

function ToDoList() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null); 

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addOrEditTask() {
    if (newTask.trim() === "") return;

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
      setEditIndex(null); 
    } else {
      setTasks((t) => [...t, newTask]);
    }

    setNewTask(""); 
  }

  function startEditTask(index) {
    setNewTask(tasks[index]); 
    setEditIndex(index); 
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => index !== i);
    setTasks(updatedTasks);
    if (editIndex === index) {
      setEditIndex(null);
      setNewTask("");
    }
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="container1">
      <h1>To Do Application</h1>
      <input
        type="text"
        value={newTask}
        placeholder="Enter task here"
        onChange={handleInputChange}
      />
      <button onClick={addOrEditTask}>
        {editIndex !== null ? "Update Task" : "Add Task"}
      </button>

      <div className="list">
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="edit-btn"
                onClick={() => startEditTask(index)}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button
                className="up-btn"
                onClick={() => moveTaskUp(index)}
              >
                Move Up
              </button>
              <button
                className="down-btn"
                onClick={() => moveTaskDown(index)}
              >
                Move Down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;
