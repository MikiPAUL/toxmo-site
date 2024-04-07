import logo from '/assets/toxmo_logo.svg'
import { HashLink as Link } from 'react-router-hash-link';

function Intro() {
    return (
        <header>
            <div className="container">
                <nav>
                    <ul className="flex-row space-btwn flex-wrap" style={{ alignItems: 'center' }}>
                        <div className="left flex-row">
                            <img src={logo} alt="Toxmo Logo" width={'150px'} height={'50px'} />
                        </div>
                        <div className="right flex-row hamburger" style={{ gap: '2rem' }}>
                            <Link to="#product" smooth>Product</Link>
                            <Link to="#waitlist" smooth>Join Waitlist</Link>
                            <Link to="#contact" smooth>Contact</Link>
                        </div>
                    </ul>
                </nav>
                <div style={{ padding: '3em 0' }}>
                    <div className="flex-row flex-wrap" style={{ justifyContent: 'space-between' }}>
                        <div className="hero flex-col" style={{ justifyContent: 'center' }}>
                            <div className="intro__content">
                                <h1>Toxmo</h1>
                                <h2>1 minute video-based food delivery</h2>
                            </div>
                        </div>
                        <div className="intro__img">
                            <img src="/assets/hero_img.jpeg" alt="hero image" height='400px' className='image_shadow' />
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Intro