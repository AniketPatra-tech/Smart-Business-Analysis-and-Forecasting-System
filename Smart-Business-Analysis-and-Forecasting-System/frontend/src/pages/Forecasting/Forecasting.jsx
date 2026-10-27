import './Forecasting.css'

function Forecasting() {
  return (
    <div className="forecasting-page">

      <div className="forecasting-header">
        <div>
          <h1>Forecasting</h1>
          <p>AI-powered predictions for your business performance</p>
        </div>

        <button className="forecast-period">
          Next 30 Days ▾
        </button>
      </div>

      {/* KPI CARDS */}
      <section className="forecast-stats">

        <div className="forecast-stat-card">
          <span>Predicted Revenue</span>
          <h2>₹27.3 Lakh</h2>
          <p className="positive">↑ 10.2% expected growth</p>
        </div>

        <div className="forecast-stat-card">
          <span>Predicted Profit</span>
          <h2>₹9.8 Lakh</h2>
          <p className="positive">↑ 8.6% expected growth</p>
        </div>

        <div className="forecast-stat-card">
          <span>Forecast Accuracy</span>
          <h2>94.2%</h2>
          <p>High confidence</p>
        </div>

        <div className="forecast-stat-card">
          <span>Risk Level</span>
          <h2>Low</h2>
          <p className="positive">Stable outlook</p>
        </div>

      </section>

      {/* FORECAST CHART */}
      <section className="forecast-card">

        <div className="forecast-card-header">
          <div>
            <h3>Revenue Forecast</h3>
            <p>Historical performance vs AI prediction</p>
          </div>

          <span className="ai-badge">✦ AI Prediction</span>
        </div>

        <div className="forecast-visual">

          <div className="forecast-y-axis">
            <span>₹30L</span>
            <span>₹20L</span>
            <span>₹10L</span>
            <span>₹0</span>
          </div>

          <div className="forecast-chart-area">

            <div className="chart-grid-line"></div>
            <div className="chart-grid-line"></div>
            <div className="chart-grid-line"></div>
            <div className="chart-grid-line"></div>

            <div className="history-line"></div>

            <div className="prediction-line"></div>

            <div className="forecast-divider">
              <span>Today</span>
            </div>

          </div>

        </div>

        <div className="forecast-legend">
          <span>
            <i className="legend-history"></i>
            Historical
          </span>

          <span>
            <i className="legend-prediction"></i>
            AI Forecast
          </span>

          <span>
            <i className="legend-confidence"></i>
            Confidence Range
          </span>
        </div>

      </section>

      {/* BOTTOM SECTION */}
      <section className="forecast-bottom">

        <div className="forecast-card">
          <div className="forecast-card-header">
            <div>
              <h3>Forecast Insights</h3>
              <p>AI-generated business predictions</p>
            </div>
          </div>

          <div className="insight-list">

            <div className="forecast-insight">
              <div className="insight-icon">↗</div>
              <div>
                <strong>Revenue is expected to increase</strong>
                <p>
                  Your current sales trend suggests continued revenue
                  growth over the next 30 days.
                </p>
              </div>
            </div>

            <div className="forecast-insight">
              <div className="insight-icon">₹</div>
              <div>
                <strong>Profit margin may improve</strong>
                <p>
                  Stable expenses and increasing sales could improve
                  overall profitability.
                </p>
              </div>
            </div>

            <div className="forecast-insight">
              <div className="insight-icon">!</div>
              <div>
                <strong>Monitor high-risk categories</strong>
                <p>
                  Keep monitoring categories with unpredictable sales
                  patterns.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="forecast-card">
          <div className="forecast-card-header">
            <div>
              <h3>Forecast Summary</h3>
              <p>Expected business performance</p>
            </div>
          </div>

          <div className="summary-row">
            <span>Expected Revenue</span>
            <strong>₹27.3 L</strong>
          </div>

          <div className="summary-row">
            <span>Expected Profit</span>
            <strong>₹9.8 L</strong>
          </div>

          <div className="summary-row">
            <span>Growth Rate</span>
            <strong className="positive">+10.2%</strong>
          </div>

          <div className="summary-row">
            <span>Confidence</span>
            <strong>94.2%</strong>
          </div>

          <button className="generate-btn">
            ✦ Generate Detailed Forecast
          </button>

        </div>

      </section>

    </div>
  )
}

export default Forecasting