import React from 'react';
import '../assets/css/login.css'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <form className="login-form shadow-lg  p-5 bg-white">
                <div className="text-center mb-4">
                    <h2 className="fw-bold">Welcome</h2>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" />
                </div>
                <div className="d-grid mt-4">
                    <button type="submit" className="btn btn-success">Login</button>
                </div>
                <div className="d-flex align-items-center my-4">
                    <hr className="flex-grow-1" />
                    <span className="mx-3 text-muted">or continue with</span>
                    <hr className="flex-grow-1" />
                </div>
                <div className="d-grid mt-3">
                    <button className="btn btn-dark d-flex align-items-center justify-content-center gap-2 py-2 fs-6" type='
                    button'>
                        <FcGoogle size={20} />
                        <span style={{ fontWeight: '500' }}>Google</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
