import { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'
import './Dashboard.css'
import Analytics from '../Analytics/Analytics'
import Forecasting from '../Forecasting/Forecasting'
import Reports from '../Reports/Reports'
import Customers from '../Customers/Customers'
import Products from '../Products/Products'
import Transactions from '../Transactions/Transactions'
import AIAdvisor from '../AIAdvisor/AIAdvisor'
import AnomalyDetection from '../AnomalyDetection/AnomalyDetection'
import AutomatedReports from '../AutomatedReports/AutomatedReports'
import UsersRoles from '../UsersRoles/UsersRoles'
import Settings from '../Settings/Settings'

function Dashboard({ businessFile, onLogout, userName }) {
  const [data, setData] = useState([])
  const [activePage, setActivePage] = useState('dashboard')
  const productTotals = data.reduce((totals, row) => {
  const product = row.Product || 'Unknown'
  const units = Number(row.Units) || 0

  if (!totals[product]) {
    totals[product] = {
      product,
      category: row.Category || 'Other',
      units: 0,
      revenue: 0
    }
  }

  totals[product].units += units
  totals[product].revenue += Number(row.Revenue) || 0

  return totals
}, {})

const topProducts = Object.values(productTotals)
  .sort((a, b) => b.units - a.units)
  .slice(0, 4)

  

  const totalRevenue = data.reduce(
  (sum, row) => sum + Number(row.Revenue || 0),
  0
)

const totalExpenses = data.reduce(
  (sum, row) => sum + Number(row.Expenses || 0),
  0
)

const totalProfit = totalRevenue - totalExpenses

const netMargin =
  totalRevenue > 0
    ? (totalProfit / totalRevenue) * 100
    : 0

    const formatExcelDate = (value) => {
  if (!value) return ''

  const date = new Date(
    Math.round((value - 25569) * 86400 * 1000)
  )

  return date.toLocaleDateString('en-IN', {
    month: 'short',
    day: 'numeric'
  })
}

const revenueChartData = data
  .filter(row => row.Revenue && row.Date)
  .map(row => ({
    date: row.Date,
    revenue: Number(row.Revenue),
    label: formatExcelDate(row.Date)
  }))

  

const forecastData = revenueChartData
  .slice(-7)
  .map(item => item.revenue)

const averageRevenue =
  forecastData.length > 0
    ? forecastData.reduce((sum, value) => sum + value, 0) /
      forecastData.length
    : 0

const forecastRevenue = averageRevenue * 1.1
const latestRevenue =
  revenueChartData.length > 0
    ? revenueChartData[revenueChartData.length - 1].revenue
    : 0

const firstRevenue =
  revenueChartData.length > 0
    ? revenueChartData[0].revenue
    : 0

const revenueTrend =
  firstRevenue > 0
    ? ((latestRevenue - firstRevenue) / firstRevenue) * 100
    : 0


  const categoryTotals = data.reduce((totals, row) => {
  const category = row.Category || 'Others'
  const revenue = Number(row.Revenue || 0)

  totals[category] = (totals[category] || 0) + revenue

  return totals
}, {})

const categoryTotalRevenue = Object.values(categoryTotals)
  .reduce((sum, value) => sum + value, 0)

const categoryData = Object.entries(categoryTotals)
  .map(([category, revenue]) => ({
    category,
    revenue,
    percentage:
      categoryTotalRevenue > 0
        ? (revenue / categoryTotalRevenue) * 100
        : 0
  }))
  .sort((a, b) => b.revenue - a.revenue)

  const categoryColors = {
  Electronics: '#6758df',
  Fashion: '#3b82f6',
  'Home & Living': '#20b2aa',
  Beauty: '#f5b335',
  Others: '#c5c7d6'
}

  const chartWidth = 700
const chartHeight = 220
const chartPadding = 20

const maxRevenue = Math.max(
  ...revenueChartData.map(item => item.revenue),
  1
)

const chartPoints = revenueChartData.map((item, index) => {
  const x =
    chartPadding +
    (index / Math.max(revenueChartData.length - 1, 1)) *
      (chartWidth - chartPadding * 2)

  const y =
    chartHeight -
    chartPadding -
    (item.revenue / maxRevenue) *
      (chartHeight - chartPadding * 2)

  return `${x},${y}`
})

const linePoints = chartPoints.join(' ')

const areaPoints = [
  `${chartPadding},${chartHeight - chartPadding}`,
  ...chartPoints,
  `${chartWidth - chartPadding},${chartHeight - chartPadding}`
].join(' ')

  useEffect(() => {
    if (businessFile) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result)
        const workbook = XLSX.read(data, { type: 'array' })
        const sheet = workbook.Sheets[workbook.SheetNames[0]]
        const jsonData = XLSX.utils.sheet_to_json(sheet)
        setData(jsonData)
      }
      reader.readAsArrayBuffer(businessFile)
    }
  }, [businessFile])

  return (
  <div className="dashboard-page">

    

      {/* ================= SIDEBAR ================= */}
      <aside className="dashboard-sidebar">

        <div className="dashboard-brand">
          <div className="dashboard-logo">✦</div>

          <div>
            <h2>BizIntel AI</h2>
            <span>Business Intelligence</span>
          </div>
        </div>

        <div className="menu-section">
          <small>MAIN</small>

          <button
  className={`menu-item ${activePage === 'dashboard' ? 'active' : ''}`}
  onClick={() => setActivePage('dashboard')}
>
  <span>⌂</span>
  Dashboard
</button>

          <button
  className={`menu-item ${activePage === 'analytics' ? 'active' : ''}`}
  onClick={() => setActivePage('analytics')}
>
  <span>▥</span>
  Analytics
</button>

          <button
  className={`menu-item ${activePage === 'forecasting' ? 'active' : ''}`}
  onClick={() => setActivePage('forecasting')}
>
            <span>⌁</span>
            Forecasting
          </button>

          <button
  className={`menu-item ${activePage === 'reports' ? 'active' : ''}`}
  onClick={() => setActivePage('reports')}
>
  <span>▤</span>
  Reports
</button>

          <button
  className={`menu-item ${activePage === 'customers' ? 'active' : ''}`}
  onClick={() => setActivePage('customers')}
>
  <span>♙</span>
  Customers
</button>

          <button
  className={`menu-item ${activePage === 'products' ? 'active' : ''}`}
  onClick={() => setActivePage('products')}
>
  <span>◇</span>
  Products
</button>
<button
  className={`menu-item ${activePage === 'transactions' ? 'active' : ''}`}
  onClick={() => setActivePage('transactions')}
>
  <span>▣</span>
  Transactions
</button>
        </div>

        <div className="menu-section">
          <small>AI AUTOMATION</small>

          <button
  className={`menu-item ${activePage === 'ai-advisor' ? 'active' : ''}`}
  onClick={() => setActivePage('ai-advisor')}
>
  <span>✦</span>
  AI Advisor
</button>

          <button
  className={`menu-item ${activePage === 'anomaly-detection' ? 'active' : ''}`}
  onClick={() => setActivePage('anomaly-detection')}
>
  <span>⚠</span>
  Anomaly Detection
</button>

          <button
  className={`menu-item ${activePage === 'automated-reports' ? 'active' : ''}`}
  onClick={() => setActivePage('automated-reports')}
>
  <span>▣</span>
  Automated Reports
</button>
        </div>

        <div className="menu-section">
          <small>SETTINGS</small>

          <button
  className={`menu-item ${activePage === 'users-roles' ? 'active' : ''}`}
  onClick={() => setActivePage('users-roles')}
>
  <span>♙</span>
  Users & Roles
</button>

          <button
  className={`menu-item ${activePage === 'settings' ? 'active' : ''}`}
  onClick={() => setActivePage('settings')}
>
  <span>⚙</span>
  Settings
</button>
        </div>

        <div className="sidebar-bottom">

          <div className="help-card">
            <div className="help-icon">?</div>

            <div>
              <strong>Need help?</strong>
              <small>Ask AI Advisor</small>
            </div>
          </div>

          <button
            className="logout-btn"
            onClick={onLogout}
          >
            ↪ Logout
          </button>

        </div>

      </aside>


      {/* ================= MAIN ================= */}
      <main className="dashboard-main">

        {/* TOPBAR */}
        <header className="dashboard-topbar">

          <div className="mobile-brand">
            <div className="dashboard-logo">✦</div>
            <strong>BizIntel AI</strong>
          </div>

          <div className="dashboard-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search anything..."
            />
          </div>

          <div className="topbar-actions">

            <button className="icon-btn">
              ☼
            </button>
            <button
  className="icon-btn notification"
  onClick={() => alert('You have 3 new notifications.')}
>
  🔔
  <span>3</span>
</button>

           <button
  className="profile"
  onClick={() => setActivePage('users-roles')}
>
  <div className="avatar">
    T
  </div>

  <div>
    <strong>{userName}</strong>
    <small>Administrator</small>
  </div>

  <span>⌄</span>
</button>

          </div>

        </header>


        {/* ================= CONTENT ================= */}
       <div className="dashboard-content">
  {activePage === 'analytics' ? (
  <Analytics data={data} />
  ) : activePage === 'forecasting' ? (
    <Forecasting />
  ) : activePage === 'reports' ? (
    <Reports />
  ) : activePage === 'customers' ? (
  <Customers />
) : activePage === 'products' ? (
  <Products />
) : activePage === 'transactions' ? (
  <Transactions />
) : activePage === 'ai-advisor' ? (
  <AIAdvisor />
) : activePage === 'anomaly-detection' ? (
  <AnomalyDetection />
) : activePage === 'automated-reports' ? (
  <AutomatedReports />
) : activePage === 'users-roles' ? (
  <UsersRoles />
) : activePage === 'settings' ? (
  <Settings />
) : (
    <>


          {/* WELCOME */}
          <section className="welcome-row">

            <div>

              <div className="welcome-badge">
                ✨ AI Insights Ready
              </div>

              <h1>
                Good morning, {userName} 👋
              </h1>

              <p>
                Here's what's happening with your business today.
              </p>

            </div>

            <div className="dashboard-actions">

              <button className="date-btn">
                ▣ May 18 – Jun 18, 2026
              </button>

              <button className="report-btn">
                ↓ Download Report
              </button>

            </div>

          </section>


          {/* ================= STATS ================= */}
          <section className="stats-grid">

            <div className="dashboard-stat">

              <div className="stat-header">
                <span>Total Revenue</span>

                <div className="stat-icon purple">
                  ₹
                </div>
              </div>

              <h2>
  ₹ {(totalRevenue / 100000).toFixed(2)} Lakh
</h2>

              <div className="stat-change positive">
                ↑ 18.6%
                <span>vs last 30 days</span>
              </div>

            </div>


            <div className="dashboard-stat">

              <div className="stat-header">
                <span>Total Profit</span>

                <div className="stat-icon green">
                  ↗
                </div>
              </div>

              <h2>
  ₹ {(totalProfit / 100000).toFixed(2)} Lakh
</h2>

              <div className="stat-change positive">
                ↑ 12.4%
                <span>vs last 30 days</span>
              </div>

            </div>


            <div className="dashboard-stat">

              <div className="stat-header">
                <span>Total Expenses</span>

                <div className="stat-icon orange">
                  ▤
                </div>
              </div>

              <h2>₹ 18.1 Lakh</h2>

              <div className="stat-change negative">
                ↑ 8.3%
                <span>vs last 30 days</span>
              </div>

            </div>


            <div className="dashboard-stat">

              <div className="stat-header">
                <span>Net Margin</span>

                <div className="stat-icon blue">
                  ◔
                </div>
              </div>

              <h2>
  {netMargin.toFixed(1)}%
</h2>

              <div className="stat-change positive">
                ↑ 5.2%
                <span>vs last 30 days</span>
              </div>

            </div>

          </section>


          {/* ================= CHARTS ================= */}
          <section className="dashboard-grid">

            {/* REVENUE */}
            <div className="dashboard-card revenue-card">

              <div className="card-heading">

                <div>
                  <h3>Revenue Overview</h3>
                  <p>Track your revenue performance</p>
                </div>

                <select>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>

              </div>

              <div className="revenue-chart">

                <svg
  className="revenue-svg"
  viewBox="0 0 700 220"
  preserveAspectRatio="none"
>
  {/* Area under the revenue line */}
  <polygon
    points={areaPoints}
    fill="rgba(103, 88, 223, 0.10)"
  />

  {/* Revenue line */}
  <polyline
    points={linePoints}
    fill="none"
    stroke="#6758df"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  />

  {/* Data points */}
  {chartPoints.map((point, index) => {
    const [x, y] = point.split(',')

    return (
      <circle
        key={index}
        cx={x}
        cy={y}
        r="4"
        fill="#6758df"
      />
    )
  })}
</svg>

                <div className="chart-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                


                <div className="chart-tooltip">
                  <strong>Jun 18, 2026</strong>
                  <span>Revenue: ₹24.8 Lakh</span>
                </div>

                <div className="chart-labels">
                 {revenueChartData.map((item, index) => (
  <span key={index}>
    {item.label}
  </span>
))}
                </div>

              </div>

            </div>


            {/* CATEGORY */}
            <div className="dashboard-card category-card">

              <div className="card-heading">

                <div>
                  <h3>Sales by Category</h3>
                  <p>Current sales distribution</p>
                </div>

              </div>

              <div className="category-content">

                <div className="big-donut">

                  <div>
                    <strong>₹24.8 L</strong>
                    <span>Total Sales</span>
                  </div>

                </div>

               <div className="category-list">

  {categoryData.map((item, index) => (
    <div
      key={index}
      className="category-item"
    >

      <span
        className="category-dot"
        style={{
          background:
            categoryColors[item.category] || '#999'
        }}
      ></span>

      <span className="category-name">
        {item.category}
      </span>

      <strong>
        {item.percentage.toFixed(1)}%
      </strong>

    </div>
  ))}

</div>

              </div>

            </div>

          </section>


          {/* ================= BOTTOM ================= */}
          <section className="bottom-grid">

            {/* FORECAST */}
            <div className="dashboard-card forecast-card">

              <div className="card-heading">

                <div>
                  <h3>Sales Forecasting</h3>
                  <p>AI prediction for the next 30 days</p>
                </div>

                <span className="ai-tag">
                  AI Prediction
                </span>

              </div>

              <div className="forecast-data-label">
  Recent Average: ₹{(averageRevenue / 100000).toFixed(2)} L
</div>

              <div className="forecast-chart">

                <div className="forecast-line historical"></div>

 <div
  className="forecast-line prediction"
  style={{
    transform: `scaleY(${averageRevenue > 0 ? forecastRevenue / averageRevenue : 1})`,
    transformOrigin: 'bottom'
  }}
></div>
  <div className="confidence-area"></div>

  <div className="forecast-value">
    Forecast: ₹{(forecastRevenue / 100000).toFixed(2)} L
  </div>

</div>

              
              <div className="forecast-labels">
                {revenueChartData.slice(-5).map((item, index) => (
  <span key={index}>
    {item.label}
  </span>
))}
              </div>

              <div className="forecast-legend">
                <span>━ Historical</span>
                <span>┄ Forecast</span>
                <span>▰ Confidence Range</span>
              </div>

            </div>


            {/* PRODUCTS */}
            <div className="dashboard-card products-card">

              <div className="card-heading">

                <div>
                  <h3>Top Selling Products</h3>
                  <p>Best performing products</p>
                </div>

                <button>View All →</button>

              </div>

              <div className="product-list">

                {topProducts.map((item, index) => (
  <div className="product-row" key={item.product}>

    <span className="rank">
      {String(index + 1).padStart(2, '0')}
    </span>

    <div className="product-image">
      {index === 0 ? '🎧' : index === 1 ? '⌚' : index === 2 ? '👕' : '👟'}
    </div>

    <div className="product-info">
      <strong>{item.product}</strong>
      <small>{item.category}</small>
    </div>

    <b>
      ₹{(item.revenue / 100000).toFixed(2)} L
    </b>

  </div>
))}

               

              </div>

            </div>


            {/* AI ADVISOR */}
            <div className="dashboard-card advisor-card">

              <div className="advisor-header">

                <div className="advisor-icon">
                  ✦
                </div>

                <div>
                  <h3>AI Business Advisor</h3>
                  <span>● Online</span>
                </div>

              </div>

              <div className="advisor-message">

                <strong>Hi {userName} 👋</strong>

                <p>
  I've analyzed your recent business data.
  Your revenue is trending{' '}
  <b>
    {revenueTrend >= 0 ? 'upward' : 'downward'}
  </b>{' '}
  by{' '}
  <b>
    {Math.abs(revenueTrend).toFixed(1)}%
  </b>.
</p>

              </div>

              <p className="advisor-question">
                What would you like to know?
              </p>

              <button>
                Why did my sales change?
              </button>

              <button>
                What will sell next month?
              </button>

              <button>
                How can I improve profit?
              </button>

              <div className="advisor-input">
                <span>Ask AI anything...</span>
                <b>➤</b>
              </div>

            </div>

          </section>


          {/* ================= ALERTS ================= */}
          <section className="alerts-card dashboard-card">

            <div className="card-heading">

              <div>
                <h3>Alerts & Anomalies</h3>
                <p>
                  Important business events detected by AI
                </p>
              </div>

              <button>
                View All →
              </button>

            </div>

            <div className="alert-list">

              <div className="alert-item danger">

                <div className="alert-icon">
                  !
                </div>

                <div>
                  <strong>Sales dropped by 23%</strong>
                  <p>
                    West India region · 2 hours ago
                  </p>
                </div>

                <span>High</span>

              </div>


              <div className="alert-item warning">

                <div className="alert-icon">
                  ₹
                </div>

                <div>
                  <strong>High expense detected</strong>
                  <p>
                    Marketing category · 5 hours ago
                  </p>
                </div>

                <span>Medium</span>

              </div>


              <div className="alert-item info">

                <div className="alert-icon">
                  ⌁
                </div>

                <div>
                  <strong>Unusual transaction detected</strong>
                  <p>
                    ₹78,999 · 1 day ago
                  </p>
                </div>

                <span>Review</span>

              </div>

            </div>

          </section>
          </>
   )}

        </div>

      </main>
      

    </div>
  )
}

export default Dashboard