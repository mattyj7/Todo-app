

export function NewToDoList() {
  const [todos, setTodos] = useState([])

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return ( ...todo, completed)
        }

        return todo
      })
    })
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="itme"
        />
      </div>
    </form>
  );
}
