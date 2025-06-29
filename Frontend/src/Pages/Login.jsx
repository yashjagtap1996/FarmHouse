import React, { useState } from 'react';
import '../assets/css/login.css'
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaLeaf, FaUser } from 'react-icons/fa';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className=" login-div d-flex align-items-center justify-content-center mt-5">
            <form className="login-form shadow-lg  p-5 bg-white  rounded-3" >
                <div className="text-center mb-4">
                    <FaLeaf size={40} className="text-success mb-3" />
                    <h2 className="fw-bold">Welcome to Green Vally Farmhouse</h2>

                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className='position-relative  '>
                        <input type={`${showPassword ? "text" : "password"}`} className="form-control" id="password" placeholder="Enter password" />
                        <button className='show-btn-inside' type='button' onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FiEyeOff size={15} /> : <FiEye size={15} />}
                        </button>
                    </div>

                </div>
                <div className="d-grid mt-4">
                    <button type="submit" className="btn btn-success d-flex align-items-center justify-content-center gap-2 py-2 fs-6"><FaUser size={20} />
                        <span style={{ fontWeight: '500' }}>Login</span>
                    </button>
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
