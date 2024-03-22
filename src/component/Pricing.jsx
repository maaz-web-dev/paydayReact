import React from 'react';
import pricingBanner from '../assets/images/pricing-banner.png'; // Ensure the path is correct based on your project structure

const Pricing = () => {
    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <div className="pricing-content">
                    <p className="section-subtitle">Easiest to use</p>
                    <h2 className="h3 section-title">Get a Loan Today for a Better Tomorrow</h2>
                    <p className="section-text">
                        We commit to connecting you with an approved lender. We also made the process simple. No need to visit hundreds of websites and fill out numerous paperwork. We recognize a personal loan is a private matter. Reasons for needing money range from critical automobile maintenance, unexpected medical expenses, etc.
                    </p>
                    <a href="./form/form.html">
                        <button className="btn btn-primary">Let's Get Started</button>
                    </a>
                </div>
                <figure className="pricing-banner">
                    <img src={pricingBanner} alt="Pricing illustration" />
                </figure>
            </div>
        </section>
    );
};

export default Pricing;
