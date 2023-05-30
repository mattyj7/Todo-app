export function Footer({ length }) {
  return (
    <>
      <h2 className="footer">
        {length} List {length === 1 ? "item" : "items"}
      </h2>
    </>
  );
}
