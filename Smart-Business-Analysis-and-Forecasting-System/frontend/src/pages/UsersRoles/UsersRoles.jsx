import './UsersRoles.css'

function UsersRoles() {
  return (
    <div className="users-roles-page">

      <div className="page-header">
        <div>
          <h1>Users & Roles</h1>
          <p>Manage team members and their access permissions.</p>
        </div>

        <button className="primary-btn">
          + Add User
        </button>
      </div>

      <div className="user-cards">
        <div className="user-card">
          <span>Total Users</span>
          <h2>8</h2>
        </div>

        <div className="user-card">
          <span>Administrators</span>
          <h2>2</h2>
        </div>

        <div className="user-card">
          <span>Active Users</span>
          <h2>7</h2>
        </div>
      </div>

      <div className="users-section">
        <h2>Team Members</h2>

        <div className="users-table">

          <div className="users-row users-head">
            <span>Name</span>
            <span>Email</span>
            <span>Role</span>
            <span>Status</span>
          </div>

          <div className="users-row">
            <span>Admin User</span>
            <span>admin@bizintel.ai</span>
            <span>Administrator</span>
            <span className="user-active">Active</span>
          </div>

          <div className="users-row">
            <span>Sales Manager</span>
            <span>sales@bizintel.ai</span>
            <span>Manager</span>
            <span className="user-active">Active</span>
          </div>

          <div className="users-row">
            <span>Business Analyst</span>
            <span>analyst@bizintel.ai</span>
            <span>Analyst</span>
            <span className="user-active">Active</span>
          </div>

          <div className="users-row">
            <span>Marketing Team</span>
            <span>marketing@bizintel.ai</span>
            <span>Viewer</span>
            <span className="user-inactive">Inactive</span>
          </div>

        </div>
      </div>

    </div>
  )
}

export default UsersRoles