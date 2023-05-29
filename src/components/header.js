export function Header({ title }) {
  return (
    <form className="new-item-form">
      <h1>{title}</h1>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" id="itme" />
      </div>
    </form>
  );
}
