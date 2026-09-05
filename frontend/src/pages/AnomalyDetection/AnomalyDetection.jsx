import './AnomalyDetection.css'

function AnomalyDetection() {
  return (
    <div className="anomaly-page">

      <div className="page-header">
        <div>
          <h1>Anomaly Detection</h1>
          <p>Identify unusual patterns and suspicious business activity.</p>
        </div>

        <button className="primary-btn">
          Run Detection
        </button>
      </div>

      <div className="anomaly-cards">
        <div className="anomaly-card">
          <span>Total Transactions</span>
          <h2>1,248</h2>
        </div>

        <div className="anomaly-card">
          <span>Anomalies Found</span>
          <h2>18</h2>
        </div>

        <div className="anomaly-card">
          <span>Risk Level</span>
          <h2 className="risk-medium">Medium</h2>
        </div>
      </div>

      <div className="anomaly-section">
        <h2>Detected Anomalies</h2>

        <div className="anomaly-table">
          <div className="table-row table-head">
            <span>Transaction</span>
            <span>Type</span>
            <span>Amount</span>
            <span>Risk</span>
          </div>

          <div className="table-row">
            <span>#TXN-1024</span>
            <span>Unusual Amount</span>
            <span>₹48,500</span>
            <span className="risk-high">High</span>
          </div>

          <div className="table-row">
            <span>#TXN-1018</span>
            <span>Repeated Transaction</span>
            <span>₹12,800</span>
            <span className="risk-medium">Medium</span>
          </div>

          <div className="table-row">
            <span>#TXN-1009</span>
            <span>Unusual Frequency</span>
            <span>₹8,200</span>
            <span className="risk-low">Low</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AnomalyDetection