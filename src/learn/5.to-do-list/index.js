import BasicStyle from "../index.module.css";

import { useState } from "react";

function ToDoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function onChange(e) {
    setTodo(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((curArr) => [todo, ...curArr]);
    setTodo("");
  }
  console.log(todos);

  return (
    <div className={BasicStyle.box}>
      <h1>To Do List ({todos.length})</h1>
      <span></span>
      <form onSubmit={onSubmit}>
        <input value={todo} onChange={onChange} type="text" />
        <button>Add To Do</button>
      </form>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
