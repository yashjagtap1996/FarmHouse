import React from 'react';
import '../assets/css/header.css';
import { FaLeaf, FaUser, FaCalendarAlt, FaPhoneAlt, FaImages, FaServicestack, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {


    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <header className="farmhouse-header">
            <nav className="navbar navbar-expand-lg p-2">
                <div className="container-fluid head-container">
                    <Link className="navbar-brand" to="/">
                        <FaLeaf className="brand-icon" />
                        <span className="brand-name">Paradise Villa</span>
                    </Link>
                    <div className="d-flex align-items-center">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        <FaHome className="nav-icon" />
                                        <span className="nav-text">Home</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                        <FaLeaf className="nav-icon" />
                                        <span className="nav-text">About</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/services">
                                        <FaServicestack className="nav-icon" />
                                        <span className="nav-text">Services</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/booking">
                                        <FaCalendarAlt className="nav-icon" />
                                        <span className="nav-text">Booking</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/gallery">
                                        <FaImages className="nav-icon" />
                                        <span className="nav-text">Gallery</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">
                                        <FaPhoneAlt className="nav-icon" />
                                        <span className="nav-text">Contact</span>
                                    </Link>
                                </li>
                                <li className="nav-item auth-item">
                                    <Link className="nav-link login-btn" to="/login">
                                        <FaUser className="nav-icon" />
                                        <span className="nav-text">Login</span>
                                    </Link>
                                </li>
                                <li className="nav-item auth-item">
                                    <Link className="nav-link login-btn" to="/signup">
                                        <span className="nav-text">Sign Up</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;