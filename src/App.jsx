import { useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem";
import ItemsList from "./components/ItemsList";

function App() {
  const intial = localStorage.getItem("ToDoList")
    ? JSON.parse(localStorage.getItem("ToDoList"))
    : [];
  const [todos, setTodos] = useState(intial);
  localStorage.setItem("ToDoList", JSON.stringify([...todos]));

  function clearItems() {
    setTodos([]);
  }

  return (
    <>
      <AddItem todos={todos} setTodos={setTodos}/>
      <h1>To Do List</h1>
     <ItemsList todos={todos} setTodos={setTodos}/>

      {todos.length > 0 && (
        <button
          type="button"
          id="clear-items"
          onClick={clearItems}
        >
          Clear Items
        </button>
      )}
    </>
  );
}

export default App;
