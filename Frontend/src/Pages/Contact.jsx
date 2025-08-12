import React, { useState } from 'react';
import '../assets/css/contact.css';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaPaperPlane, FaExternalLinkAlt, FaUser, FaCalendarCheck, FaImages } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useToast } from '../ToastProvider';

const Contact = () => {
    const FAQ = [
        {
            question: "Do you provide Parking?",
            answer: "Yes, we offer free parking for all our guests."
        },
        {
            question: "Are pets allowed?",
            answer: "Yes, pets are welcome at our farmhouse!"
        },
        {
            question: "What are your check-in times?",
            answer: "Check-in is from 12:00 PM, check-out is until 11:00 AM."
        },
        {
            question: "Do you provide food?",
            answer: "Yes, we provide farm-fresh meals on request."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);
    const { showToast } = useToast();
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:3000/contact", data);
            showToast(response.data.message || "Message sent successfully!", 'success');
            reset();
        } catch (error) {
            console.error("Error sending message:", error);
            showToast("Failed to send message. Please try again later.", 'danger');
        }
    };

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div className="container contact-container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h1 className="contact-title">Connect With Us</h1>
                            <p className="contact-subtitle">
                                We're here to help with any questions about your stay at Green Fields Farm
                            </p>
                            <div className="contact-buttons">
                                <a href="#contact-form" className="btn contact-btn-main">
                                    <FaEnvelope className="me-2" /> Send Message
                                </a>
                                <a href="https://wa.me/8623099391" target="_blank" className="btn contact-btn-outline" rel="noopener noreferrer">
                                    <FaWhatsapp className="me-2" /> WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info & Map */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row g-4">
                        {/* Contact Info Card */}
                        <div className="col-lg-6" data-aos="fade-right">
                            <div className="contact-info-card p-4 p-lg-5 h-100 shadow-sm">
                                <h2 className="section-title mb-4 position-relative pb-3">
                                    <span className="position-relative">Our Contact Details</span>
                                </h2>
                                <div className="contact-items">

                                    {/* Address */}
                                    <div
                                        className="contact-item d-flex mb-4 p-3 rounded-3 bg-white shadow-sm"
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <div className="contact-icon me-3  bg-opacity-10 p-3 rounded-circle">
                                            <FaMapMarkerAlt className="text-primary fs-4" />
                                        </div>
                                        <div>
                                            <h5 className="contact-item-title mb-1 fw-bold">Address</h5>
                                            <p className="contact-item-text mb-0">
                                                123 Green Fields Farm, Near ABC Village, XYZ District
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div
                                        className="contact-item d-flex mb-4 p-3 rounded-3 bg-white shadow-sm"
                                        data-aos="fade-up"
                                        data-aos-delay="200"
                                    >
                                        <div className="contact-icon me-3  bg-opacity-10 p-3 rounded-circle">
                                            <FaPhoneAlt className="text-primary fs-4" />
                                        </div>
                                        <div>
                                            <h5 className="contact-item-title mb-1 fw-bold">Phone</h5>
                                            <p className="contact-item-text mb-0">+91 12345 67890</p>
                                        </div>
                                    </div>

                                    {/* WhatsApp */}
                                    <div
                                        className="contact-item d-flex mb-4 p-3 rounded-3 bg-white shadow-sm"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        <div className="contact-icon me-3 bg-opacity-10 p-3 rounded-circle">
                                            <FaWhatsapp className="text-primary fs-4" />
                                        </div>
                                        <div>
                                            <h5 className="contact-item-title mb-1 fw-bold">WhatsApp</h5>
                                            <p className="contact-item-text mb-0">
                                                <a
                                                    href="https://wa.me/8623099391"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="whatsapp-link d-inline-flex align-items-center"
                                                >
                                                    Chat with us <FaExternalLinkAlt className="ms-2 fs-6" />
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div
                                        className="contact-item d-flex p-3 rounded-3 bg-white shadow-sm"
                                        data-aos="fade-up"
                                        data-aos-delay="400"
                                    >
                                        <div className="contact-icon me-3  bg-opacity-10 p-3 rounded-circle">
                                            <FaEnvelope className="text-primary fs-4" />
                                        </div>
                                        <div>
                                            <h5 className="contact-item-title mb-1 fw-bold">Email</h5>
                                            <p className="contact-item-text mb-0">contact@greenfieldsfarm.com</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="map-container h-100 rounded-4 overflow-hidden shadow-lg border border-3 border-white">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.223104371012!2d77.2091233150796!3d28.50288898247095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1c1a665b9a9%3A0x3a22d3569a1a1a1a!2sGreen%20Fields%20Farm!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    className="min-vh-50"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section id="contact-form" className="py-5 bg-white" data-aos="fade-up">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="text-center mb-5" data-aos="fade-down">
                                <h2 className="display-5 fw-bold mb-3">Send Us a Message</h2>
                                <p className="lead text-muted">Fill out the form below and we'll get back to you as soon as possible</p>
                            </div>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="contact-form bg-light p-4 p-md-5 rounded-4 shadow-sm"
                                data-aos="zoom-in"
                            >
                                <div className="row g-3">
                                    <div className="col-md-6" data-aos="fade-right">
                                        <label className="form-label fw-semibold">Your Name</label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <FaUser className="text-muted" />
                                            </span>
                                            <input
                                                type="text"
                                                {...register("name", { required: "Name is required" })}
                                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        {errors.name && <p className="text-danger">{errors.name.message}</p>}
                                    </div>

                                    <div className="col-md-6" data-aos="fade-left">
                                        <label className="form-label fw-semibold">Your Email</label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <FaEnvelope className="text-muted" />
                                            </span>
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
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        {errors.email && <p className="text-danger">{errors.email.message}</p>}
                                    </div>

                                    <div className="col-12" data-aos="fade-up">
                                        <label className="form-label fw-semibold">Your Phone Number</label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">
                                                <FaPhoneAlt className="text-muted" />
                                            </span>
                                            <input
                                                type="tel"
                                                {...register("phone", {
                                                    required: "Phone number is required",
                                                    pattern: {
                                                        value: /^[0-9]{10}$/,
                                                        message: "Please enter a valid 10-digit phone number"
                                                    }
                                                })}
                                                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                                placeholder="+91 12345 67890"
                                            />
                                        </div>
                                        {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                                    </div>

                                    <div className="col-12" data-aos="fade-up">
                                        <label className="form-label fw-semibold">Purpose</label>
                                        <select
                                            {...register("purpose", { required: "Please select a purpose" })}
                                            className={`form-select ${errors.purpose ? 'is-invalid' : ''}`}
                                            defaultValue=""
                                        >
                                            <option value="">Select a purpose</option>
                                            <option value="Booking">Booking Inquiry</option>
                                            <option value="Event Inquiry">Event Inquiry</option>
                                            <option value="General Questions">General Questions</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {errors.purpose && <p className="text-danger">{errors.purpose.message}</p>}
                                    </div>

                                    <div className="col-12" data-aos="fade-up">
                                        <label className="form-label fw-semibold">Message</label>
                                        <textarea
                                            rows="5"
                                            className="form-control"
                                            placeholder="Your message here..."
                                        />
                                        <div className="form-text text-end">Max 500 characters</div>
                                        {errors.message && <p className="text-danger">{errors.message.message}</p>}
                                    </div>

                                    <div className="col-12 mt-4" data-aos="zoom-in-up">
                                        <button
                                            type="submit"
                                            className="btn btn-success btn-lg w-100 py-3 fw-bold rounded-pill shadow"
                                        >
                                            <FaPaperPlane className="me-2" /> Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            {/* WhatsApp Button */}


            {/* WhatsApp CTA Section */}
            <section className="py-4  bg-opacity-10" data-aos="fade-up" style={{
                backgroundColor: '#e9f4ef',
            }}>
                <div className="container text-center">
                    <div className="d-inline-block p-3 p-md-4  bg-white shadow-sm" data-aos="zoom-in" data-aos-delay="200" style={{ borderRadius: '20px' }}>
                        <div className="d-flex flex-column flex-md-row align-items-center gap-3">
                            <div className="whatsapp-icon bg-success rounded-circle p-3" data-aos="fade-right" data-aos-delay="400">
                                <FaWhatsapp className="text-white fs-2" />
                            </div>
                            <div className="text-start" data-aos="fade-up" data-aos-delay="600">
                                <h3 className="h5 fw-bold mb-1">Need immediate assistance?</h3>
                                <p className="mb-0 text-muted">Chat with us directly on WhatsApp</p>
                            </div>
                            <a
                                href="https://wa.me/8623099391"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-success btn-lg px-4 rounded-pill fw-bold ms-md-auto"
                                data-aos="fade-left"
                                data-aos-delay="800"
                            >
                                <FaWhatsapp className="me-2" /> Start Chat
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section class="py-5 bg-light" data-aos="fade-up">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div class="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
                                <h2 class="display-5 fw-bold mb-3">Frequently Asked Questions</h2>
                                <p class="lead text-muted">Find answers to common questions about our farm stays</p>
                            </div>
                            <div>
                                {FAQ.map((item, index) => (
                                    <div key={index} className={`faq-card ${openIndex === index ? 'active' : ''} shadow-sm mb-3`}>
                                        <div className="faq-header" onClick={() => toggleFAQ(index)}>
                                            <span>{item.question}</span>
                                            {openIndex === index ? <IoIosArrowUp className="faq-icon" /> : <IoIosArrowDown className="faq-icon" />}
                                        </div>
                                        <div className={`faq-body ${openIndex === index ? 'open' : ''}`}>
                                            <p className="mb-0">{item.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Book Now CTA */}

            <section className="contact-cta py-5 bg-white" data-aos="fade-up">
                <div className="container text-center">
                    <div
                        className="p-4 p-md-5 shadow-sm"
                        style={{
                            backgroundColor: '#e9f4ef',
                            borderRadius: '20px'
                        }}
                        data-aos="zoom-in"
                        data-aos-delay="100"
                    >
                        <h2 className="display-5 fw-bold mb-3">Ready for Your Farm Stay?</h2>
                        <p className="lead mb-4">Experience the beauty of nature at Green Fields Farm</p>
                        <div
                            className="d-flex gap-3 justify-content-center flex-wrap"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <a
                                href="/booking"
                                className="btn btn-success btn-lg px-4 rounded-pill fw-bold shadow"
                            >
                                <FaCalendarCheck className="me-2" /> Check Availability
                            </a>
                            <a
                                href="/gallery"
                                className="btn btn-outline-success btn-lg px-4 rounded-pill fw-bold"
                            >
                                <FaImages className="me-2" /> View Gallery
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
