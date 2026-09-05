import './Analytics.css'

function Analytics({ data = [] }) {

  // Calculate values from uploaded data
  const totalSales = data.reduce((sum, row) => {
    return sum + (Number(row.Revenue) || Number(row.Sales) || Number(row.Amount) || 0)
  }, 0)

  const totalProfit = data.reduce((sum, row) => {
    return sum + (Number(row.Profit) || 0)
  }, 0)

  const netMargin = totalSales > 0
    ? ((totalProfit / totalSales) * 100).toFixed(1)
    : 0

  const averageOrder = data.length > 0
    ? totalSales / data.length
    : 0

  // Category calculation
  const categoryTotals = {}

  data.forEach((row) => {
    const category =
      row.Category ||
      row.category ||
      row.Product_Category ||
      'Other'

    const amount =
      Number(row.Revenue) ||
      Number(row.Sales) ||
      Number(row.Amount) ||
      0

    categoryTotals[category] =
      (categoryTotals[category] || 0) + amount
  })

  const categories = Object.entries(categoryTotals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)

  const categoryTotal = categories.reduce(
    (sum, [, value]) => sum + value,
    0
  )

  // Format currency
  const formatCurrency = (value) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(1)} Cr`
    }

    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(1)} L`
    }

    if (value >= 1000) {
      return `₹${(value / 1000).toFixed(1)}K`
    }

    return `₹${Math.round(value)}`
  }

  return (
    <div className="analytics-page">

      {/* Header */}
      <div className="analytics-header">
        <div>
          <h1>Analytics</h1>
          <p>
            Understand your business performance through detailed data analysis.
          </p>
        </div>

        <div className="analytics-actions">
          <button className="date-btn">
            📅 Uploaded Data
          </button>

          <button className="export-btn">
            ↓ Export Report
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="analytics-stats">

        <div className="analytics-stat-card">
          <small>Total Sales</small>
          <strong>{formatCurrency(totalSales)}</strong>
          <span className="stat-positive">
            {data.length > 0 ? '✓ Data Loaded' : '—'}
          </span>
          <p>Based on uploaded business data</p>
        </div>

        <div className="analytics-stat-card">
          <small>Total Profit</small>
          <strong>{formatCurrency(totalProfit)}</strong>
          <span className="stat-positive">
            {totalProfit > 0 ? '✓ Positive' : '—'}
          </span>
          <p>Based on uploaded business data</p>
        </div>

        <div className="analytics-stat-card">
          <small>Net Margin</small>
          <strong>{netMargin}%</strong>
          <span className="stat-positive">
            {totalSales > 0 ? '✓ Calculated' : '—'}
          </span>
          <p>Profit as percentage of sales</p>
        </div>

        <div className="analytics-stat-card">
          <small>Average Order</small>
          <strong>{formatCurrency(averageOrder)}</strong>
          <span className="stat-positive">
            {data.length > 0 ? '✓ Calculated' : '—'}
          </span>
          <p>Average value per transaction</p>
        </div>

      </div>

      {/* Main Analytics Grid */}
      <div className="analytics-grid">

        {/* Revenue Chart */}
        <div className="analytics-card revenue-card">

          <div className="analytics-card-header">
            <div>
              <h3>Revenue Overview</h3>
              <p>
                {data.length > 0
                  ? `Analysis of ${data.length} uploaded records`
                  : 'Upload business data to view revenue'}
              </p>
            </div>

            <span>Business Data</span>
          </div>

          <div className="analytics-chart">

            <div className="chart-y-axis">
              <span>Revenue</span>
              <span></span>
              <span></span>
              <span>₹0</span>
            </div>

            <div className="chart-area">

              <div className="chart-grid-line"></div>
              <div className="chart-grid-line"></div>
              <div className="chart-grid-line"></div>
              <div className="chart-grid-line"></div>

              <div
                className="revenue-curve"
                style={{
                  height: `${Math.min(
                    Math.max(
                      (totalSales / Math.max(totalSales, 1)) * 80,
                      20
                    ),
                    80
                  )}%`
                }}
              >
                <span className="chart-point point-one"></span>
                <span className="chart-point point-two"></span>
                <span className="chart-point point-three"></span>
                <span className="chart-point point-four"></span>
                <span className="chart-point point-five"></span>
                <span className="chart-point point-six"></span>
              </div>

              <div className="chart-x-axis">
                <span>Start</span>
                <span>Period 1</span>
                <span>Period 2</span>
                <span>Period 3</span>
                <span>Current</span>
              </div>

            </div>

          </div>

        </div>

        {/* Sales by Category */}
        <div className="analytics-card category-card">

          <div className="analytics-card-header">
            <div>
              <h3>Sales by Category</h3>
              <p>Category contribution</p>
            </div>
          </div>

          {categories.length > 0 ? (

            <div className="category-content">

              <div className="analytics-donut">
                <div>
                  <strong>{formatCurrency(categoryTotal)}</strong>
                  <small>Total Sales</small>
                </div>
              </div>

              <div className="analytics-category-list">

                {categories.map(([category, value]) => {

                  const percentage =
                    categoryTotal > 0
                      ? Math.round((value / categoryTotal) * 100)
                      : 0

                  return (
                    <div key={category}>
                      <span className="category-dot"></span>

                      <p>{category}</p>

                      <strong>{percentage}%</strong>
                    </div>
                  )
                })}

              </div>

            </div>

          ) : (

            <div className="empty-analytics">
              <p>No category data available.</p>
              <small>
                Upload a dataset containing a Category column.
              </small>
            </div>

          )}

        </div>

      </div>

      {/* Bottom Analytics */}
      <div className="analytics-bottom-grid">

        {/* Dataset Summary */}
        <div className="analytics-card performance-card">

          <div className="analytics-card-header">
            <div>
              <h3>Dataset Summary</h3>
              <p>Overview of uploaded business records</p>
            </div>
          </div>

          <div className="performance-bars">

            <div className="performance-item">
              <span>Total Records</span>

              <div className="bar">
                <i style={{ width: '100%' }}></i>
              </div>

              <strong>{data.length}</strong>
            </div>

            <div className="performance-item">
              <span>Total Sales</span>

              <div className="bar">
                <i
                  style={{
                    width: totalSales > 0 ? '90%' : '0%'
                  }}
                ></i>
              </div>

              <strong>{formatCurrency(totalSales)}</strong>
            </div>

            <div className="performance-item">
              <span>Total Profit</span>

              <div className="bar">
                <i
                  style={{
                    width: totalProfit > 0 ? '75%' : '0%'
                  }}
                ></i>
              </div>

              <strong>{formatCurrency(totalProfit)}</strong>
            </div>

          </div>

        </div>

        {/* AI Insights */}
        <div className="analytics-card insights-card">

          <div className="analytics-card-header">
            <div>
              <h3>AI Insights</h3>
              <p>Business performance highlights</p>
            </div>
          </div>

          <div className="insight-item">
            <span>📊</span>

            <div>
              <strong>Data analyzed</strong>

              <p>
                {data.length > 0
                  ? `${data.length} business records are currently being analyzed.`
                  : 'Upload business data to generate insights.'}
              </p>
            </div>
          </div>

          <div className="insight-item">
            <span>💰</span>

            <div>
              <strong>Profit performance</strong>

              <p>
                {totalProfit > 0
                  ? `Your current profit is ${formatCurrency(totalProfit)} with a ${netMargin}% net margin.`
                  : 'Profit information will appear when your dataset contains a Profit column.'}
              </p>
            </div>
          </div>

          <div className="insight-item">
            <span>💡</span>

            <div>
              <strong>Business opportunity</strong>

              <p>
                {categories.length > 0
                  ? `${categories[0][0]} is currently your strongest sales category.`
                  : 'Category-based opportunities will appear after uploading category data.'}
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Analytics