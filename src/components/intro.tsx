import logo from '../assets/toxmo_logo.svg'

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
                            <a href="#product">Product</a>
                            <a href="#waitlist">Join Waitlist</a>
                            <a href="#contact">Contact</a>
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
                            <img src="src/assets/hero_img.jpeg" alt="hero image" height='400px' className='image_shadow' />
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Intro