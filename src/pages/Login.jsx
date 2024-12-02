import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold">Login</h2>
          <p className="text-muted">Welcome back! Please log in to your account.</p>
        </div>
        <form>
          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Login Button */}
          <div className="d-grid mb-3">
            <button type="submit" className="btn login-btn">
              Login
            </button>
          </div>

          {/* Additional Links */}
          <div className="text-center">
            <p className="small">
              Forgot your password?{" "}
              <a href="/login" className="nav-link text-secondary">
                Reset here
              </a>
            </p>
            <p className="small">
              Don't have an account?{" "}
              <a href="/signup" className="nav-link text-secondary">
                Sign up now
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
