import React from 'react';
import '../assets/css/footer.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTripadvisor } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="farmhouse-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section ">
                        <h3 className="footer-title">Green Valley Farmhouse</h3>
                        <p className="footer-text">
                            Experience the serenity of nature with our eco-friendly farmhouse retreat.
                            Perfect for family getaways and peaceful vacations.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-icon"><FaFacebookF /></a>
                            <a href="#" className="social-icon"><FaInstagram /></a>
                            <a href="#" className="social-icon"><FaTripadvisor /></a>
                        </div>
                    </div>

                    <div className="footer-section links">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section contact">
                        <h3 className="footer-title">Contact Us</h3>
                        <div className="footer-contact-info">
                            <div className="footer-contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <span>123 Farm Road, Countryside, IN 12345</span>
                            </div>
                            <div className="footer-contact-item">
                                <FaPhoneAlt className="contact-icon" />
                                <span>+1 (123) 456-7890</span>
                            </div>
                            <div className="footer-contact-item">
                                <FaEnvelope className="contact-icon" />
                                <span>info@greenvalleyfarm.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Green Valley Farmhouse. All Rights Reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;