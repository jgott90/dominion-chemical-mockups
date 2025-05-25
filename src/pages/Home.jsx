/*import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Your Trusted Partner in Chemical Solutions</h1>
                    <p>Supplying quality industrial chemicals for all your needs.</p>
                    <Link to="/products" className="explore-button">
                        Explore Our Products
                    </Link>
                </div>
            </section>

            <section className="product-categories">
                <h2 className="product-heading">Product Categories</h2>
                <div className="product-grid">
                    <Link to="/products/industrial-chemicals" className="product-card">
                        <img src="/images/industrial-chemicals.jpg" alt="Industrial Chemicals" />
                        <div className="product-info">
                            <h3>Industrial Chemicals</h3>

                        </div>
                    </Link>
                    <Link to="/products/waxes" className="product-card">
                        <img src="/images/waxes.jpg" alt="Waxes" />
                        <div className="product-info">
                            <h3>Waxes</h3>

                        </div>
                    </Link>
                    <Link to="/products/wax-emulsions" className="product-card">
                        <img src="/images/wax-emulsions.jpg" alt="Wax Emulsions" />
                        <div className="product-info">
                            <h3>Wax Emulsions</h3>

                        </div>
                    </Link>
                </div>
            </section>

            <section className="services-section">
                <h2 className="services-heading">Services</h2>
                <div className="services-grid">
                    <Link to="/services/custom-wax-formulation" className="service-card">
                        <div className="service-icon">🔬</div>
                        <h3>Customized Wax Formulation</h3>
                        <p>Optimize for variety and blending.</p>
                    </Link>


                    <Link to="/services/blending-packaging" className="service-card">
                        <div className="service-icon">📦</div>
                        <h3>Blending & Packaging</h3>
                        <p>Custom solutions provided.</p>
                    </Link>
                    <Link to="/services/diesel-exhaust-fluid" className="service-card">
                        <div className="service-icon">💧</div>
                        <h3>Diesel Exhaust Fluid (DEF)</h3>
                        <p>Meeting clean standards.</p>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;*/

import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main className="home">
            <Helmet>
                <title>Dominion Chemical | Industrial Chemical Solutions & Custom Wax Formulation</title>
                <meta
                    name="description"
                    content="Dominion Chemical supplies quality industrial chemicals, custom wax formulations, blending, and packaging services for businesses across the Southern U.S. and beyond."
                />
                <meta property="og:title" content="Dominion Chemical | Industrial Chemical Solutions & Custom Wax Formulation" />
                <meta property="og:description" content="Supplying quality industrial chemicals, custom wax blends, and packaging services. Explore our products and services today." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.dominionchemical.com/" />
                <meta property="og:image" content="https://www.dominionchemical.com/images/og-image.jpg" />
            </Helmet>

            <section className="hero" aria-label="Dominion Chemical Introduction">
                <div className="hero-bg" aria-hidden="true"></div>
                <div className="hero-content">
                    <h1>Your Trusted Partner in Chemical Solutions</h1>
                    <p>Supplying quality industrial chemicals for all your manufacturing and operational needs.</p>
                    <Link to="/products" className="explore-button">
                        Explore Industrial Chemicals
                    </Link>
                </div>
            </section>

            <section className="product-categories" aria-labelledby="product-heading">
                <h2 id="product-heading" className="product-heading">Product Categories</h2>
                <div className="product-grid">
                    <Link to="/products/industrial-chemicals" className="product-card" tabIndex={0} aria-label="View Industrial Chemicals">
                        <img src="/images/industrial-chemicals.jpg" alt="Bulk industrial chemicals in containers" />
                        <div className="product-info">
                            <h3>Industrial Chemicals</h3>
                            <p>Wide range of industrial chemicals for manufacturing, processing, and more.</p>
                        </div>
                    </Link>
                    <Link to="/products/waxes" className="product-card" tabIndex={0} aria-label="View Waxes">
                        <img src="/images/waxes.jpg" alt="Wax blocks and pellets" />
                        <div className="product-info">
                            <h3>Waxes</h3>
                            <p>High-quality waxes for industrial and specialty applications.</p>
                        </div>
                    </Link>
                    <Link to="/products/wax-emulsions" className="product-card" tabIndex={0} aria-label="View Wax Emulsions">
                        <img src="/images/wax-emulsions.jpg" alt="Wax emulsion in a laboratory beaker" />
                        <div className="product-info">
                            <h3>Wax Emulsions</h3>
                            <p>Emulsified wax solutions engineered for performance.</p>
                        </div>
                    </Link>
                </div>
            </section>

            <section className="services-section" aria-labelledby="services-heading">
                <h2 id="services-heading" className="services-heading">Our Services</h2>
                <div className="services-grid">
                    <Link to="/services/custom-wax-formulation" className="service-card" tabIndex={0} aria-label="Learn about Custom Wax Formulation Services">
                        <div className="service-icon" aria-hidden="true">🔬</div>
                        <h3>Custom Wax Formulation</h3>
                        <p>Expertly tailored wax blends for your unique requirements.</p>
                    </Link>
                    <Link to="/services/blending-packaging" className="service-card" tabIndex={0} aria-label="Learn about Blending and Packaging Services">
                        <div className="service-icon" aria-hidden="true">📦</div>
                        <h3>Blending & Packaging</h3>
                        <p>Flexible blending, compounding, and packaging solutions.</p>
                    </Link>
                    <Link to="/services/diesel-exhaust-fluid" className="service-card" tabIndex={0} aria-label="Learn about Diesel Exhaust Fluid Distribution">
                        <div className="service-icon" aria-hidden="true">💧</div>
                        <h3>Diesel Exhaust Fluid (DEF)</h3>
                        <p>Certified DEF available in various packaging sizes.</p>
                    </Link>
                </div>
            </section>

            <footer className="footer" aria-label="Contact and Copyright">
                <div className="footer-content">
                    <div>
                        <h2>Contact Dominion Chemical Today</h2>
                        <p>
                            Looking for custom blends or white label wax products? Dominion Chemical has a solution for you.<br />
                            Get started with a quote or consultation today.
                        </p>
                    </div>
                    <Link
                        to="/contact"
                        className="footer-contact-btn"
                        aria-label="Contact Dominion Chemical online"
                    >
                        Contact Us Online
                    </Link>
                </div>
                <div className="footer-bottom">
                    &copy; {new Date().getFullYear()} Dominion Chemical. All rights reserved.
                </div>
            </footer>
        </main>
    );
};

export default Home;