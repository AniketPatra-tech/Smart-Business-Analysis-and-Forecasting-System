import './Reports.css'

function Reports() {
  return (
    <div className="reports-page">

      <div className="reports-header">
        <div>
          <h1>Reports</h1>
          <p>Generate and manage your business reports</p>
        </div>

        <button className="generate-report-btn">
          + Generate Report
        </button>
      </div>

      <div className="report-summary">

        <div className="report-summary-card">
          <span>Total Reports</span>
          <strong>24</strong>
        </div>

        <div className="report-summary-card">
          <span>Generated This Month</span>
          <strong>8</strong>
        </div>

        <div className="report-summary-card">
          <span>Scheduled Reports</span>
          <strong>5</strong>
        </div>

        <div className="report-summary-card">
          <span>Last Generated</span>
          <strong>Today</strong>
        </div>

      </div>

      <section className="reports-card">

        <div className="reports-card-header">
          <div>
            <h3>Available Reports</h3>
            <p>View or download your business reports</p>
          </div>

          <button className="filter-btn">
            Filter ▾
          </button>
        </div>

        <div className="reports-list">

          <div className="report-row">
            <div className="report-icon">₹</div>

            <div className="report-info">
              <strong>Financial Performance Report</strong>
              <span>Revenue, expenses and profit analysis</span>
            </div>

            <span className="report-date">Today</span>

            <button className="download-report">↓ Download</button>
          </div>

          <div className="report-row">
            <div className="report-icon">▥</div>

            <div className="report-info">
              <strong>Sales Analytics Report</strong>
              <span>Sales trends and category performance</span>
            </div>

            <span className="report-date">Yesterday</span>

            <button className="download-report">↓ Download</button>
          </div>

          <div className="report-row">
            <div className="report-icon">⌁</div>

            <div className="report-info">
              <strong>Forecasting Report</strong>
              <span>AI-powered future business predictions</span>
            </div>

            <span className="report-date">2 days ago</span>

            <button className="download-report">↓ Download</button>
          </div>

          <div className="report-row">
            <div className="report-icon">!</div>

            <div className="report-info">
              <strong>Risk & Anomaly Report</strong>
              <span>Detected business risks and unusual activity</span>
            </div>

            <span className="report-date">3 days ago</span>

            <button className="download-report">↓ Download</button>
          </div>

        </div>

      </section>

    </div>
  )
}

export default Reports