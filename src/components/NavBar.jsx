const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "sobre", label: "Sobre" },
  { id: "contato", label: "Contato" },
];

function NavBar({ activeSection, onSectionChange }) {
  return (
    <nav className="app-nav">
      <div className="nav-brand">
        <span className="dot" />
        <div>
          <p>React AWS Deploy</p>
          <small>CI/CD demonstrativo</small>
        </div>
      </div>

      <div className="nav-links">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`nav-link ${activeSection === item.id ? "active" : ""}`}
            onClick={() => onSectionChange(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
