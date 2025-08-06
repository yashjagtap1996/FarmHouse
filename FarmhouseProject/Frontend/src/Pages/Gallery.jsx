import React, { useEffect, useRef, useState } from 'react';
import '../assets/css/gallery.css'; // assuming your CSS styles are stored here
import exterior from '../assets/images/Exterior.png';
import pool from '../assets/images/Pool.jpg';
import lawn from '../assets/images/Lawn.jpg';
import livingarea from '../assets/images/LeavingArea.jpg';
import kitchen from '../assets/images/Kitchen.jpg'
import dinning from '../assets/images/Dinning.jpeg'
import bedroom from '../assets/images/Bedroom.jpg'
import mainimage from '../assets/images/MainImage.jpg';
import clip4 from '../assets/videos/clip4.mp4';
import clip5 from '../assets/videos/clip5.mp4';
import clip6 from '../assets/videos/clip6.mp4';

const GalleryPage = () => {

    const videos = [
        {
            src: clip4
        },

        {
            src: clip5
        },

        {
            src: clip6
        }
    ]

    const carousal = [{
        badge: 'Exterior',
        src: exterior,
        title: 'Luxury Vibes',
        desc: 'Experience the allure of our villa, where modern architecture meets serene surroundings under the evening sky'
    }, {
        badge: 'Pool',
        src: pool,
        title: 'Refreshing Escape',
        desc: 'Unwind by the crystal-clear pool—perfect for morning dips, afternoon lounging, or serene night swims under the stars.'
    }, {
        badge: 'Lawn',
        src: lawn,
        title: 'Lush Green Escape',
        desc: 'Surrounded by greenery, our lawn garden is the perfect spot to unwind, host gatherings, or simply enjoy nature’s calm.'
    }, {
        badge: 'Living Area',
        src: livingarea,
        title: 'Warm & Welcoming',
        desc: 'Our thoughtfully designed living area blends comfort with style — perfect for family time or peaceful relaxation.'
    }]

    const photos = [{
        badge: 'Kitchen',
        src: kitchen,
        title: 'Gourmet Kitchen',
        desc: 'Fully equipped with premium appliances and cookware'
    }, {
        badge: 'Dining',
        src: dinning,
        title: 'Farmhouse Table',
        desc: 'Seats 10 with beautiful countryside views'
    }, {
        badge: 'Bathroom',
        src: bedroom,
        title: 'Spa Bathroom',
        desc: 'Soaking tub and rainfall shower with organic toiletries'
    }, {
        badge: 'Outdoors',
        src: mainimage,
        title: 'Sunset Patio',
        desc: 'Perfect for evening drinks with panoramic views'
    }, {
        badge: 'Garden',
        src: lawn,
        title: 'Organic Garden',
        desc: 'Pick fresh herbs and vegetables for your meals'
    }, {
        badge: 'Pool Area',
        src: pool,
        title: 'Stone Fireplace',
        desc: 'Cozy up with a book and glass of wine'
    }]

    const [currentIndex, setCurrentIndex] = useState(0);
    const slideInterval = useRef(null);
    const carouselInnerRef = useRef(null);
    const items = useRef([]);
    const dots = useRef([]);

    const updateCarousel = (index) => {
        if (carouselInnerRef.current) {
            carouselInnerRef.current.style.transform = `translateX(-${index * 100}%)`;
        }
        dots.current.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    };

    const slideNext = () => {
        const nextIndex = (currentIndex + 1) % items.current.length;
        setCurrentIndex(nextIndex);
        updateCarousel(nextIndex);
    };

    const startCarousel = () => {
        slideInterval.current = setInterval(slideNext, 5000);
    };

    const stopCarousel = () => {
        clearInterval(slideInterval.current);
    };

    useEffect(() => {
        items.current = document.querySelectorAll('.farmhouse-carousel-item');
        dots.current = document.querySelectorAll('.farmhouse-carousel-dot');
        updateCarousel(currentIndex);
        startCarousel();

        const carousel = document.querySelector('.farmhouse-carousel');
        const handleMouseEnter = () => stopCarousel();
        const handleMouseLeave = () => startCarousel();

        let touchStartX = 0;
        let touchEndX = 0;

        const handleTouchStart = (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stopCarousel();
        };
        const handleTouchEnd = (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            startCarousel();
        };

        const handleSwipe = () => {
            const difference = touchStartX - touchEndX;
            if (difference > 50) {
                slideNext();
            } else if (difference < -50) {
                const prevIndex = (currentIndex - 1 + items.current.length) % items.current.length;
                setCurrentIndex(prevIndex);
                updateCarousel(prevIndex);
            }
        };

        if (carousel) {
            carousel.addEventListener('mouseenter', handleMouseEnter);
            carousel.addEventListener('mouseleave', handleMouseLeave);
            carousel.addEventListener('touchstart', handleTouchStart, { passive: true });
            carousel.addEventListener('touchend', handleTouchEnd, { passive: true });
        }

        return () => {
            stopCarousel();
            if (carousel) {
                carousel.removeEventListener('mouseenter', handleMouseEnter);
                carousel.removeEventListener('mouseleave', handleMouseLeave);
                carousel.removeEventListener('touchstart', handleTouchStart);
                carousel.removeEventListener('touchend', handleTouchEnd);
            }
        };
    }, [currentIndex]);

    return (
        <>
            <header className="gallery-header">
                <div className="farmhouse-container">
                    <h1>Paradise Villa Gallery</h1>
                    <p className="lead">
                        Step into a world of peace and beauty. Explore the stunning views, cozy interiors, and natural charm that make Paradise Villa your perfect escape.
                    </p>
                </div>
            </header>

            <main className="farmhouse-container">
                <section className="farmhouse-carousel-container">
                    <div className="farmhouse-section-title">
                        <h2>Our Farmhouse Retreat</h2>
                    </div>

                    <div className="farmhouse-carousel">
                        <div className="farmhouse-carousel-inner" ref={carouselInnerRef}>
                            {carousal.map((item, idx) => (
                                <div key={idx} className="farmhouse-carousel-item">
                                    <div className="farmhouse-badge">{item.badge}</div>
                                    <img src={item.src} alt={item.title} />
                                    <div className="farmhouse-carousel-caption">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="farmhouse-carousel-nav">
                            {carousal.map((dot, idx) => (
                                <div
                                    key={idx}
                                    className={`farmhouse-carousel-dot ${idx === 0 ? 'active' : ''}`}
                                    onClick={() => {
                                        setCurrentIndex(idx);
                                        updateCarousel(idx);
                                        stopCarousel();
                                        startCarousel();
                                    }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </section>

                <section>
                    <div className="farmhouse-section-title">
                        <h2>Explore Our Spaces</h2>
                    </div>

                    <h3 className="fw-bold mb-4 text-primary">📸 Photos</h3>

                    <div className="farmhouse-image-grid">
                        {photos.map((item, idx) => (
                            <div key={idx} className="farmhouse-grid-item">
                                <div className="farmhouse-badge">{item.badge}</div>
                                <img src={item.src} alt={item.title} />
                                <div className="farmhouse-grid-caption">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h3 className="fw-bold mb-4 text-primary mt-5">🎥 Videos</h3>
                        <div className="farmhouse-image-grid">
                            {videos.map((clip, idx) => (
                                <div key={idx} className="gallery-item">
                                    <video className="gallery-video" autoPlay muted loop playsInline>
                                        <source src={clip.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <section className="farmhouse-cta-section mb-0">
                <div className="background-fixed"></div>
                <div className="farmhouse-cta-content text-center">
                    <h2>Ready for Your Farmhouse Escape?</h2>
                    <p>
                        Book your stay today and experience the perfect blend of rustic charm and modern luxury.
                        <br className="d-none d-md-inline" /> Limited availability for peak seasons.
                    </p>
                    <a href="/booking" className="farmhouse-btn farmhouse-btn-primary">
                        Check Availability
                    </a>
                </div>
            </section>
        </>
    );
};

export default GalleryPage;
