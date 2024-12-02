import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
    return (
        <div className="d-flex align-items-center justify-content-center bg-light pt-5 mt-5">
            <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
                <div className="text-center mb-4">
                    <h2 className="fw-bold">Sign Up</h2>
                    <p className="text-muted">Create your account and join us today!</p>
                </div>
                <form>
                    {/* Name Input */}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email Address
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
                            placeholder="Create a password"
                            required
                        />
                    </div>

                    {/* Confirm Password Input */}
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Re-enter your password"
                            required
                        />
                    </div>

                    {/* Sign Up Button */}
                    <div className="d-grid mb-3">
                        <button type="submit" className="btn login-btn">
                            Sign Up
                        </button>
                    </div>

                    {/* Additional Links */}
                    <div className="text-center">
                        <p className="small">
                            Already have an account?{" "}
                            <a href="/login" className="nav-link text-secondary">
                                Login now
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;