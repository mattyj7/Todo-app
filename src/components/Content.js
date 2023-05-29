import React from "react";
import { List } from "./List";

export function Content({ items, handleCheck, handleDelete }) {
  return (
    <main>
      {items.length ? (
        <List
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </main>
  );
}
