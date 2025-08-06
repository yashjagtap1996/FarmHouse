import React, { useState } from 'react';
import { FaLeaf, FaEye, FaEyeSlash, FaUser } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import '../assets/css/login.css'; // Optional custom CSS if needed

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });

    const togglePassword = () => {
        setShowPassword(prev => !prev);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with your actual login logic (e.g. Axios call)
        console.log('Logging in with', formData);
    };

    return (
        <div className="login-div d-flex align-items-center justify-content-center mt-5">
            <form
                className="login-form shadow-lg p-5 bg-white rounded-3"
                onSubmit={handleSubmit}
            >
                <div className="text-center mb-4">
                    <FaLeaf className="text-success mb-3" size={32} />
                    <h2 className="fw-bold">Welcome to Paradise Villa</h2>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="position-relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Enter password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            className="show-btn-inside"
                            onClick={togglePassword}
                            tabIndex="-1"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                background: 'none',
                                border: 'none',
                                outline: 'none',
                            }}
                        >
                            {showPassword ? (
                                <FaEyeSlash size={18} />
                            ) : (
                                <FaEye size={18} />
                            )}
                        </button>
                    </div>
                </div>

                <div className="d-grid mt-4">
                    <button
                        type="submit"
                        className="btn btn-success d-flex align-items-center justify-content-center gap-2 py-2 fs-6"
                    >
                        <FaUser />
                        <span className="fw-semibold">Login</span>
                    </button>
                </div>

                <div className="d-flex align-items-center my-4">
                    <hr className="flex-grow-1" />
                    <span className="mx-3 text-muted">or continue with</span>
                    <hr className="flex-grow-1" />
                </div>

                <div className="d-grid mt-3">
                    <button
                        type="button"
                        className="btn btn-dark d-flex align-items-center justify-content-center gap-2 py-2 fs-6"
                    >
                        <FcGoogle size={20} />
                        <span className="fw-semibold text-light">Google</span>
                    </button>
                </div>

                <div className="text-center mt-4">
                    <p className="small text-muted">
                        Don't have an account?{' '}
                        <a href="/signup" className="text-success fw-semibold text-decoration-none">
                            Sign up
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
