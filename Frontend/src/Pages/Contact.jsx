import React, { useState } from 'react';
import '../assets/css/contact.css';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaPaperPlane } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import axios from 'axios'

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


    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const { register, handleSubmit, reset,formState: { errors } } = useForm()
    const onSubmit = async (data) => {
try {
    const response = await axios.post("http://localhost:3000/contact", data)
    alert(response.data.message || "Message sent successfully!");
    reset();
} catch (error) {
    console.error("Error sending message:", error);
}
    }

    return (
        <div className="contact-page">
            <div className='contact-hero'>
                <div className='container'>
                    <div className='contact-hero-content text-center py-5'>
                        <h1 className='display-4 fw-bold mb-3'>Get In Touch</h1>
                        <p className="lead mb-0">We'd love to hear from you! Reach out to book your stay or ask any questions.</p>
                    </div>
                </div>
            </div>

            <div className='container py-5'>
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="contact-info-card p-4 p-lg-5 h-100">
                            <h2 className="section-title mb-4">Contact Information</h2>

                            <div className="contact-item d-flex mb-4">
                                <div className="contact-icon me-3">
                                    <FaMapMarkerAlt className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h5 className="contact-item-title mb-1">Address</h5>
                                    <p className="contact-item-text mb-0">123 Green Fields Farm, Near ABC Village, XYZ District</p>
                                </div>
                            </div>

                            <div className="contact-item d-flex mb-4">
                                <div className="contact-icon me-3">
                                    <FaPhoneAlt className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h5 className="contact-item-title mb-1">Phone</h5>
                                    <p className="contact-item-text mb-0">+91 12345 67890</p>
                                </div>
                            </div>

                            <div className="contact-item d-flex mb-4">
                                <div className="contact-icon me-3">
                                    <FaWhatsapp className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h5 className="contact-item-title mb-1">WhatsApp</h5>
                                    <p className="contact-item-text mb-0">
                                        <a href="https://wa.me/8623099391" target='_blank' className="whatsapp-link">Chat with us directly</a>
                                    </p>
                                </div>
                            </div>

                            <div className="contact-item d-flex">
                                <div className="contact-icon me-3">
                                    <FaEnvelope className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h5 className="contact-item-title mb-1">Email</h5>
                                    <p className="contact-item-text mb-0">contact@greenfieldsfarm.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="map-container h-100 rounded-3 overflow-hidden">
                            <h1>Map here</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="text-center mb-4">Send us a Message</h2>
                        <form className='contact-form bg-white p-4 p-md-5 rounded-3 shadow-sm' onSubmit={handleSubmit(onSubmit)}>
                            <div className='mb-3'>
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input
                                    type="text" 
                                    name='name'
                                    {...register("name", { required: "Name is Required" })}
                                    className={`form-control ${errors.name ? 'is-invalid' : 'isSuccess'}`}
                                    placeholder='John Doe'
                                />
                                <p className='text-danger'>{errors.name?.message}</p>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="email" className="form-label">Your Email</label>
                                <input
                                    type="email" 
                                    name='email'
                                    {...register("email", {
                                        required: "Email is Required", pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                                            message: "Enter a valid email address"
                                        }
                                    },)}
                                    className={`form-control ${errors.email ? 'is-invalid' : 'isSuccess'}`}
                                    placeholder='your@email.com'
                                />
                                <p className='text-danger'>{errors.email?.message}</p>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="phone" className="form-label">Your Phone Number</label>
                                <input
                                    type="tel"
                                    name='phone'
                                    {...register("phone", {
                                        required: "Phone Number is Required",
                                        pattern: {
                                            value: /^[6-9]\d{9}$/,
                                            message: "Enter a valid 10-digit Indian phone number"
                                        }
                                    })}
                                    className={`form-control ${errors.phone ? 'is-invalid' : 'isSuccess'}`}
                                    placeholder='+91 98765 43210'
                                />
                                <p className='text-danger'>{errors.phone?.message}</p>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor="purpose" className="form-label">Purpose of Contact</label>
                                <select 
                                    name='purpose'
                                    {...register("purpose", { required: "Purpose is Required" })}
                                    className={`form-select ${errors.purpose ? 'is-invalid' : 'isSuccess'}`}
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select a purpose</option>
                                    <option value="Booking">Booking</option>
                                    <option value="Event Inquiry">Event Inquiry</option>
                                    <option value="General Questions">General Questions</option>
                                    <option value="Other">Other</option>
                                </select>
                                <p className='text-danger'>{errors.purpose?.message}</p>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="form-label">Your Message</label>
                                <textarea 
                                 name='message'
                                    {...register("message", {
                                        maxLength: {
                                            value: 100,
                                            message: "Message should be less than 100 characters"
                                        }
                                    })}
                                    className={`form-control ${errors.message ? 'is-invalid' : 'isSuccess'}`}
                                    rows="4"
                                    placeholder="How can we help you?"
                                ></textarea>
                                <p className='text-danger'>{errors.message?.message}</p>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-success w-100 py-3 fw-bold d-flex align-items-center justify-content-center"
                            >
                                <FaPaperPlane className="me-2" size={18} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>


            <div className='text-center py-4 bg-light'>
                <a href="https://wa.me/8623099391" target='_blank' className='whatsapp-btn'>
                    <FaWhatsapp className="me-2" /> Chat with Us on WhatsApp
                </a>
            </div>


            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="text-center mb-5">Frequently Asked Questions</h2>
                        {FAQ.map((item, index) => (
                            <div
                                key={index}
                                className={`faq-card ${openIndex === index ? 'active' : ''}`}
                            >
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


            <div className='text-center py-5 bg-light'>
                <button className='book-button btn btn-success btn-lg px-5 py-3 fw-bold'>
                    Check Availability / Book Now
                </button>
            </div>
        </div>
    );
};

export default Contact;
