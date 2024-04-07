function WaitList() {
    return (
        <section style={{ backgroundColor: '#ffd500', color: 'white' }}>
            <div className="container">
                <h3 style={{ textAlign: "center", paddingBottom: '1.5rem', color: '#1b1b1b', fontWeight: 400, lineHeight: 1.6 }}>
                    YOUR HUNGRY IS FULFILLED IN SPECIAL WAY
                </h3>
                <h2 style={{ fontSize: '3rem', fontWeight: "bold", textAlign: "center", paddingBottom: '2rem' }}>Join the Waitlist</h2>
                <form action="" method="post" className="waitlist__form flex-col" style={{ rowGap: '1.5rem' }}>
                    <input type="text" name="name" id="name" placeholder="Name" />
                    <input type="email" name="email" id="email" placeholder="Email" />
                    <input type="text" name="phone-no" id="phone-no" placeholder="Phone Number" />
                    <input type="text" name="city" id="city" placeholder="City" />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button type="submit">
                            <span style={{ color: 'white' }}>Submit</span>
                        </button>
                    </div>
                </form>
            </div>
        </section >
    )
}

export default WaitList