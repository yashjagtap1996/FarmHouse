import React, { useState } from 'react';
import '../assets/css/signup.css';
import { useForm } from 'react-hook-form'
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onSubmit = (data) => {
        console.log(data);

    };

    const password = watch('password');

    return (
        <div className="main-div d-flex align-items-center justify-content-center bg-light">
            <form className="signup-form shadow-lg p-5 bg-white rounded-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="text-center mb-4">
                    <FaLeaf size={40} className="text-success mb-2" />
                    <h2 className="fw-bold">Green Valley Farmhouse</h2>
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
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                                    message: 'Password must be secure and meet complexity rules.'
                                }
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
                        Join as Guest
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
