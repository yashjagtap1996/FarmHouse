import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import {
    FaSwimmingPool,
    FaWifi,
    FaTree,
    FaPaw,
    FaCar,
    FaUtensils,
    FaStar,
    FaStarHalfAlt,
} from 'react-icons/fa';
import '../assets/css/Home.css';
import video from '../assets/videos/Video.mp4'
import exterior from '../assets/images/Exterior.png';
import lawn from '../assets/images/Lawn.jpg';
import front from '../assets/images/Front.jpg';
import pool from '../assets/images/Pool.jpg';
import clip1 from '../assets/videos/clip1.mp4';
import clip2 from '../assets/videos/clip2.mp4';
import clip3 from '../assets/videos/clip3.mp4';
import axios from 'axios';
import { useToast } from '../ToastProvider';



const Home = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const { showToast } = useToast();

    const checkInValue = watch("checkIn");

    const onSubmit = async (data) => {
        try {
            const res = await axios.post("http://localhost:3000/check-availability", data);
            showToast(res.data.message, res.data.type);

        } catch (error) {
            console.error(error);
            alert("Something went wrong. Try again later.");
        }

    };

    const amentity = [
        { icon: <FaSwimmingPool />, title: "Swimming Pool", desc: "Enjoy our seasonal outdoor pool..." },
        { icon: <FaWifi />, title: "High-Speed WiFi", desc: "Stay connected with our reliable internet..." },
        { icon: <FaTree />, title: "Nature Trails", desc: "Explore our private walking trails..." },
        { icon: <FaPaw />, title: "Pet-Friendly", desc: "Bring your furry friends along..." },
        { icon: <FaCar />, title: "Free Parking", desc: "Secure parking space available on-site..." },
        { icon: <FaUtensils />, title: "Farm-to-Table", desc: "Meals made with local organic ingredients..." }
    ];

    const media = [
        { type: 'img', src: lawn, alt: "Farmhouse Lawn" },
        { type: 'video', src: clip1 },
        { type: 'img', src: front, alt: "Farmhouse Front" },
        { type: 'video', src: clip2 },
        { type: 'img', src: pool, alt: "Farmhouse pool" },
        { type: 'video', src: clip3 },
    ]


    const testimonial = [
        {
            stars: 5, text: `"Absolutely magical!..."`,
            author: "- Sarah & Mark, July 2023"
        },
        {
            stars: 5, text: `"Perfect family getaway..."`,
            author: "- The Johnson Family, August 2023"
        },
        {
            stars: 4.5, text: `"I came alone for a writing retreat..."`,
            author: "- Emily, September 2023"
        }
    ]
    return (
        <div className="home-page">
            {/* Hero Section */}
            <div className="home-top mt-5 p-5">
                <video autoPlay muted loop playsInline className="bg-video">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="container top-content">
                    <h1>Paradise Villa</h1>
                    <h4>Escape to nature's embrace in our charming countryside retreat</h4>
                    <Link to="/booking" style={{ all: 'unset' }}>
                        <button className="btn btn-success btn-lg mt-3">Book Your Stay</button>
                    </Link>
                </div>
            </div>

            {/* Booking Widget */}
            <div className="booking-widget-section" data-aos="fade-up">
                <div className="container">
                    <div className="booking-widget" data-aos="zoom-in" data-aos-delay="100">
                        <h2 className="section-title text-center" data-aos="fade-down" data-aos-delay="200">Plan Your Stay</h2>

                        <form
                            className="booking-form"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="form-row">
                                {/* Check-In Input */}
                                <div className="form-group-home" data-aos="fade-right" data-aos-delay="400">
                                    <label htmlFor="check-in" className="form-label">Check-In</label>
                                    <input
                                        type="date"
                                        id="check-in"
                                        className={`form-control ${errors.checkIn ? "is-invalid" : ""}`}
                                        {...register("checkIn", {
                                            required: "Check-in date is required",
                                            validate: (value) =>
                                                new Date(value) >= new Date().setHours(0, 0, 0, 0) || "Check-in cannot be in the past",
                                        })}
                                    />
                                    {errors.checkIn && <div className="invalid-feedback">{errors.checkIn.message}</div>}
                                </div>

                                {/* Check-Out Input */}
                                <div className="form-group-home" data-aos="fade-left" data-aos-delay="500">
                                    <label htmlFor="check-out" className="form-label">Check-Out</label>
                                    <input
                                        type="date"
                                        id="check-out"
                                        className={`form-control ${errors.checkOut ? "is-invalid" : ""}`}
                                        {...register("checkOut", {
                                            required: "Check-out date is required",
                                            validate: (value) =>
                                                !checkInValue || new Date(value) > new Date(checkInValue) || "Check-out must be after check-in",
                                        })}
                                    />
                                    {errors.checkOut && <div className="invalid-feedback">{errors.checkOut.message}</div>}
                                </div>

                                {/* Guests Select */}
                                <div className="form-group-home" data-aos="fade-up" data-aos-delay="600">
                                    <label htmlFor="guests" className="form-label">Guests</label>
                                    <select
                                        id="guests"
                                        className={`form-select ${errors.guests ? "is-invalid" : ""}`}
                                        {...register("guests", { required: "Please select number of guests" })}
                                    >
                                        <option value="1">1 Adult</option>
                                        <option value="2">2 Adults</option>
                                        <option value="3">3 Adults</option>
                                        <option value="4">4 Adults</option>
                                        <option value="family">Family (2+2)</option>
                                        <option value="group">Group (6+)</option>
                                    </select>
                                    {errors.guests && <div className="invalid-feedback">{errors.guests.message}</div>}
                                </div>
                            </div>

                            {/* Centered Button */}
                            <div className="form-submit" data-aos="zoom-in-up" data-aos-delay="700">
                                <button type="submit" className="btn btn-success">
                                    Check Availability
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="about" data-aos="fade-up">
                <div className="container">
                    <h2 className="section-title" data-aos="fade-down" data-aos-delay="100">About Our Farmhouse</h2>
                    <div className="about-content">
                        <div className="about-text" data-aos="fade-right" data-aos-delay="200">
                            <p>Nestled in the rolling hills of the countryside, Paradise Villa offers a perfect blend of
                                rustic charm and modern comfort. Our 19th-century restored farmhouse sits on 20 acres of lush
                                greenery, providing a peaceful retreat from the hustle and bustle of city life.</p>
                            <p>Located just 90 minutes from the city, we're close enough for a weekend getaway but far enough to
                                feel like a true escape. Enjoy fresh air, homegrown organic meals, and the simple pleasures of
                                country living.</p>
                            <p>Whether you're looking for a romantic getaway, family vacation, or solo retreat, our farmhouse
                                provides the perfect setting to reconnect with nature and yourself.</p>
                            <Link to="/about" className="btn btn-outline-success mt-3" data-aos="zoom-in-up" data-aos-delay="300">
                                Learn More About Us
                            </Link>
                        </div>
                        <div className="about-image" data-aos="fade-left" data-aos-delay="400">
                            <img src={exterior} alt="Paradise Villa exterior" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Amenities Section */}
            <div className="amenities" data-aos="fade-up">
                <div className="container">
                    <h2 className="section-title" data-aos="fade-down" data-aos-delay="100">Our Amenities</h2>
                    <div className="amenities-grid">
                        {amentity.map((amenity, index) => (
                            <div className="amenity-card" key={index} data-aos="fade-up" data-aos-delay={200 + index * 100}>
                                <div className="homeamenity-icon">{amenity.icon}</div>
                                <h3>{amenity.title}</h3>
                                <p>{amenity.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="gallery" data-aos="fade-up">
                <div className="container">
                    <h2 className="section-title" data-aos="fade-down" data-aos-delay="100">Gallery</h2>
                    <div className="gallery-grid">
                        {media.map((media, index) => (
                            <div className="gallery-item" key={index} data-aos="fade-up" data-aos-delay={200 + index * 100}>
                                {media.type === 'img' ? (
                                    <img src={media.src} alt={media.alt} />
                                ) : (
                                    <video className="gallery-video" autoPlay muted loop playsInline>
                                        <source src={media.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5" data-aos="zoom-in-up" data-aos-delay="800">
                        <Link to="/gallery" className="btn btn-success">View Full Gallery</Link>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="testimonials" data-aos="fade-up">
                <div className="container">
                    <h2 className="section-title" data-aos="fade-down" data-aos-delay="100">What Our Guests Say</h2>
                    <div className="testimonial-grid">
                        {testimonial.map((testimonial, index) => (
                            <div className="testimonial-card" key={index} data-aos={index === 0 ? 'fade-right' : index === 1 ? 'fade-up' : 'fade-left'} data-aos-delay={200 + index * 100}>
                                <div className="rating">
                                    {[...Array(Math.floor(testimonial.stars))].map((_, i) => <FaStar key={i} />)}
                                    {testimonial.stars % 1 !== 0 && <FaStarHalfAlt />}
                                </div>
                                <p className="testimonial-text">{testimonial.text}</p>
                                <p className="testimonial-author">{testimonial.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="cta-section" data-aos="zoom-in-up" data-aos-delay="200">
                <div className="container cta-content text-center">
                    <h2 data-aos="fade-up" data-aos-delay="300">Ready for Your Countryside Escape?</h2>
                    <p data-aos="fade-up" data-aos-delay="400">
                        Experience the tranquility of Paradise Villa. Book your stay today and create memories that will last a lifetime.
                    </p>
                    <Link to="/booking" className="btn btn-success btn-lg" data-aos="fade-up" data-aos-delay="500">
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
