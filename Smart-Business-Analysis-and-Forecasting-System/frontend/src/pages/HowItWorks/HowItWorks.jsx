import './HowItWorks.css'

function HowItWorks({ onBack }) {
  return (
    <section className="how-section">

      <div className="how-container">

        <div className="how-badge">
          ⚡ How It Works
        </div>

        <h1>
          From Business Data
          <span> To Smart Decisions</span>
        </h1>

        <p className="how-description">
          Stratify turns your business data into meaningful insights,
          forecasts, and recommendations through a simple process.
        </p>

        <div className="how-steps">

          {/* Step 1 */}
          <div className="how-card">
            <div className="step-number">01</div>

            <div className="step-icon">
              📁
            </div>

            <h3>Upload Your Data</h3>

            <p>
              Upload your business data in CSV or Excel format
              to get started.
            </p>
          </div>

          {/* Step 2 */}
          <div className="how-card">
            <div className="step-number">02</div>

            <div className="step-icon">
              📊
            </div>

            <h3>Analyze Your Business</h3>

            <p>
              Stratify analyzes your data and provides clear
              insights into your business performance.
            </p>
          </div>

          {/* Step 3 */}
          <div className="how-card">
            <div className="step-number">03</div>

            <div className="step-icon">
              🔮
            </div>

            <h3>Forecast Future Trends</h3>

            <p>
              AI-powered forecasting helps you understand
              possible future business trends.
            </p>
          </div>

          {/* Step 4 */}
          <div className="how-card">
            <div className="step-number">04</div>

            <div className="step-icon">
              🤖
            </div>

            <h3>Get Smart Recommendations</h3>

            <p>
              Receive AI-powered recommendations to support
              better business decisions.
            </p>
          </div>

        </div>

        <div className="how-result">
          <div className="result-icon">✨</div>

          <div>
            <h3>Make Smarter Decisions</h3>
            <p>
              Transform your business data into actionable intelligence.
            </p>
          </div>
        </div>

        <button className="how-back-btn" onClick={onBack}>
          ← Back to Home
        </button>

      </div>

    </section>
  )
}

export default HowItWorks