import React from 'react';
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
                    <Link to="/services/def" className="service-card">
                        <div className="service-icon">💧</div>
                        <h3>Diesel Exhaust Fluid (DEF)</h3>
                        <p>Meeting clean standards.</p>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;