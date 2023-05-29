export function Footer({ length }) {
  return (
    <>
      <h2>
        {length} List {length === 1 ? "item" : "items"}
      </h2>
    </>
  );
}
