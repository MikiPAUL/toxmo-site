
import { useRef, useEffect } from 'react';

function Product() {
    const paraStyle: React.CSSProperties = { lineHeight: 1.5, color: '#6b6b6b' };
    const h2Style: React.CSSProperties = { lineHeight: 3, fontSize: '2rem', fontWeight: 'bold' };
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const section = sectionRef.current;
        if (!section) return;

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;

        if (scrollTop > sectionTop) {
            section.classList.add('animated-slide-in');
        } else {
            section.classList.remove('animated-slide-in');
        }
    };

    return (
        <section ref={sectionRef} className="container" id="product">
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h3>FUTURE OF COMMERCE IS SOCIAL, VIDEO-BASED</h3>
                <h1 style={{ fontSize: '30px', fontWeight: 'bolder', marginTop: '20px', color: 'green' }}> Menus <i className="material-icons">swap_horiz</i> Videos </h1>
            </div>
            <div className="bit flex-row flex-wrap" style={{ justifyContent: 'space-evenly', flexWrap: 'wrap', marginTop: '35px' }}>
                <div className="product__img product__content--left center-iframe">
                    <img src="/assets/delivery.jpeg" alt="Team buying feature" height='400px' className="image_shadow" />
                </div>
                <div className="product__content product__content--right">
                    <h2 style={h2Style}>Delivery</h2>
                    <p style={paraStyle} className="prod_font">
                        No more need to interact with images and text, or thinking more what to eat when ordering food online; here comes the revolutionary platform. Discover mouthwatering food videos with recommended dishes and have them delivered to your doorstep.
                    </p>
                </div>
            </div>
            <div className="team-buying flex-row flex-wrap" style={{ justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                <div className="product__content product__content--left">
                    <h2 style={h2Style}>Dining</h2>
                    <p style={paraStyle} className="prod_font">
                        Say goodbye to the old way of dining out, where you'd flip through menu cards to order food. Now, simply scan the Toxmo card to see mouthwatering dishes in the restaurant through videos, and easily order them, and even invite your friends or family to join with the team buying feature, unlocking special offers on food.
                    </p>
                </div>
                <div className="product__img product__content--right">
                    <img src="/assets/dining.jpeg" alt="Team buying feature" height='400px' className="image_shadow" />
                </div>
            </div>
        </section>
    )
}

export default Product;
