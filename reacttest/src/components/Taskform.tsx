import React, { useState } from "react";
import "./taskform.css";
 
const Form = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Low");
  const [priority, setPriority] = useState("Low");
  const [error, setError] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(title == '' || description == ''){
        setError("Title or Description cannot be empty !");
        return;
    }
    else{
        onAddTask(title, description, status, priority);
        setError("");
        setTitle("");
        setDescription("");
        setStatus("")
        setPriority("");
        alert("Task added Success !")
       
    }
 
  };
 
  return (
    <div id="box1">
 
        <form onSubmit={handleSubmit}>
        <input value={title}  placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
        <textarea value={description}  placeholder="Description"  onChange={(e) => setDescription(e.target.value)}/>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Pending</option>
            <option>Completed</option>
        </select>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
        </select>
        <p style={{color : 'red'}}>{error}</p>
        <button type="submit">Add</button>
        </form>
    </div>
  );
};
 
 
export default Form;