import React from 'react';
import heroBanner from '../assets/images/hero-banner.png'; // Update the path based on your folder structure

const Hero = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Implementation for what happens on form submit
        // For example, you could validate the email and send it to an API
        console.log('Form submitted with email:', event.target.email.value);
    };

    return (
        <main>
            <article>
                <section className="hero" id="hero">
                    <div className="container">
                        <div className="hero-content">
                            <h1 className="h1 hero-title">Get Your Personal Loan Up To $50,000 Personal Loans Online</h1>
                            <form action="" id="heroForm" className="hero-form" onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    className="form-control input-field"
                                    placeholder="Email"
                                    name="email"
                                    id="email"
                                />
                                <button type="submit" className="btn btn-primary">Get started now</button>
                            </form>
                        </div>
                        <figure className="hero-banner">
                            <img src={heroBanner} alt="Seo illustration" />
                        </figure>
                    </div>
                </section>
            </article>
        </main>
    );
};

export default Hero;
