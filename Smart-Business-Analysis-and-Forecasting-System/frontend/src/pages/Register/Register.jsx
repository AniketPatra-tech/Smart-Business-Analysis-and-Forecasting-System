
import { useState } from 'react'
import './Register.css'
import Navbar from '../../components/Navbar/Navbar'

function Register({ onBack, onLogin, onRegister }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    businessType: ''
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

    setErrors((prev) => ({
      ...prev,
      [name]: ''
    }))

    setServerError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required'
    }

    if (!formData.businessType) {
      newErrors.businessType = 'Please select a business type'
    }

    setErrors(newErrors)
    setServerError('')

    if (Object.keys(newErrors).length > 0) {
      return
    }

    setLoading(true)

    try {
      const response = await fetch(
        'http://localhost:5000/api/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
            fullName: formData.fullName.trim(),
            email: formData.email.trim().toLowerCase(),
            password: formData.password,
            confirmPassword: formData.confirmPassword,
            businessName: formData.businessName.trim(),
            businessType: formData.businessType
          })
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed')
      }

      if (!data.user || !data.user.fullName) {
        throw new Error('Registration response was incomplete.')
      }

      onRegister(data.user.fullName)
    } catch (error) {
      console.error('Registration error:', error)

      setServerError(
        error.message || 'Unable to connect to the server.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />

      <div className="register-page">
        <div className="register-card">
          <div className="register-heading">
            <h1>Create Your Account</h1>
            <p>
              Start turning your business data into
              smarter decisions.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {serverError && (
              <p className="form-error" role="alert">
                {serverError}
              </p>
            )}

            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                autoComplete="name"
              />
              {errors.fullName && (
                <small className="form-error">
                  ⚠ {errors.fullName}
                </small>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
              />
              {errors.email && (
                <small className="form-error">
                  ⚠ {errors.email}
                </small>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create password"
                  autoComplete="new-password"
                />
                {errors.password && (
                  <small className="form-error">
                    ⚠ {errors.password}
                  </small>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  autoComplete="new-password"
                />
                {errors.confirmPassword && (
                  <small className="form-error">
                    ⚠ {errors.confirmPassword}
                  </small>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="businessName">Business Name</label>
              <input
                id="businessName"
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="Enter your business name"
                autoComplete="organization"
              />
              {errors.businessName && (
                <small className="form-error">
                  ⚠ {errors.businessName}
                </small>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="businessType">Business Type</label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
              >
                <option value="">Select your business type</option>
                <option value="Retail">Retail</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Technology">Technology</option>
                <option value="Other">Other</option>
              </select>
              {errors.businessType && (
                <small className="form-error">
                  ⚠ {errors.businessType}
                </small>
              )}
            </div>

            <button
              type="submit"
              className="register-btn"
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
              <span>→</span>
            </button>
          </form>

          <p className="login-text">
            Already have an account?
            {' '}
            <button
              type="button"
              onClick={onLogin}
            >
              Login
            </button>
          </p>

          <button
            type="button"
            className="back-btn"
            onClick={onBack}
          >
            ← Back to Home
          </button>
        </div>

        <div className="register-info">
          <div className="info-content">
            <div className="info-icon">✨</div>

            <h2>
              Your Business.
              <br />
              Smarter with AI.
            </h2>

            <p>
              BizIntel AI helps you understand your
              business performance, predict future
              trends, detect unusual activity, and
              make data-driven decisions.
            </p>

            <div className="info-features">
              <div>
                <span>📊</span>
                <div>
                  <strong>Business Analytics</strong>
                  <small>Understand your performance</small>
                </div>
              </div>

              <div>
                <span>🔮</span>
                <div>
                  <strong>AI Forecasting</strong>
                  <small>Predict future business trends</small>
                </div>
              </div>

              <div>
                <span>🛡️</span>
                <div>
                  <strong>Anomaly Detection</strong>
                  <small>Identify unusual activities</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
