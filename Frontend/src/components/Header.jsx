import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    FaLeaf,
    FaUser,
    FaCalendarAlt,
    FaPhoneAlt,
    FaImages,
    FaServicestack,
    FaHome,
    FaMoon,
    FaSun
} from 'react-icons/fa';
import { useTheme } from '../ThemeContext';
import '../assets/css/header.css';
import { IoIosLogOut } from "react-icons/io";
import { useToast } from '../ToastProvider';

const Header = () => {
    const { pathname } = useLocation();
    const collapseRef = useRef(null);
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();
    const { showToast } = useToast();


    const [user, setUser] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Fetch user session
    const fetchUser = async () => {
        try {
            const res = await axios.get('http://localhost:3000/user', {
                withCredentials: true
            });
            setUser(res.data);
        } catch (err) {
            console.error('Failed to fetch user:', err);
            setUser(null);
        }
    };

    // Logout
    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:3000/logout', {}, { withCredentials: true });
            setUser(null);
            setDropdownOpen(false);
            showToast('Logged out successfully', 'success');
            navigate('/login');
        } catch (err) {
            console.error('Logout failed:', err);
        }
    };

    // Get initials
    const getInitials = (name) => {
        if (!name) return '';
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase();
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        const collapseEl = collapseRef.current;
        if (collapseEl && collapseEl.classList.contains('show')) {
            const bsCollapse = window.bootstrap.Collapse.getInstance(collapseEl);
            if (bsCollapse) {
                bsCollapse.hide();
            }
        }

        fetchUser();
    }, [pathname]);

    return (
        <header className="farmhouse-header">
            <nav className="navbar navbar-expand-lg p-2">
                <div className="container-fluid head-container">
                    <Link className="navbar-brand" to="/">
                        <FaLeaf className="brand-icon" />
                        <span className="brand-name">Paradise Villa</span>
                    </Link>

                    <div className="d-flex align-items-center gap-2">
                        {/* Dark Mode Toggle (Mobile) */}
                        <button
                            className="theme-toggle-btn d-block d-lg-none"
                            onClick={toggleTheme}
                            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                            aria-label="Toggle color theme"
                        >
                            {theme === 'light' ? <FaMoon /> : <FaSun />}
                        </button>

                        {/* Navbar Toggler */}
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
                    </div>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} to="/">
                                    <FaHome className="nav-icon" />
                                    <span className="nav-text">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/about' ? 'active' : ''}`} to="/about">
                                    <FaLeaf className="nav-icon" />
                                    <span className="nav-text">About</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/services' ? 'active' : ''}`} to="/services">
                                    <FaServicestack className="nav-icon" />
                                    <span className="nav-text">Services</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/booking' ? 'active' : ''}`} to="/booking">
                                    <FaCalendarAlt className="nav-icon" />
                                    <span className="nav-text">Booking</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/gallery' ? 'active' : ''}`} to="/gallery">
                                    <FaImages className="nav-icon" />
                                    <span className="nav-text">Gallery</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} to="/contact">
                                    <FaPhoneAlt className="nav-icon" />
                                    <span className="nav-text">Contact</span>
                                </Link>
                            </li>

                            {/* Auth Section */}
                            {user ? (
                                <li className="nav-item dropdown">
                                    <div
                                        className="profile-circle"
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                    >
                                        {getInitials(user.userName)}
                                    </div>
                                    {dropdownOpen && (
                                        <ul className="dropdown-menu show" style={{ right: 0, left: 'auto' }}>
                                            <li>
                                                <button
                                                    className="dropdown-item"
                                                    onClick={handleLogout}
                                                >
                                                    Logout <IoIosLogOut className='ms-3 text-danger' size={30} />
                                                </button>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            ) : (
                                <>
                                    <li className="nav-item auth-item">
                                        <Link className={`nav-link login-btn ${pathname === '/login' ? 'active' : ''}`} to="/login">
                                            <FaUser className="nav-icon" />
                                            <span className="nav-text">Login</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item me-2 auth-item">
                                        <Link className={`nav-link login-btn ${pathname === '/signup' ? 'active' : ''}`} to="/signup">
                                            <span className="nav-text">Sign Up</span>
                                        </Link>
                                    </li>
                                </>
                            )}

                            {/* Dark Mode Toggle (Desktop) */}
                            <li className="nav-item auth-item d-none d-lg-block">
                                <button
                                    className="theme-toggle-btn"
                                    onClick={toggleTheme}
                                    title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
                                    aria-label="Toggle color theme"
                                >
                                    {theme === 'light' ? <FaMoon /> : <FaSun />}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    );
};

export default Header;
