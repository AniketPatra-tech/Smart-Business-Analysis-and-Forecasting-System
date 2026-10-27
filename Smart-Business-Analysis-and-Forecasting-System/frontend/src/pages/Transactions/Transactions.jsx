import './Transactions.css'

function Transactions() {
  const transactions = [
    {
      id: '#TXN-1048',
      customer: 'Rahul Sharma',
      product: 'Wireless Headphones',
      amount: '₹12,499',
      date: 'Jun 18, 2026',
      status: 'Completed',
    },
    {
      id: '#TXN-1047',
      customer: 'Priya Das',
      product: 'Smart Watch',
      amount: '₹8,999',
      date: 'Jun 18, 2026',
      status: 'Completed',
    },
    {
      id: '#TXN-1046',
      customer: 'Arjun Mehta',
      product: 'Premium T-Shirt',
      amount: '₹2,499',
      date: 'Jun 17, 2026',
      status: 'Pending',
    },
    {
      id: '#TXN-1045',
      customer: 'Sneha Roy',
      product: 'Running Shoes',
      amount: '₹4,299',
      date: 'Jun 17, 2026',
      status: 'Completed',
    },
  ]

  return (
    <div className="transactions-page">

      <div className="transactions-header">
        <div>
          <h1>Transactions</h1>
          <p>Monitor and manage your business transactions</p>
        </div>

        <button className="export-transactions-btn">
          ↓ Export Transactions
        </button>
      </div>

      <section className="transaction-stats">

        <div className="transaction-stat-card">
          <span>Total Transactions</span>
          <strong>3,842</strong>
          <small>↑ 16.8% this month</small>
        </div>

        <div className="transaction-stat-card">
          <span>Total Transaction Value</span>
          <strong>₹24.8 L</strong>
          <small>↑ 14.2% this month</small>
        </div>

        <div className="transaction-stat-card">
          <span>Completed</span>
          <strong>3,621</strong>
          <small>94.2% of transactions</small>
        </div>

        <div className="transaction-stat-card">
          <span>Pending</span>
          <strong>221</strong>
          <small className="warning-text">Needs attention</small>
        </div>

      </section>

      <section className="transactions-card">

        <div className="transactions-card-header">
          <div>
            <h3>Recent Transactions</h3>
            <p>Latest business transactions</p>
          </div>

          <input
            className="transaction-search"
            type="text"
            placeholder="Search transactions..."
          />
        </div>

        <div className="transaction-table">

          <div className="transaction-table-header">
            <span>Transaction</span>
            <span>Customer</span>
            <span>Product</span>
            <span>Amount</span>
            <span>Date</span>
            <span>Status</span>
          </div>

          {transactions.map((transaction) => (
            <div
              className="transaction-table-row"
              key={transaction.id}
            >
              <strong>{transaction.id}</strong>

              <span>{transaction.customer}</span>

              <span>{transaction.product}</span>

              <strong>{transaction.amount}</strong>

              <span>{transaction.date}</span>

              <span
                className={
                  transaction.status === 'Pending'
                    ? 'transaction-status pending'
                    : 'transaction-status'
                }
              >
                {transaction.status}
              </span>
            </div>
          ))}

        </div>

      </section>

    </div>
  )
}

export default Transactions