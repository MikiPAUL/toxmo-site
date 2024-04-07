function Contact() {
    return (
        <footer style={{ backgroundColor: '#1b1b1b',  padding: '35px' }} id="contact">
            <div className="container" style={{ maxWidth: '400px' }}>
                <div className="footer__logo" >
                    <img src="/assets/logo.png" alt="Toxmo Logo" style={{ margin: '0 auto' }} />
                </div>
                <nav style={{ paddingTop: '2rem', color: '#6b6b6b' }}>
                    <ul className="flex-row" style={{ flexWrap: 'wrap', gap: '10px' }}>
                        <li><a href="contact@toxmo.in">Email</a></li>
                        <li><a href="https://www.instagram.com/toxmo.in/?igsh=MXZqZzNsemx2ODJrdA%3D%3D">Instagram</a></li>
                        <li><a href="https://www.linkedin.com/company/toxmo/">Linkedin</a></li>
                        <li><a href="https://www.youtube.com/@Toxmostore?si=q7bPWLLS4asskyiW">Youtube</a></li>
                    </ul>
                </nav>
            </div>
            <div className="copyright">
    <span>&copy;</span> Toxmo, 2024
</div>

        </footer>
    )
}

export default Contact
