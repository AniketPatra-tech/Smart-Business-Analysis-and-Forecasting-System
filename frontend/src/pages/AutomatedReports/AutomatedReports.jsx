import './AutomatedReports.css'

function AutomatedReports() {
  return (
    <div className="automated-reports-page">

      <div className="page-header">
        <div>
          <h1>Automated Reports</h1>
          <p>Schedule and manage your business reports automatically.</p>
        </div>

        <button className="primary-btn">
          + Create Schedule
        </button>
      </div>

      <div className="report-cards">
        <div className="report-card">
          <span>Active Reports</span>
          <h2>6</h2>
        </div>

        <div className="report-card">
          <span>Reports Sent</span>
          <h2>42</h2>
        </div>

        <div className="report-card">
          <span>Next Report</span>
          <h2>Tomorrow</h2>
        </div>
      </div>

      <div className="scheduled-reports">
        <h2>Scheduled Reports</h2>

        <div className="report-table">
          <div className="report-row report-head">
            <span>Report Name</span>
            <span>Frequency</span>
            <span>Recipients</span>
            <span>Status</span>
          </div>

          <div className="report-row">
            <span>Monthly Business Report</span>
            <span>Monthly</span>
            <span>3 Users</span>
            <span className="status-active">Active</span>
          </div>

          <div className="report-row">
            <span>Weekly Sales Report</span>
            <span>Weekly</span>
            <span>5 Users</span>
            <span className="status-active">Active</span>
          </div>

          <div className="report-row">
            <span>Daily Revenue Summary</span>
            <span>Daily</span>
            <span>2 Users</span>
            <span className="status-paused">Paused</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AutomatedReports