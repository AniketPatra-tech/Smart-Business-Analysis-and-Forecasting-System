import { useState } from 'react'
import './App.css'
import Register from './pages/Register/Register.jsx'
import BusinessSetup from './pages/BuisnessSetup/BusinessSetup.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Navbar from './components/Navbar/Navbar'
function App() {
  const [showRegister, setShowRegister] = useState(false)
  const [showBusinessSetup, setShowBusinessSetup] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)
  const [businessFile, setBusinessFile] = useState(null)
  const [userName, setUserName] = useState('')
  
  if (showRegister) {
  return (
    <Register
  onBack={() => setShowRegister(false)}
  onLogin={() => setShowRegister(false)}
  onRegister={(name) => {
  setUserName(name)
  setShowRegister(false)
  setShowBusinessSetup(true)
}}
/>
  )
}
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
      }}
    />
  )
}

  return (
    <div className="landing-page">

      {/* Background decorations */}
      <div className="bg-shape shape-one"></div>
      <div className="bg-shape shape-two"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Landing Section */}
      <main className="hero-section">

        <section className="hero-content">

          {/* AI Badge */}
          <div className="ai-badge">
            ✨ AI-Powered Business Intelligence & Forecasting
          </div>

          {/* Main Heading */}
          <h1>
            Turn Your Business Data
            <span> Into Smart Decisions</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            Analyze your business performance, forecast future trends,
            detect anomalies, and get AI-powered recommendations to
            make smarter business decisions.
          </p>

          {/* New User / Existing User */}
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

              <button className="secondary-btn" onClick={() => setShowDashboard(true)}>
                Login <span>→</span>
              </button>

              <small>
                Access your business dashboard
              </small>

            </div>

          </div>

          {/* Features */}
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