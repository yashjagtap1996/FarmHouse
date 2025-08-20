import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import {
    FaLeaf, FaUser, FaEnvelope, FaPhone, FaCalendarDay,
    FaWifi, FaSwimmer, FaUtensils, FaCar, FaTree, FaDog, FaCalendarCheck
} from 'react-icons/fa';
import '../assets/css/booking.css';
import { useToast } from '../ToastProvider';
import axios from 'axios';

export default function Booking() {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
        reset,
        setError,
        clearErrors
    } = useForm();

    const [manualGuestsVisible, setManualGuestsVisible] = useState(false);
    const [priceInfo, setPriceInfo] = useState({ nights: 0, guests: 0, basePrice: 0, total: 500 });
    const { showToast } = useToast();

    const serviceFee = 500;
    const basePricePerNightPerGuest = 2500;

    const checkIn = watch('checkIn');
    const checkOut = watch('checkOut');
    const guests = watch('guests');
    const manualGuests = watch('manualGuests');

    useEffect(() => {
        if (guests === 'other') {
            setManualGuestsVisible(true);
        } else {
            setManualGuestsVisible(false);
            setValue('manualGuests', '');
        }
    }, [guests, setValue]);

    useEffect(() => {
        // Date validation
        if (checkIn && checkOut) {
            const inDate = new Date(checkIn);
            const outDate = new Date(checkOut);

            if (outDate <= inDate) {
                setError('checkOut', {
                    type: 'manual',
                    message: 'Check-out date must be after check-in date'
                });
            } else {
                clearErrors('checkOut');
            }
        }

        // Price calculation
        const nights = calculateNights();
        const guestCount = getGuestCount();
        const basePrice = nights * guestCount * basePricePerNightPerGuest;
        const total = nights > 0 && guestCount > 0 ? basePrice + serviceFee : serviceFee;
        setPriceInfo({ nights, guests: guestCount, basePrice, total });
    }, [checkIn, checkOut, guests, manualGuests, setError, clearErrors]);

    const calculateNights = () => {
        if (!checkIn || !checkOut) return 0;

        const inDate = new Date(checkIn);
        const outDate = new Date(checkOut);
        const timeDiff = outDate - inDate;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        return isNaN(days) || days <= 0 ? 0 : days;
    };

    const getGuestCount = () => {
        if (guests === 'other') {
            return parseInt(manualGuests) || 0;
        }
        return parseInt(guests) || 0;
    };

    const validatePhone = (value) => {
        const indianPhoneRegex = /^[6-9]\d{9}$/;
        if (!indianPhoneRegex.test(value)) {
            return 'Please enter a valid 10-digit Indian phone number';
        }
        return true;
    };

    const validateManualGuests = (value) => {
        if (manualGuestsVisible && (!value || value < 7)) {
            return 'Minimum 7 guests required for custom selection';
        }
        return true;
    };

    const onSubmit = async (data) => {
        try {
            const totalPrice = priceInfo.total;
            const guestCount = guests === "other" ? manualGuests : guests;

            const payload = {
                ...data,
                guests: guestCount,
                totalAmount: totalPrice,
            };

            const res = await axios.post("http://localhost:3000/booking", payload);
            showToast(res.data.message, "success");
            reset();
            setPriceInfo({ nights: 0, guests: 0, basePrice: 0, total: 500 });
            setManualGuestsVisible(false);
            clearErrors();
        } catch (error) {
            console.error(error);
            if (error.response && error.response.data && error.response.data.message) {
                // Show backend error message (like "Booking already exists")
                showToast(error.response.data.message, "danger");
            } else {
                // Fallback generic message
                showToast("Error during booking. Please try again.", "danger");
            }
        }
    };



    return (
        <div className="booking-page">
            <section className="booking-hero">
                <div className="container">
                    <div className="hero-content text-center">
                        <div className="hero-icon"><FaLeaf className='icon' /></div>
                        <h1 className="hero-title">Paradise Villa</h1>
                        <p className="hero-subtitle">Experience nature's serenity in our eco-friendly retreat</p>
                    </div>
                </div>
            </section>

            <section className="booking-form-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="booking-card">
                                <div className="booking-card-header">
                                    <h2>Book Your Stay</h2>
                                    <p>Relax and reconnect with nature at our sustainable farmhouse</p>
                                </div>
                                <div className="booking-card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Full Name</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><FaUser /></span>
                                                        <input
                                                            {...register('name', {
                                                                required: 'Full name is required',
                                                                minLength: {
                                                                    value: 3,
                                                                    message: 'Name must be at least 3 characters'
                                                                }
                                                            })}
                                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                                            placeholder="John Doe"
                                                        />
                                                    </div>
                                                    {errors.name && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.name.message}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><FaEnvelope /></span>
                                                        <input
                                                            {...register('email', {
                                                                required: 'Email is required',
                                                                pattern: {
                                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                    message: 'Invalid email address'
                                                                }
                                                            })}
                                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                            placeholder="john@example.com"
                                                        />
                                                    </div>
                                                    {errors.email && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.email.message}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>Phone Number</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><FaPhone /></span>
                                                        <input
                                                            {...register('phone', {
                                                                required: 'Phone number is required',
                                                                validate: validatePhone
                                                            })}
                                                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                                            placeholder="9876543210"
                                                        />
                                                    </div>
                                                    {errors.phone && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.phone.message}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Check-in Date</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><FaCalendarDay /></span>
                                                        <input
                                                            type="date"
                                                            {...register('checkIn', {
                                                                required: 'Check-in date is required',
                                                                validate: {
                                                                    futureDate: value => {
                                                                        const today = new Date();
                                                                        today.setHours(0, 0, 0, 0);
                                                                        return new Date(value) >= today || 'Check-in date cannot be in the past';
                                                                    }
                                                                }
                                                            })}
                                                            className={`form-control ${errors.checkIn ? 'is-invalid' : ''}`}
                                                            min={new Date().toISOString().split('T')[0]}
                                                        />
                                                    </div>
                                                    {errors.checkIn && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.checkIn.message}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Check-out Date</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><FaCalendarDay /></span>
                                                        <input
                                                            type="date"
                                                            {...register('checkOut', {
                                                                required: 'Check-out date is required'
                                                            })}
                                                            className={`form-control ${errors.checkOut ? 'is-invalid' : ''}`}
                                                            min={checkIn || new Date().toISOString().split('T')[0]}
                                                        />
                                                    </div>
                                                    {errors.checkOut && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.checkOut.message}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>Number of Guests</label>
                                                    <select
                                                        {...register('guests', {
                                                            required: 'Please select number of guests'
                                                        })}
                                                        className={`form-select ${errors.guests ? 'is-invalid' : ''}`}
                                                    >
                                                        <option value="">Select guests</option>
                                                        {[1, 2, 3, 4, 5, 6].map(i => (
                                                            <option key={i} value={i}>{i} {i === 1 ? 'guest' : 'guests'}</option>
                                                        ))}
                                                        <option value="other">Other</option>
                                                    </select>
                                                    {manualGuestsVisible && (
                                                        <input
                                                            type="number"
                                                            {...register('manualGuests', {
                                                                validate: validateManualGuests
                                                            })}
                                                            className={`form-control mt-2 ${errors.manualGuests ? 'is-invalid' : ''}`}
                                                            placeholder="Enter number of guests"
                                                            min="7"
                                                        />
                                                    )}
                                                    {errors.guests && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.guests.message}
                                                        </div>
                                                    )}
                                                    {errors.manualGuests && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.manualGuests.message}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>Special Requests</label>
                                                    <textarea
                                                        {...register('requests', {
                                                            maxLength: {
                                                                value: 500,
                                                                message: 'Maximum 500 characters allowed'
                                                            }
                                                        })}
                                                        className={`form-control ${errors.requests ? 'is-invalid' : ''}`}
                                                        rows="3"
                                                        placeholder="Any special requirements..."
                                                    />
                                                    {errors.requests && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.requests.message}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="col-12 mt-4">
                                                <div className="price-calculator p-3 border rounded bg-light">
                                                    <div className="price-row d-flex justify-content-between mb-2">
                                                        <span>{priceInfo.nights} night(s) x ₹{basePricePerNightPerGuest} x {priceInfo.guests} guest(s)</span>
                                                        <span>₹{priceInfo.basePrice}</span>
                                                    </div>
                                                    <div className="price-row d-flex justify-content-between mb-2">
                                                        <span>Service fee</span>
                                                        <span>₹{serviceFee}</span>
                                                    </div>
                                                    <hr />
                                                    <div className="price-row total d-flex justify-content-between fw-bold">
                                                        <span>Total</span>
                                                        <span>₹{priceInfo.total}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <button
                                                    className="btn booking-btn"
                                                    type="submit"
                                                    disabled={Object.keys(errors).length > 0}
                                                >
                                                    <FaCalendarCheck className="me-2" />Confirm Booking
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="amenities-card mb-5">
                                <div className="amenities-header">
                                    <h3>Our Amenities</h3>
                                    <p>Everything you need for a comfortable stay</p>
                                </div>
                                <div className="amenities-body">
                                    <div className="row g-3">
                                        <Amenity icon={<FaWifi />} title="Free WiFi" desc="High-speed internet throughout" />
                                        <Amenity icon={<FaSwimmer />} title="Swimming Pool" desc="Seasonal outdoor pool" />
                                        <Amenity icon={<FaUtensils />} title="Breakfast Included" desc="Fresh farm-to-table meals" />
                                        <Amenity icon={<FaCar />} title="Parking Available" desc="Secure on-site parking" />
                                        <Amenity icon={<FaTree />} title="Garden View" desc="Beautiful natural surroundings" />
                                        <Amenity icon={<FaDog />} title="Pet Friendly" desc="Bring your furry friends" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function Amenity({ icon, title, desc }) {
    return (
        <div className="col-md-6">
            <div className="amenity-item">
                <div className="amenity-icon">{icon}</div>
                <div className="amenity-text">
                    <h5>{title}</h5>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
}