function Product() {
    const paraStyle = { lineHeight: 1.5, color: '#6b6b6b' }
    const h2Style = { lineHeight: 3, fontSize: '2rem', fontWeight: 'bold' }
    return (
        <section className="container" id="product">
            <div className="bit flex-row flex-wrap" style={{ justifyContent: 'space-evenly', flexWrap: 'wrap', marginTop:'35px' }}>
                <div className="product__img product__content--left center-iframe">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1"></iframe>
                </div>
                <div className="product__content product__content--right">
                    <h3 >FUTURE OF COMMERCE IS SOCIAL, VIDEO-BASED</h3>
                    <h2 style={h2Style}>Bits</h2>
                    <p style={paraStyle} className="prod_font">
                        From a desire to crave food while watching mouthwatering food videos, many faced disappointment due to the lack of delivery options. Moreover, popular food delivery apps don't have the discovery, still relying on fixed images and text. Here comes the revolutionary platform: Discover personalized, mouthwatering 1-minute food videos from local restaurants and nearby dishes, delivered directly to your doorstep.
                    </p>
                </div>
            </div>
            <div className="team-buying flex-row flex-wrap" style={{ justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                <div className="product__content product__content--left">
                    <h2 style={h2Style}>Team Buying</h2>
                    <p style={paraStyle} className="prod_font">
                        You can place orders individually or as a team. In team buying, you will have two options: One is to purchase with your friends or family, and the other option is to join an available existing team and place an order. Offers will be provided for team purchases.
                    </p>
                </div>
                <div className="product__img product__content--right">
                    <img src="/assets/team_buy.jpeg" alt="Team buying feature" height='400px' className="image_shadow" />
                </div>
            </div>
        </section >
    )
}

export default Product
