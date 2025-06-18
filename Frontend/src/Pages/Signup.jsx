import React, { useState } from 'react';
import '../assets/css/signup.css';
import { useForm } from 'react-hook-form'
import { FiEye, FiEyeOff } from "react-icons/fi";


const Signup = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);

    }
    const password = watch('password')

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    return (
        <div className=" main-div d-flex align-items-center justify-content-center ">
            <form className="signup-form shadow-lg p-5 bg-white " onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center mb-4 fw-bold">Create Account</h2>

                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input
                        type="text"
                        {...register("firstName", { required: "First name is Required" })}
                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                        placeholder="Enter first name"
                    />
                    <p className='text-danger'>{errors.firstName?.message}</p>
                </div>

                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                        type="text"
                        {...register("lastName", { required: "Last name is Required" })}
                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                        placeholder="Enter last name"
                    />
                    <p className='text-danger'>{errors.lastName?.message}</p>
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        {...register("email", { required: "Email is Required" })}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        placeholder="Enter email"
                    />
                    <p className='text-danger'>{errors.email?.message}</p>
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
                    <button type="submit" className="btn btn-success">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
