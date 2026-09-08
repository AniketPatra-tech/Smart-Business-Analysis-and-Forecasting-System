import { useState } from 'react'
import './App.css'

import Register from './pages/Register/Register.jsx'
import BusinessSetup from './pages/BuisnessSetup/BusinessSetup.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Features from './pages/Features/Features.jsx'
import About from './pages/About/About.jsx'
import HowItWorks from './pages/HowItWorks/HowItWorks.jsx'
import Contact from './pages/Contact/Contact.jsx'

import Navbar from './components/Navbar/Navbar'

function App() {
  const [showRegister, setShowRegister] = useState(false)
  const [showBusinessSetup, setShowBusinessSetup] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)

  const [showFeatures, setShowFeatures] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
  const [showHowItWorks, setShowHowItWorks] = useState(false)
  const [showContact, setShowContact] = useState(false)

  const [businessFile, setBusinessFile] = useState(null)
  const [userName, setUserName] = useState('')

  // Close all informational pages
  const closeInfoPages = () => {
    setShowFeatures(false)
    setShowAbout(false)
    setShowHowItWorks(false)
    setShowContact(false)
  }

  // Go to Home
  const goHome = () => {
    closeInfoPages()
    setShowRegister(false)
    setShowBusinessSetup(false)
    setShowDashboard(false)
  }

  // Open Features
  const goFeatures = () => {
    closeInfoPages()
    setShowFeatures(true)
  }

  // Open About
  const goAbout = () => {
    closeInfoPages()
    setShowAbout(true)
  }

  // Open How It Works
  const goHowItWorks = () => {
    closeInfoPages()
    setShowHowItWorks(true)
  }

  // Open Contact
  const goContact = () => {
    closeInfoPages()
    setShowContact(true)
  }

  // Common Navbar Props
  const navbarProps = {
    onHome: goHome,
    onFeatures: goFeatures,
    onAbout: goAbout,
    onHowItWorks: goHowItWorks,
    onContact: goContact,
  }

  // Features Page
  if (showFeatures) {
    return (
      <div className="app">

        <Navbar {...navbarProps} />

        <Features
          onBack={() => setShowFeatures(false)}
        />

      </div>
    )
  }

  // About Page
  if (showAbout) {
    return (
      <div className="app">

        <Navbar {...navbarProps} />

        <About
          onBack={() => setShowAbout(false)}
        />

      </div>
    )
  }

  // How It Works Page
  if (showHowItWorks) {
    return (
      <div className="app">

        <Navbar {...navbarProps} />

        <HowItWorks
          onBack={() => setShowHowItWorks(false)}
        />

      </div>
    )
  }

  // Contact Page
  if (showContact) {
    return (
      <div className="app">

        <Navbar {...navbarProps} />

        <Contact
          onBack={() => setShowContact(false)}
        />

      </div>
    )
  }

  // Register Page
  if (showRegister) {
    return (
      <Register
        onBack={() => setShowRegister(false)}

        onLogin={() => {
          setShowRegister(false)
        }}

        onRegister={(name) => {
          setUserName(name)
          setShowRegister(false)
          setShowBusinessSetup(true)
        }}
      />
    )
  }

  // Business Setup Page
  if (showBusinessSetup) {
    return (
      <BusinessSetup
        userName={userName}

        onComplete={(file) => {
          setBusinessFile(file)
          setShowBusinessSetup(false)
          setShowDashboard(true)
        }}

        onBack={() => {
          setShowBusinessSetup(false)
          setShowRegister(true)
        }}
      />
    )
  }

  // Dashboard Page
  if (showDashboard) {
    return (
      <Dashboard
        businessFile={businessFile}
        userName={userName}

        onLogout={() => {
          setShowDashboard(false)
          setShowRegister(false)
          setShowBusinessSetup(false)
          setBusinessFile(null)
          setUserName('')
        }}
      />
    )
  }

  // Landing Page
  return (
    <div className="landing-page">

      {/* Background decorations */}
      <div className="bg-shape shape-one"></div>
      <div className="bg-shape shape-two"></div>

      {/* Navbar */}
      <Navbar {...navbarProps} />

      {/* Main Landing Section */}
      <main className="hero-section">

        <section className="hero-content">

          <div className="ai-badge">
            ✨ AI-Powered Business Intelligence & Forecasting
          </div>

          <h1>
            Turn Your Business Data
            <span> Into Smart Decisions</span>
          </h1>

          <p className="hero-description">
            Analyze your business performance, forecast future trends,
            detect anomalies, and get AI-powered recommendations to
            make smarter business decisions.
          </p>

          <div className="user-options">

            {/* New User */}
            <div className="user-card new-user">

              <div className="user-icon">
                👤
              </div>

              <h3>
                New User
              </h3>

              <p>
                Create your account and set up
                your business workspace.
              </p>

              <button
                className="primary-btn"
                onClick={() => setShowRegister(true)}
              >
                Get Started <span>→</span>
              </button>

              <small>
                Quick & easy setup
              </small>

            </div>

            {/* Existing User */}
            <div className="user-card existing-user">

              <div className="user-icon">
                🔐
              </div>

              <h3>
                Existing User
              </h3>

              <p>
                Already have an account?
                Continue to your dashboard.
              </p>

              <button
                className="secondary-btn"
                onClick={() => setShowDashboard(true)}
              >
                Login <span>→</span>
              </button>

              <small>
                Access your business dashboard
              </small>

            </div>

          </div>

          {/* Mini Features */}
          <div
            className="mini-features"
            id="features"
          >

            <div>
              <span>📊</span>
              <strong>Analytics</strong>
              <small>Real-time insights</small>
            </div>

            <div>
              <span>🔮</span>
              <strong>AI Forecasting</strong>
              <small>Predict future trends</small>
            </div>

            <div>
              <span>🛡️</span>
              <strong>Anomaly Detection</strong>
              <small>Detect unusual activity</small>
            </div>

            <div>
              <span>✨</span>
              <strong>AI Advisor</strong>
              <small>Smart recommendations</small>
            </div>

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer>

        <span>
          © 2026 BizIntel AI
        </span>

        <span>
          Smart Business Intelligence & Forecasting
        </span>

      </footer>

    </div>
  )
}

export default App