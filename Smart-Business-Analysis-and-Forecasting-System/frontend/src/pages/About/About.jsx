import './About.css'

function About({ onBack }) {
  return (
    <section className="about-section">

      <div className="about-container">

        <div className="about-badge">
          ✨ About Stratify
        </div>

        <h1>
          Intelligent Business
          <span> Starts With Data</span>
        </h1>

        <p className="about-description">
          Stratify is an AI-powered Business Intelligence and
          Forecasting System designed to help businesses understand
          their data and make smarter decisions.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <div className="about-icon">📊</div>
            <h3>Business Analytics</h3>
            <p>
              Analyze your business performance and understand
              important trends through clear data insights.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">🔮</div>
            <h3>AI Forecasting</h3>
            <p>
              Predict future business trends and prepare for
              upcoming opportunities using intelligent forecasting.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">🛡️</div>
            <h3>Anomaly Detection</h3>
            <p>
              Detect unusual activities and identify potential
              problems in your business data.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">🤖</div>
            <h3>AI Business Advisor</h3>
            <p>
              Get AI-powered recommendations to make smarter
              and more informed business decisions.
            </p>
          </div>

        </div>

        <button className="about-back-btn" onClick={onBack}>
          ← Back to Home
        </button>

      </div>

    </section>
  )
}

export default About