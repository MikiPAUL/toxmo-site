import { useState, useEffect } from 'react';
import logo from '/assets/toxmo_logo.svg';
import { HashLink as Link } from 'react-router-hash-link';
import { FaBars } from 'react-icons/fa';

function Intro() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [contentMarginTop, setContentMarginTop] = useState(0); // State to manage content margin-top

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setContentMarginTop(isMenuOpen ? 0 : 150); // Adjust this value as needed
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header>
            <div className="container">
                <nav>
                    <ul className="flex-row space-btwn flex-wrap" style={{ alignItems: 'center' }}>
                        <div className="left flex-row">
                            <img src={logo} alt="Toxmo Logo" width={'150px'} height={'50px'} />
                        </div>
                        <div className="right flex-row" style={{ gap: '2rem' }}>
                            {/* Show hamburger icon only on mobile screens */}
                            {isMobile && <FaBars className="hamburger" onClick={toggleMenu} />}
                            {/* Dropdown menu */}
                            {!isMobile && (
                                <div className="dropdown-menu">
                                    <Link to="#product" smooth style={{ marginRight: '25px' }}>Product</Link>
                                    <Link to="#waitlist" smooth style={{ marginRight: '25px' }}>Join Waitlist</Link>
                                    <Link to="#contact" smooth>Contact</Link>
                                </div>
                            )}
                            {isMobile && isMenuOpen && (
                                <div className="dropdown-menu">
                                    <Link to="#product" smooth>Product</Link><br /><br />
                                    <Link to="#waitlist" smooth>Join Waitlist</Link><br /><br />
                                    <Link to="#contact" smooth>Contact</Link><br />
                                </div>
                            )}
                        </div>
                    </ul>
                </nav>
                <div style={{ padding: '3em 0', marginTop: contentMarginTop, transition: 'margin-top 0.3s ease-in-out' }}> {/* Apply marginTop */}
                    <div className="flex-row flex-wrap" style={{ justifyContent: 'space-between', transition: 'justify-content 0.3s ease-in-out' }}>
                        <div className="hero flex-col" style={{ justifyContent: 'center', transition: 'justify-content 0.3s ease-in-out' }}>
                            <div className="intro__content" style={{ transition: 'margin-top 0.3s ease-in-out' }}>
                                <h1>Toxmo</h1>
                                <h2>social, video-based food delivery and dining</h2>
                            </div>
                        </div>
                        <div className="intro__img" style={{ transition: 'margin-top 0.3s ease-in-out' }}>
                            <img src="/assets/hero_img.jpeg" alt="hero image" height='400px' className='image_shadow' />
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Intro;
