
import { useState } from 'react';
import './Login.css';
import Navbar from '../../components/Navbar/Navbar';

function Login({ onBack, onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login button clicked!");
    if (!formData.email.trim() || !formData.password) {
      setError('Please enter your email and password.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        'http://localhost:5000/api/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            email: formData.email.trim(),
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed.');
      }

      if (onLogin) {
        onLogin(data);
      }
    } catch (err) {
      setError(
        err.message ||
          'Unable to connect to the server. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="login-page">
        <div className="login-card">
          <div className="login-heading">
            <h1>Welcome Back!</h1>
            <p>Log in to your BizIntel AI account.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="login-form-group">
              <label htmlFor="login-email">Email Address</label>
              <input
                id="login-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>

            <div className="login-form-group">
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />
            </div>

            {error && (
              <p className="login-error" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="login-submit-btn"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login →'}
            </button>
          </form>

          <p className="login-register-text">
            New to BizIntel AI? Create an account during registration.
          </p>

          <button
            type="button"
            className="login-back-btn"
            onClick={onBack}
          >
            ← Back to Home
          </button>
        </div>

        <div className="login-info">
          <div className="login-info-content">
            <div className="login-info-icon">✨</div>
            <h2>
              Your Business.
              <br />
              Smarter with AI.
            </h2>
            <p>
              Sign in to explore business analytics,
              revenue forecasts, and AI-powered insights.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
