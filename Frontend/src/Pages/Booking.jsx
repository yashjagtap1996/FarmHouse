import React from 'react';
import '../assets/css/booking.css';
import { FaLeaf, FaWifi, FaSwimmingPool, FaParking, FaDog } from 'react-icons/fa';
import { MdBreakfastDining, MdNature } from 'react-icons/md';

const Booking = () => {
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

                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Full Name</label>
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control form-control-lg"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Phone</label>
                                        <input
                                            type="tel"
                                            className="form-control form-control-lg"
                                            placeholder="+1 234 567 890"
                                        />
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Check-in</label>
                                            <div className="input-group">
                                                <input
                                                    type="date"
                                                    className="form-control form-control-lg"
                                                />
                                                <span className="input-group-text">
                                                    <i className="bi bi-calendar-check"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Check-out</label>
                                            <div className="input-group">
                                                <input
                                                    type="date"
                                                    className="form-control form-control-lg"
                                                />
                                                <span className="input-group-text">
                                                    <i className="bi bi-calendar-x"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label">Number of Guests</label>
                                        <select className="form-select form-select-lg">
                                            {[1, 2, 3, 4, 5, 6].map((num) => (
                                                <option key={num} value={num}>
                                                    {num} {num === 1 ? 'guest' : 'guests'}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label">Special Requests</label>
                                        <textarea
                                            className="form-control"
                                            rows="3"
                                            placeholder="Any special requirements..."
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

                                    <button className="btn booking-btn btn-lg w-100 py-3">
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