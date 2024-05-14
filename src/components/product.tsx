
import { useRef, useEffect, useState } from 'react';

function Product() {
    const paraStyle: React.CSSProperties = { lineHeight: 1.5, color: '#6b6b6b' };
    const h2Style: React.CSSProperties = { lineHeight: 3, fontSize: '2rem', fontWeight: 'bold' };

    const [animateSection1, setAnimateSection1] = useState(false);
    const [animateSection2, setAnimateSection2] = useState(false);

    const sectionRef1 = useRef<HTMLDivElement>(null);
    const sectionRef2 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const section1 = sectionRef1.current;
            const section2 = sectionRef2.current;
            if (!section1 || !section2) return;

            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            const section1Top = section1.getBoundingClientRect().top;
            const section1Bottom = section1Top + section1.offsetHeight;
            if (scrollTop > section1Top && scrollTop < section1Bottom && !animateSection1) {
                setAnimateSection1(true);
            }

            const section2Top = section2.getBoundingClientRect().top;
            const section2Bottom = section2Top + section2.offsetHeight;
            if (scrollTop > section2Top && scrollTop < section2Bottom && !animateSection2) {
                setAnimateSection2(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger once initially
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [animateSection1, animateSection2]);

    return (
        <>
            <section ref={sectionRef1} className="container" id="product" style={{ transform: animateSection1 ? 'translateX(0)' : 'translateX(-100%)', transition: 'transform 0.8s ease' }}>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <h3>FUTURE OF COMMERCE IS SOCIAL, VIDEO-BASED</h3>
                    <h1 style={{ fontSize: '30px', fontWeight: 'bolder', marginTop: '20px', color: 'green' }}> Menus <i className="material-icons">swap_horiz</i> Videos </h1>
                </div>
                <div className="bit flex-row flex-wrap" style={{ justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                    <div className="product__img product__content--left center-iframe">
                        <img src="/assets/discover.png" alt="Team buying feature" height='400px' className="image_shadow" />
                    </div>
                    <div className="product__content product__content--right">
                        <h2 style={h2Style}>Discoverbility</h2>
                        <p style={paraStyle} className="prod_font">
                            No more need to interact with images and text, or thinking more what to eat; here comes the revolutionary platform. Discover mouthwatering food-videos and get them delivered to your doorstep and for dining experience explore restaurant dishes in videos instead of menu card.
                        </p>
                    </div>
                </div>
            </section>

            <section ref={sectionRef2} className="container" id="product2" style={{ transform: animateSection2 ? 'translateX(0)' : 'translateX(-100%)', transition: 'transform 0.8s ease' }}>
                <div className="team-buying flex-row flex-wrap" style={{ justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                    <div className="product__content product__content--left">
                        <h2 style={h2Style}>Personalization</h2>
                        <p style={paraStyle} className="prod_font">
                            
                           Get personalized food-feed in videos that feel like your foodie friend showing you exactly what you crave, and easily search for your favorite dishes or nearby sellers and even try with your friends using <span style={{fontWeight:'bold'}}> "Team purchase"</span> feature.
                        
                        </p>
                    </div>
                    <div className="product__img product__content--right">
                        <img src="/assets/search.png" alt="Team buying feature" height='400px' className="image_shadow" />
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Product;
