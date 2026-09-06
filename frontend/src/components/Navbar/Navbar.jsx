function Navbar() {
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
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#about">About</a>
      </nav>

      <button className="contact-btn">
        Contact Us
      </button>

    </header>
  )
}

export default Navbar