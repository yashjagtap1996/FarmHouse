import React from 'react';
import '../assets/css/header.css';
import { FaLeaf, FaUser, FaCalendarAlt, FaPhoneAlt, FaImages } from 'react-icons/fa';



import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="farmhouse-header">
            <nav className="navbar navbar-expand-lg">
                <div className="head-div">
                    <a className="navbar-brand" href="#home">
                        <FaLeaf className="brand-icon" />
                        <span className="brand-name">Green Valley Farmhouse</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <span className="nav-icon"><FaLeaf /></span>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <span className="nav-icon"><FaLeaf /></span>
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <span className="nav-icon"><FaLeaf /></span>
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="">
                                    <span className="nav-icon"><FaCalendarAlt /></span>
                                    Booking
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    <span className="nav-icon"><FaPhoneAlt /></span>
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    <span className="nav-icon"><FaImages /></span>
                                    Gallery
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link login-btn" to="/login">
                                    <span className="nav-icon"><FaUser /></span>
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link login-btn" to="/signup">
                                    <span className="nav-icon"><FaUser /></span>
                                    Signup
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
