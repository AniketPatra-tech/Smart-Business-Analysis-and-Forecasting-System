import './AIAdvisor.css'

function AIAdvisor() {
  return (
    <div className="ai-advisor-page">

      <div className="ai-advisor-header">
        <div>
          <h1>AI Business Advisor</h1>
          <p>Get AI-powered insights and recommendations for your business</p>
        </div>

        <div className="ai-online">
          <span>●</span> AI Online
        </div>
      </div>

      <section className="advisor-layout">

        <div className="advisor-chat-card">

          <div className="advisor-chat-header">
            <div className="advisor-profile">
              <div className="advisor-avatar">✦</div>
              <div>
                <strong>BizIntel AI Advisor</strong>
                <small>Business Intelligence Assistant</small>
              </div>
            </div>

            <span className="online-dot">● Online</span>
          </div>

          <div className="advisor-chat-body">

            <div className="ai-message">
              <div className="message-avatar">✦</div>
              <div className="message-bubble">
                <strong>Hello! 👋</strong>
                <p>
                  I've analyzed your business data. I can help you
                  understand sales, revenue, profit, risks and forecasts.
                </p>
              </div>
            </div>

            <div className="suggestion-title">
              Try asking:
            </div>

            <div className="suggestion-buttons">
              <button>Why did my sales change?</button>
              <button>What will sell next month?</button>
              <button>How can I improve profit?</button>
              <button>Show me business risks</button>
            </div>

          </div>

          <div className="advisor-input-area">
            <input
              type="text"
              placeholder="Ask AI anything about your business..."
            />

            <button>➤</button>
          </div>

        </div>

        <div className="advisor-insights-card">

          <h3>Quick Insights</h3>
          <p>Recent AI-generated recommendations</p>

          <div className="quick-insight">
            <span>↗</span>
            <div>
              <strong>Revenue Growth</strong>
              <small>Revenue is showing an upward trend.</small>
            </div>
          </div>

          <div className="quick-insight">
            <span>₹</span>
            <div>
              <strong>Profit Opportunity</strong>
              <small>Reducing high expenses may improve margins.</small>
            </div>
          </div>

          <div className="quick-insight">
            <span>!</span>
            <div>
              <strong>Risk Detected</strong>
              <small>Monitor unusual transaction activity.</small>
            </div>
          </div>

          <div className="advisor-status">
            <strong>AI Analysis Status</strong>
            <span>● Ready</span>
          </div>

        </div>

      </section>

    </div>
  )
}

export default AIAdvisor