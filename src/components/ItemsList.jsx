export default function ItemList({todos , setTodos}){
    function deleteItem(event) {
        const itemToDelete = event.target.id.match(/\d+/)[0] - 1;
        setTodos(todos.filter((todo ,index) => index !== itemToDelete));
      }
      function checkItem(event) {
        const checkIndex = event.target.id.match(/\d+/)[0] - 1;
        const localTodos = JSON.parse(localStorage.getItem("ToDoList"));
        localTodos[checkIndex].completed= ! localTodos[checkIndex].completed;
        setTodos(localTodos);
      }
    return <>
    {todos.length === 0 && <p>Nothing to do</p>}
     <ul>
    {todos.map((todo, index) => (
      <li key={"todo-" + Number(index + 1)}>
        <input
          type="checkbox"
          id={"item" + Number(index + 1) + "-check"}
          checked={todo.completed}
          onChange={checkItem}
        />
        <label className={todo.completed ? "completed" : ""} htmlFor={"item" + Number(index + 1) + "-check"}>
          {todo.title}
        </label>
        <button
          type="button"
          id={"item" + Number(index + 1) + "-del"}
          onClick={deleteItem}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
  </>
}