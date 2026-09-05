import './Customers.css'

function Customers() {
  const customers = [
    { name: 'Aniket Patra', email: 'aniket@example.com', orders: 24, spent: '₹1.82 L' },
    { name: 'Ananya Mahapatra', email: 'ananya@example.com', orders: 19, spent: '₹1.45 L' },
    { name: 'Subhajit Shee', email: 'subhajit@example.com', orders: 16, spent: '₹1.21 L' },
    { name: 'Samapti Das', email: 'samapti@example.com', orders: 14, spent: '₹98 K' },
  ]

  return (
    <div className="customers-page">

      <div className="customers-header">
        <div>
          <h1>Customers</h1>
          <p>Manage and analyze your customer data</p>
        </div>

        <button className="add-customer-btn">
          + Add Customer
        </button>
      </div>

      <section className="customer-stats">

        <div className="customer-stat-card">
          <span>Total Customers</span>
          <strong>1,248</strong>
          <small>↑ 12.5% this month</small>
        </div>

        <div className="customer-stat-card">
          <span>New Customers</span>
          <strong>186</strong>
          <small>↑ 8.4% this month</small>
        </div>

        <div className="customer-stat-card">
          <span>Active Customers</span>
          <strong>924</strong>
          <small>74.0% of total</small>
        </div>

        <div className="customer-stat-card">
          <span>Average Customer Value</span>
          <strong>₹4,820</strong>
          <small>↑ 6.2% this month</small>
        </div>

      </section>

      <section className="customers-card">

        <div className="customers-card-header">
          <div>
            <h3>Customer List</h3>
            <p>Recently active customers</p>
          </div>

          <input
            className="customer-search"
            type="text"
            placeholder="Search customers..."
          />
        </div>

        <div className="customer-table">

          <div className="customer-table-header">
            <span>Customer</span>
            <span>Orders</span>
            <span>Total Spent</span>
            <span>Status</span>
          </div>

          {customers.map((customer) => (
            <div className="customer-table-row" key={customer.email}>

              <div className="customer-name">
                <div className="customer-avatar">
                  {customer.name.charAt(0)}
                </div>

                <div>
                  <strong>{customer.name}</strong>
                  <small>{customer.email}</small>
                </div>
              </div>

              <span>{customer.orders}</span>

              <strong>{customer.spent}</strong>

              <span className="customer-status">
                Active
              </span>

            </div>
          ))}

        </div>

      </section>

    </div>
  )
}

export default Customers