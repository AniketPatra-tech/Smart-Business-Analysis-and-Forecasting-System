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

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })

    // Remove error when user starts correcting the field
    setErrors({
      ...errors,
      [name]: ''
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Password
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    // Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    // Business Name
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required'
    }

    // Business Type
    if (!formData.businessType) {
      newErrors.businessType = 'Please select a business type'
    }

    setErrors(newErrors)

    // Don't continue if there are errors
    if (Object.keys(newErrors).length > 0) {
      return
    }

    // Everything is valid
    
onRegister(formData.fullName)
  }

  return (
    <>
    <Navbar />
    <div className="register-page">

      <div className="register-card">

        {/* Logo */}
       

        {/* Heading */}
        <div className="register-heading">
          <h1>Create Your Account</h1>

          <p>
            Start turning your business data into
            smarter decisions.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          {/* Full Name */}
          <div className="form-group">

            <label>Full Name</label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />

            {errors.fullName && (
              <small className="form-error">
                ⚠ {errors.fullName}
              </small>
            )}

          </div>


          {/* Email */}
          <div className="form-group">

            <label>Email Address</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            {errors.email && (
              <small className="form-error">
                ⚠ {errors.email}
              </small>
            )}

          </div>


          {/* Password Row */}
          <div className="form-row">

            {/* Password */}
            <div className="form-group">

              <label>Password</label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
              />

              {errors.password && (
                <small className="form-error">
                  ⚠ {errors.password}
                </small>
              )}

            </div>


            {/* Confirm Password */}
            <div className="form-group">

              <label>Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
              />

              {errors.confirmPassword && (
                <small className="form-error">
                  ⚠ {errors.confirmPassword}
                </small>
              )}

            </div>

          </div>


          {/* Business Name */}
          <div className="form-group">

            <label>Business Name</label>

            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Enter your business name"
            />

            {errors.businessName && (
              <small className="form-error">
                ⚠ {errors.businessName}
              </small>
            )}

          </div>


          {/* Business Type */}
          <div className="form-group">

            <label>Business Type</label>

            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
            >

              <option value="">
                Select your business type
              </option>

              <option>Retail</option>
              <option>E-commerce</option>
              <option>Manufacturing</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Technology</option>
              <option>Other</option>

            </select>

            {errors.businessType && (
              <small className="form-error">
                ⚠ {errors.businessType}
              </small>
            )}

          </div>


          {/* Create Account */}
          <button
            type="submit"
            className="register-btn"
          >
            Create Account
            <span>→</span>
          </button>

        </form>


        {/* Login */}
        <p className="login-text">

          Already have an account?

          <button
            type="button"
            onClick={onLogin}
          >
            Login
          </button>

        </p>


        {/* Back */}
        <button
          type="button"
          className="back-btn"
          onClick={onBack}
        >
          ← Back to Home
        </button>

      </div>


      {/* Right information panel */}
      <div className="register-info">

        <div className="info-content">

          <div className="info-icon">
            ✨
          </div>

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