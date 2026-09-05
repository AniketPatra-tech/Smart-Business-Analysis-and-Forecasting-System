import './Settings.css'

function Settings() {
  return (
    <div className="settings-page">

      <div className="page-header">
        <div>
          <h1>Settings</h1>
          <p>
            Manage your BizIntel AI preferences and business settings.
          </p>
        </div>

        <button className="primary-btn">
          Save Changes
        </button>
      </div>

      <div className="settings-grid">

        <div className="settings-card">
          <h2>Business Settings</h2>
          <p>Update your business information.</p>

          <label>Business Name</label>

          <input
            type="text"
            placeholder="Your Business Name"
          />

          <label>Business Type</label>

          <select>
            <option>Retail</option>
            <option>E-commerce</option>
            <option>Manufacturing</option>
            <option>Services</option>
          </select>
        </div>

        <div className="settings-card">
          <h2>Notifications</h2>
          <p>Choose which notifications you want to receive.</p>

          <div className="setting-option">
            <div>
              <strong>Revenue Alerts</strong>
              <small>
                Get notified about major revenue changes.
              </small>
            </div>

            <input
              type="checkbox"
              defaultChecked
            />
          </div>

          <div className="setting-option">
            <div>
              <strong>Anomaly Alerts</strong>
              <small>
                Receive alerts when unusual activity is detected.
              </small>
            </div>

            <input
              type="checkbox"
              defaultChecked
            />
          </div>

          <div className="setting-option">
            <div>
              <strong>Weekly Reports</strong>
              <small>
                Receive your weekly business summary.
              </small>
            </div>

            <input type="checkbox" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Settings