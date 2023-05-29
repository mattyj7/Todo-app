export function Header({ title, newItem, setNewItem, handleSubmit }) {
  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <h1>{title}</h1>
      <div className="form-row">
        <label htmlFor="item">Add Item</label>
        <input
          autoFocus
          type="text"
          id="addItem"
          placeholder="New Item"
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" aria-label="Add Item"></button>
      </div>
    </form>
  );
}
