function Navbar({ onAbout, onHowItWorks, onContact }) {
  return (
    <header className="navbar">

      <div className="brand">
        <div className="brand-logo">✦</div>

        <div>
          <h2>Stratify</h2>
          <span>Business Intelligence</span>
        </div>
      </div>

      <nav>

        <a href="#features">
          Features
        </a>

        <button
          onClick={onHowItWorks}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "inherit",
            font: "inherit",
          }}
        >
          How It Works
        </button>

        <button
          onClick={onAbout}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "inherit",
            font: "inherit",
          }}
        >
          About
        </button>

      </nav>

      <button
        className="contact-btn"
        onClick={onContact}
      >
        Contact Us
      </button>

    </header>
  )
}

export default Navbar