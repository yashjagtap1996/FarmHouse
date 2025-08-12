import React, { useState } from 'react';
import '../assets/css/signup.css';
import { useForm } from 'react-hook-form'
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../ToastProvider';


const Signup = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();
    const { showToast } = useToast();




    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:3000/signup", data);
            showToast(response.data.message || "Account created successfully! Please login", 'success');
            reset();
            navigate("/login");

        } catch (error) {
            console.error("Error during signup:", error);
            showToast(
                error.response?.data?.message || "Something went wrong",
                'danger'
            );
            reset();
        }
    };


    const password = watch('password');

    return (
        <div className="main-div d-flex align-items-center justify-content-center bg-light mt-4">
            <form className="signup-form shadow-lg p-5 bg-white rounded-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="text-center mb-4">
                    <div className="logo-container mb-3">
                        <FaLeaf size={48} className="text-success" />
                    </div>
                    <h2 className="fw-bold mb-2">Create Your Account</h2>
                    <p className="text-muted">Join Paradise villa  community</p>
                </div>


                <div className="row ">
                    <div className="col-md-6">
                        <label className="form-label">First Name</label>
                        <input
                            type="text"
                            {...register("firstName", { required: "First name is required" })}
                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                            placeholder="Enter first name"
                        />
                        <p className='text-danger small'>{errors.firstName?.message}</p>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Last Name</label>
                        <input
                            type="text"
                            {...register("lastName", { required: "Last name is required" })}
                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                            placeholder="Enter last name"
                        />
                        <p className='text-danger small'>{errors.lastName?.message}</p>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="Enter email"
                    />
                    <p className='text-danger small'>{errors.email?.message}</p>
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <div className="position-relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long',
                                },
                                validate: {
                                    hasUpperCase: (value) =>
                                        /[A-Z]/.test(value) || 'Must include at least one uppercase letter',
                                    hasLowerCase: (value) =>
                                        /[a-z]/.test(value) || 'Must include at least one lowercase letter',
                                    hasNumber: (value) =>
                                        /[0-9]/.test(value) || 'Must include at least one number',
                                    hasSpecialChar: (value) =>
                                        /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                                        'Must include at least one special character',
                                },
                            })}
                            className={`form-control pe-5 ${errors.password ? 'is-invalid' : ''}`}
                            placeholder="Create password"
                        />
                        <button
                            type="button"
                            className="show-btn-inside"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FiEyeOff size={15} /> : <FiEye size={15} />}
                        </button>
                    </div>
                    <p className="text-danger">{errors.password?.message}</p>
                </div>


                <div className="mb-4">
                    <label className="form-label">Confirm Password</label>
                    <div className='position-relative'>
                        <input
                            type={`${showConfirmPassword ? "text" : "password"}`}
                            {...register("confirmPassword", { required: "Please confirm your password", validate: value => value === password || "Password do not match" })}
                            className={`form-control pe-5 ${errors.confirmPassword ? 'is-invalid' : ''}`}
                            placeholder="Re-enter password"
                        />
                        <button
                            type="button"
                            className="show-btn-inside"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <FiEyeOff size={15} /> : <FiEye size={15} />}
                        </button>
                    </div>
                    <p className='text-danger'>{errors.confirmPassword?.message}</p>
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-success btn-lg">
                        Create Account
                    </button>
                </div>
                <div className="text-center mt-3">
                    <p className="small text-muted">Already have an account? <a href="/login" className="text-success">Log in</a></p>
                </div>
            </form>
        </div>
    );
};

export default Signup;