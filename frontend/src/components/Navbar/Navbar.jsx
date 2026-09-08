import { useState } from "react";

function Navbar({
  onHome,
  onFeatures,
  onAbout,
  onHowItWorks,
  onContact,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (action) => {
    setMenuOpen(false);

    if (typeof action === "function") {
      action();
    }
  };

  return (
    <header className="navbar">

      {/* Logo / Home Button */}
      <button
        className="brand home-button"
        onClick={() => handleClick(onHome)}
        aria-label="Go to home"
      >
        <div className="brand-logo">✦</div>

        <div>
          <h2>Stratify</h2>
          <span>Business Intelligence</span>
        </div>
      </button>

      {/* Desktop Navigation */}
      <nav className="desktop-nav">

        <button
          className="nav-link"
          onClick={() => handleClick(onFeatures)}
        >
          Features
        </button>

        <button
          className="nav-link"
          onClick={() => handleClick(onHowItWorks)}
        >
          How It Works
        </button>

        <button
          className="nav-link"
          onClick={() => handleClick(onAbout)}
        >
          About
        </button>

      </nav>

      {/* Desktop Contact */}
      <button
        className="contact-btn desktop-contact"
        onClick={() => handleClick(onContact)}
      >
        Contact Us
      </button>

      {/* Mobile Menu Button */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={
            menuOpen
              ? "bar bar-one open"
              : "bar bar-one"
          }
        ></span>

        <span
          className={
            menuOpen
              ? "bar bar-two open"
              : "bar bar-two"
          }
        ></span>

        <span
          className={
            menuOpen
              ? "bar bar-three open"
              : "bar bar-three"
          }
        ></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={
          menuOpen
            ? "mobile-menu active"
            : "mobile-menu"
        }
      >

        <button
          className="mobile-nav-link"
          onClick={() => handleClick(onHome)}
        >
          Home
        </button>

        <button
          className="mobile-nav-link"
          onClick={() => handleClick(onFeatures)}
        >
          Features
        </button>

        <button
          className="mobile-nav-link"
          onClick={() => handleClick(onHowItWorks)}
        >
          How It Works
        </button>

        <button
          className="mobile-nav-link"
          onClick={() => handleClick(onAbout)}
        >
          About
        </button>

        <button
          className="mobile-contact-btn"
          onClick={() => handleClick(onContact)}
        >
          Contact Us
        </button>

      </div>

    </header>
  );
}

export default Navbar;