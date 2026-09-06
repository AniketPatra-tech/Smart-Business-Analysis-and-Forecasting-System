import './Contact.css'

function Contact({ onBack }) {
  return (
    <section className="contact-section">

      <div className="contact-container">

        {/* Header */}
        <div className="contact-badge">
          💬 Contact Us
        </div>

        <h1>
          Let's Talk About
          <span>Your Business</span>
        </h1>

        <p className="contact-description">
          Have a question, need help, or want to learn more about
          Stratify? Send us a message and our team will be happy to help.
        </p>

        {/* Main Content */}
        <div className="contact-content">

          {/* Get In Touch */}
          <div className="contact-info">

            <div className="contact-info-header">
              <span className="contact-small-title">
                CONTACT SUPPORT
              </span>

              <h2>Get In Touch</h2>

              <p>
                Have questions about Stratify? Our team is ready to
                help you understand the platform and get the most
                from your business data.
              </p>
            </div>

            {/* Email */}
            <div className="contact-item">
              <div className="contact-icon">
                ✉️
              </div>

              <div>
                <h3>Email Support</h3>
                <p>support@stratify.ai</p>
              </div>
            </div>

            {/* Business Support */}
            <div className="contact-item">
              <div className="contact-icon">
                💼
              </div>

              <div>
                <h3>Business Support</h3>
                <p>
                  Get help with analytics, forecasting and reports
                </p>
              </div>
            </div>

            {/* Response */}
            <div className="contact-item">
              <div className="contact-icon">
                ⚡
              </div>

              <div>
                <h3>Quick Response</h3>
                <p>
                  We aim to respond to your message within 24 hours
                </p>
              </div>
            </div>

            {/* Note */}
            <div className="contact-note">
              <span>✨</span>

              <p>
                We're here to help you turn your business data
                into smarter decisions.
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="contact-form">

            <h2>Send Us a Message</h2>

            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Message</label>

              <textarea
                rows="5"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              className="send-btn"
              type="button"
              onClick={() => alert('Your message has been submitted!')}
            >
              Send Message →
            </button>

          </div>

        </div>

        {/* Back Button */}
        <button
          className="contact-back-btn"
          onClick={onBack}
        >
          ← Back to Home
        </button>

      </div>

    </section>
  )
}

export default Contact