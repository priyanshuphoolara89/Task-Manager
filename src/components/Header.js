function Header({ total, completed }) {
  return (
    <header className="header">
      <h1>Task Manager</h1>

      <div className="stats">
        <div>
          <span>Total</span>
          <strong>{total}</strong>
        </div>

        <div>
          <span>Completed</span>
          <strong>{completed}</strong>
        </div>
      </div>
    </header>
  );
}

export default Header;