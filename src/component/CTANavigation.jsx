import { NavLink } from 'react-router-dom';
import './CTANavigation.css'; // Make sure the path is correct

const CTANavigation = () => {
    return (
        <section className="cta">
            <div className="container">
                <div className="cta-card">
                    <div className="cta-navigation">
                        <NavLink to="/how-it-works" className="cta-link" activeClassName="active">How It Works</NavLink>
                        <NavLink to="/about-us" className="cta-link" activeClassName="active">About Us</NavLink>
                        <NavLink to="/why-choose-us" className="cta-link" activeClassName="active">Why Choose Us</NavLink>
                        <NavLink to="/rates-fees" className="cta-link" activeClassName="active">Rates & Fees</NavLink>
                        <NavLink to="/lending-policy" className="cta-link" activeClassName="active">Lending Policy</NavLink>
                        <NavLink to="/privacy-policy" className="cta-link" activeClassName="active">Privacy Policy</NavLink>
                        <NavLink to="/terms-of-use" className="cta-link" activeClassName="active">Terms of Use</NavLink>
                        <NavLink to="/disclaimer" className="cta-link" activeClassName="active">Disclaimer</NavLink>
                        <NavLink to="/contact" className="cta-link" activeClassName="active">Contact</NavLink>
                        <NavLink to="/e-consent" className="cta-link" activeClassName="active">E-Consent</NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTANavigation;
