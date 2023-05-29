export function List({ items, handleCheck, handleDelete }) {
  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li className="item" key={item.id}>
          <input
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
          />
          <label
            className="item-label"
            style={item.checked ? { textDecoration: "line-through" } : null}
            onDoubleClick={() => handleCheck(item.id)}
          >
            {item.item}
          </label>
          <button
            className="delete-btn"
            onClick={() => handleDelete(item.id)}
            tabIndex="0"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
