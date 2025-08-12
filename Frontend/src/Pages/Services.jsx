import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaChevronDown,
    FaHome,
    FaUtensils,
    FaTractor,
    FaChild,
    FaHeart,
    FaUsers,
    FaStar,
    FaStarHalfAlt,
    FaArrowRight,
    FaCalendarCheck,
    FaEnvelope
} from 'react-icons/fa';
import '../assets/css/services.css';
import mainImage from '../assets/images/MainImage.jpg';
import food from '../assets/images/Food.jpeg';
import farmActivity from '../assets/images/FarmActivity.jpeg';
import gateway from '../assets/images/Gateway.jpeg';
import retreat from '../assets/images/Retreat.jpeg';
import group from '../assets/images/Group.jpeg';

const Services = () => {

    const service = [
        {
            icon: <FaHome />, image: mainImage, title: 'Rustic Luxury Stays',
            description: 'Handcrafted accommodations blending traditional charm with modern amenities.',
            features: ['Hand-hewn timber cottages', 'Organic cotton linens', 'Private verandas', 'Artisan toiletries'],
            linkText: 'View Rooms'
        },
        {
            icon: <FaUtensils />, image: food, title: 'Farm-to-Table Dining',
            description: 'Seasonal menus featuring ingredients harvested from our organic gardens.',
            features: ['Daily changing menus', 'Cooking workshops', 'Private dining experiences', 'Artisan cheese boards'],
            linkText: 'Explore Menus'
        },
        {
            icon: <FaTractor />, image: farmActivity, title: 'Countryside Activities',
            description: 'Immerse yourself in authentic farm life with our hands-on experiences.',
            features: ['Morning animal feeding', 'Seasonal harvest activities', 'Guided nature walks', 'Traditional craft workshops'],
            linkText: 'View Activities'
        }
    ];

    const pkg = [
        {
            icon: <FaChild />, image: gateway, title: 'Family Getaway',
            description: 'Two days of adventure and relaxation for the whole family.',
            features: ['Two nights accommodation', 'Daily farm activities', 'Interactive cooking class', 'Evening storytelling'],
            price: '$495', duration: '/ 2 nights'
        },
        {
            icon: <FaHeart />, image: retreat, title: 'Couples Retreat',
            description: 'An intimate escape with private dining and countryside views.',
            features: ['Three nights in luxury suite', 'Sunset champagne picnic', 'Private five-course dinner', 'Couples massage'],
            price: '$895', duration: '/ 3 nights'
        },
        {
            icon: <FaUsers />, image: group, title: 'Group Celebration',
            description: 'Celebrate special occasions with friends in our barn venue.',
            features: ['Exclusive venue hire', 'Welcome drinks reception', 'Farm-to-table banquet', 'Morning after brunch'],
            price: '$2,450', duration: '/ event'
        }
    ];

    const testimonials = [
        {
            name: 'Sarah Johnson',
            img: 'https://randomuser.me/api/portraits/women/45.jpg',
            quote: 'The cheesemaking workshop was incredible! We made our own cheese from the milk of the farm\'s cows. An unforgettable experience from start to finish.',
            rating: 5,
            meta: 'Family Stay, June 2023'
        },
        {
            name: 'Michael Brown',
            img: 'https://randomuser.me/api/portraits/men/32.jpg',
            quote: 'Proposing during the sunset picnic arranged by the farmhouse team was perfect. Their attention to detail made our engagement magical.',
            rating: 5,
            meta: 'Romantic Escape, April 2023'
        },
        {
            name: 'Emily Wilson',
            img: 'https://randomuser.me/api/portraits/women/68.jpg',
            quote: 'Our team retreat was transformed by the farmhouse activities. The falconry experience brought us together in unexpected ways.',
            rating: 4.5,
            meta: 'Corporate Retreat, May 2023'
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="hhf-service-hero">
                <div className="container">
                    <h1 className="hhf-heading">Our Farmhouse Experiences</h1>
                    <p className="lead">Discover authentic rural charm with modern comforts in our countryside retreat</p>
                    <div className="hhf-scroll-indicator">
                        <FaChevronDown />
                    </div>
                </div>
            </section>

            {/* Main Services */}
            <section className="hhf-service-section" data-aos="fade-up">
                <div className="container">
                    <div className="text-center mb-5" data-aos="fade-up" data-aos-delay="100">
                        <span className="hhf-section-subtitle">Authentic Countryside Living</span>
                        <h2 className="hhf-heading hhf-section-title">Signature Experiences</h2>
                        <p className="hhf-section-description">Tailored services crafted to create unforgettable rural memories</p>
                    </div>

                    <div className="row g-4">
                        {/* Service Cards */}
                        {service.map((service, index) => (
                            <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={200 + index * 100} key={index}>
                                <div className="hhf-service-card">
                                    <div className="hhf-service-img-container">
                                        <img src={service.image} className="hhf-service-img w-100" alt={service.title} />
                                        <div className="hhf-service-overlay"></div>
                                    </div>
                                    <div className="hhf-service-content text-center">
                                        <div className="hhf-service-icon">{service.icon}</div>
                                        <h3 className="hhf-heading">{service.title}</h3>
                                        <p className="hhf-service-excerpt">{service.description}</p>
                                        <ul className="hhf-feature-list text-start">
                                            {service.features.map((f, i) => <li key={i}>{f}</li>)}
                                        </ul>
                                        <a href="#" className="hhf-btn-outline mt-3">
                                            {service.linkText} <FaArrowRight className="ms-2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section className="hhf-service-section hhf-highlight-bg">
                <div className="container">
                    <div className="text-center mb-5" data-aos="fade-up">
                        <span className="hhf-section-subtitle">Tailored Experiences</span>
                        <h2 className="hhf-heading hhf-section-title">Curated Packages</h2>
                        <p className="hhf-section-description">Perfect combinations of our most popular services</p>
                    </div>

                    <div className="row g-4">
                        {pkg.map((pkg, index) => (
                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100 + index * 100} key={index}>
                                <div className="hhf-package-card">
                                    <div className="hhf-package-img-container">
                                        <img src={pkg.image} className='w-100' alt={pkg.title} />
                                        <div className="hhf-package-overlay"></div>
                                    </div>
                                    <div className="p-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="hhf-package-icon">{pkg.icon}</div>
                                            <h3 className="hhf-heading mb-0 ms-3">{pkg.title}</h3>
                                        </div>
                                        <p className="hhf-package-description">{pkg.description}</p>
                                        <ul className="hhf-feature-list">
                                            {pkg.features.map((f, i) => <li key={i}>{f}</li>)}
                                        </ul>
                                        <div className="d-flex justify-content-between align-items-center mt-4">
                                            <div>
                                                <span className="hhf-price-from">From</span>
                                                <span className="hhf-price">{pkg.price}</span>
                                                <span className="hhf-price-duration">{pkg.duration}</span>
                                            </div>
                                            <a href="#" className="hhf-btn-primary">
                                                Book Now <FaArrowRight className="ms-2" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="hhf-service-section">
                <div className="container">
                    <div className="text-center mb-5" data-aos="fade-up">
                        <span className="hhf-section-subtitle">Guest Stories</span>
                        <h2 className="hhf-heading hhf-section-title">Memorable Experiences</h2>
                        <p className="hhf-section-description">What our visitors say about their stays</p>
                    </div>
                    <div className="row g-4">
                        {testimonials.map((t, i) => (
                            <div className="col-lg-4" data-aos={i === 0 ? 'fade-right' : i === 1 ? 'zoom-in' : 'fade-left'} key={i}>
                                <div className="hhf-testimonial-card text-center">
                                    <div className="hhf-testimonial-img-container">
                                        <img src={t.img} className="hhf-testimonial-img" alt="Guest" />
                                    </div>
                                    <div className="hhf-rating">
                                        {[...Array(Math.floor(t.rating))].map((_, i) => <FaStar key={i} />)}
                                        {t.rating % 1 !== 0 && <FaStarHalfAlt />}
                                    </div>
                                    <p className="hhf-testimonial-quote">"{t.quote}"</p>
                                    <h5 className="hhf-heading mb-1">{t.name}</h5>
                                    <small className="hhf-testimonial-meta">{t.meta}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="hhf-cta-section">
                <div className="container">
                    <div className="hhf-cta-content">
                        <span className="hhf-cta-subtitle">Begin Your Countryside Journey</span>
                        <h2 className="hhf-heading mb-4 text-white">Ready for Your Farmhouse Escape?</h2>
                        <p className="hhf-cta-description mb-5">Book now to experience authentic countryside living at its finest</p>
                        <div className="hhf-cta-buttons">
                            <a href="#" className="hhf-btn-primary me-3">
                                Check Availability <FaCalendarCheck className="ms-2" />
                            </a>
                            <Link to="/contact" className="hhf-btn-outline">
                                Contact Us <FaEnvelope className="ms-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
