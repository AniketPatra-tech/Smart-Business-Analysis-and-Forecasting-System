import "./Features.css";

function Features() {
  const features = [
    {
      icon: "📊",
      title: "Business Analytics",
      description:
        "Analyze revenue, profit, sales performance, and key business metrics through interactive dashboards.",
    },
    {
      icon: "📈",
      title: "Financial Forecasting",
      description:
        "Predict future revenue, expenses, and growth trends using intelligent forecasting models.",
    },
    {
      icon: "🤖",
      title: "AI Advisor",
      description:
        "Receive AI-powered business recommendations and strategic insights to support better decision-making.",
    },
    {
      icon: "🚨",
      title: "Anomaly Detection",
      description:
        "Identify unusual business activities, suspicious transactions, and potential risks automatically.",
    },
    {
      icon: "📑",
      title: "Automated Reports",
      description:
        "Generate detailed business reports, summaries, and insights with minimal manual effort.",
    },
    {
      icon: "👥",
      title: "User & Role Management",
      description:
        "Manage administrators, analysts, managers, and team members with secure role-based access.",
    },
    {
      icon: "📦",
      title: "Product Insights",
      description:
        "Track product performance, category trends, and top-selling items across your business.",
    },
    {
      icon: "💰",
      title: "Transaction Monitoring",
      description:
        "Monitor transaction history, revenue flow, and financial activities from one centralized platform.",
    },
  ];

  return (
    <section className="features-page">

      {/* Header */}
      <div className="features-header">
        <span className="features-badge">
          ✨ Powerful Business Intelligence
        </span>

        <h1>
          Everything You Need for
          <span> Smarter Business Decisions</span>
        </h1>

        <p>
          Stratify combines Artificial Intelligence, Business Analytics,
          Financial Forecasting, and Automation to help organizations
          understand their data and make confident decisions.
        </p>
      </div>

      {/* Features Grid */}
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <div className="feature-content">
              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>

          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="features-bottom">
        <h2>
          Turn Your Data Into
          <span> Business Intelligence</span>
        </h2>

        <p>
          From analyzing your current performance to forecasting future
          opportunities, Stratify gives you the tools to understand,
          monitor, and improve your business.
        </p>
      </div>

    </section>
  );
}

export default Features;