import React from "react";

export function Content({ items, handleCheck, handleDelete }) {
  return (
    <main>
      {items.length ? (
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
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </main>
  );
}
