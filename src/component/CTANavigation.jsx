import { Link } from 'react-router-dom';
import './CTANavigation.css'; // Make sure the path is correct

const CTANavigation = () => {
    return (
        <section className="cta">
            <div className="container">
                <div className="cta-card">
                    <div className="cta-navigation">
                        <Link to="/how-it-works" className="cta-link">How It Works</Link>
                        <Link to="/about-us" className="cta-link">About Us</Link>
                        <Link to="/why-choose-us" className="cta-link">Why Choose Us</Link>
                        <Link to="/rates-fees" className="cta-link">Rates & Fees</Link>
                        <Link to="/lending-policy" className="cta-link">Lending Policy</Link>
                        <Link to="/privacy-policy" className="cta-link">Privacy Policy</Link>
                        <Link to="/terms-of-use" className="cta-link">Terms of Use</Link>
                        <Link to="/disclaimer" className="cta-link">Disclaimer</Link>
                        <Link to="/contact" className="cta-link">Contact</Link>
                        <Link to="/e-consent" className="cta-link">E-Consent</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTANavigation;
