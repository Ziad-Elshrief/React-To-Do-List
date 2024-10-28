export default function AddItem({todos , setTodos}) {
    function addItem(e) {
        e.preventDefault();
        const form = e.target;
        if (form.itemName.value.trim() !== "") {
          const newItem = { title: form.itemName.value, completed: false };
          localStorage.setItem("ToDoList", JSON.stringify([...todos, newItem]));
          setTodos([...todos, newItem]);
        }
        form.itemName.value = "";
      }
  return <form onSubmit={addItem}>
    <label htmlFor="new-item">Add new item</label>
    <input type="text" name="itemName" id="new-item" />
    <input type="submit" value="Add Item" />
  </form>;
}
