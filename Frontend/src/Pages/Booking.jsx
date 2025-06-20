import React from 'react';
import '../assets/css/booking.css';
import { FaLeaf, FaWifi, FaSwimmingPool, FaParking, FaDog } from 'react-icons/fa';
import { MdBreakfastDining, MdNature } from 'react-icons/md';
import { useForm } from 'react-hook-form';

const Booking = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const today = new Date().toISOString().split('T')[0];
    const checkIn = watch('checkIn');

    return (
        <div className="container-fluid booking-container">
            <div className="container">
                <div className="text-center mb-5">
                    <div className="leaf-icon-container">
                        <FaLeaf size={40} className='text-success' />
                    </div>
                    <h1 className="farmhouse-title">Green Valley Farmhouse</h1>
                    <p className="farmhouse-subtitle">
                        Experience nature's serenity in our eco-friendly retreat
                    </p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card booking-card shadow-lg">
                            <div className="card-body p-5">
                                <h2 className="card-title mb-4 text-center">Book Your Stay</h2>
                                <p className="card-description mb-4 text-center">
                                    Relax and reconnect with nature at our sustainable farmhouse.
                                </p>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Full Name</label>
                                            <input
                                                type="text"
                                                {...register("name", { required: "Name is required" })}
                                                className={`form-control form-control-lg ${errors.name ? 'is-invalid' : ''}`}
                                                placeholder="John Doe"
                                            />
                                            <p className='text-danger'>{errors.name?.message}</p>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Email</label>
                                            <input
                                                type="email"
                                                {...register("email", {
                                                    required: "Email is required",
                                                    pattern: {
                                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                                                        message: "Enter a valid email address"
                                                    }
                                                })}
                                                className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                                                placeholder="john@example.com"
                                            />
                                            <p className='text-danger'>{errors.email?.message}</p>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Phone</label>
                                        <input
                                            type="tel"
                                            {...register("phone", {
                                                required: "Phone Number is required",
                                                pattern: {
                                                    value: /^[6-9]\d{9}$/,
                                                    message: "Enter a valid 10-digit Indian phone number"
                                                }
                                            })}
                                            className={`form-control form-control-lg ${errors.phone ? 'is-invalid' : ''}`}
                                            placeholder="+91 9876543210"
                                        />
                                        <p className='text-danger'>{errors.phone?.message}</p>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Check-in</label>
                                            <input
                                                type="date"
                                                {...register("checkIn", {
                                                    required: "Check-in date is required",
                                                    validate: (value) =>
                                                        value >= today || "Check-in date cannot be in the past"
                                                })}
                                                className={`form-control form-control-lg ${errors.checkIn ? 'is-invalid' : ''}`}
                                            />
                                            <p className='text-danger'>{errors.checkIn?.message}</p>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Check-out</label>
                                            <input
                                                type="date"
                                                {...register("checkOut", {
                                                    required: "Check-out date is required",
                                                    validate: (value) =>
                                                        !checkIn || value > checkIn || "Check-out must be after check-in"
                                                })}
                                                className={`form-control form-control-lg ${errors.checkOut ? 'is-invalid' : ''}`}
                                            />
                                            <p className='text-danger'>{errors.checkOut?.message}</p>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label">Number of Guests</label>
                                        <select
                                            className="form-select form-select-lg"
                                            {...register("guests", { required: "Please select number of guests" })}
                                        >
                                            <option value="">Select guests</option>
                                            {[1, 2, 3, 4, 5, 6].map((num) => (
                                                <option key={num} value={num}>
                                                    {num} {num === 1 ? 'guest' : 'guests'}
                                                </option>
                                            ))}
                                        </select>
                                        <p className='text-danger'>{errors.guests?.message}</p>
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label">Special Requests</label>
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            placeholder="Any special requirements..."
                                            {...register("requests")}
                                        ></textarea>
                                    </div>

                                    {/* Price Calculator */}
                                    <div className="price-calculator mb-4">
                                        <div className="price-row">
                                            <span>2 nights x $100</span>
                                            <span>$200</span>
                                        </div>
                                        <div className="price-row">
                                            <span>Service fee</span>
                                            <span>$20</span>
                                        </div>
                                        <div className="price-row price-total">
                                            <span>Total</span>
                                            <span>$220</span>
                                        </div>
                                    </div>

                                    <button className="btn booking-btn btn-lg w-100 py-3" type="submit">
                                        Confirm Booking
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Amenities Section */}
                        <div className="card booking-card mt-4 shadow-sm">
                            <div className="card-body p-4">
                                <h5 className="amenities-title mb-4 text-center">Our Amenities</h5>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="amenity-item">
                                            <FaWifi className="amenity-icon" />
                                            <span>Free WiFi</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="amenity-item">
                                            <FaSwimmingPool className="amenity-icon" />
                                            <span>Swimming Pool</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="amenity-item">
                                            <MdBreakfastDining className="amenity-icon" />
                                            <span>Breakfast Included</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="amenity-item">
                                            <FaParking className="amenity-icon" />
                                            <span>Parking Available</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="amenity-item">
                                            <MdNature className="amenity-icon" />
                                            <span>Garden View</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="amenity-item">
                                            <FaDog className="amenity-icon" />
                                            <span>Pet Friendly</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
