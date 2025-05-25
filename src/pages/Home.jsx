import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => (
    <div className="home">
        <section className="hero" aria-labelledby="hero-title">
            {/* Decorative background for visual accessibility */}
            <div className="hero-bg" aria-hidden="true"></div>
            <div className="hero-content">
                <h1 id="hero-title" tabIndex={-1}>
                    Your Trusted Partner in Chemical Solutions
                </h1>
                <p>Supplying quality industrial chemicals for all your needs.</p>
                <Link
                    to="/products"
                    className="explore-button"
                    aria-label="Explore our products"
                >
                    Explore Our Products
                </Link>
            </div>
        </section>

        <section className="product-categories" aria-labelledby="categories-heading">
            <h2 className="product-heading" id="categories-heading">
                Product Categories
            </h2>
            <div className="product-grid" role="list">
                <Link
                    to="/products/industrial-chemicals"
                    className="product-card"
                    role="listitem"
                    tabIndex="0"
                    aria-label="Industrial Chemicals"
                >
                    <img
                        src="/images/industrial-chemicals.jpg"
                        alt="Industrial Chemicals"
                        loading="lazy"
                        width="320"
                        height="170"
                    />
                    <div className="product-info">
                        <h3>Industrial Chemicals</h3>
                    </div>
                </Link>
                <Link
                    to="/products/waxes"
                    className="product-card"
                    role="listitem"
                    tabIndex="0"
                    aria-label="Waxes"
                >
                    <img
                        src="/images/waxes.jpg"
                        alt="Waxes"
                        loading="lazy"
                        width="320"
                        height="170"
                    />
                    <div className="product-info">
                        <h3>Waxes</h3>
                    </div>
                </Link>
                <Link
                    to="/products/wax-emulsions"
                    className="product-card"
                    role="listitem"
                    tabIndex="0"
                    aria-label="Wax Emulsions"
                >
                    <img
                        src="/images/wax-emulsions.jpg"
                        alt="Wax Emulsions"
                        loading="lazy"
                        width="320"
                        height="170"
                    />
                    <div className="product-info">
                        <h3>Wax Emulsions</h3>
                    </div>
                </Link>
            </div>
        </section>

        <section className="services-section" aria-labelledby="services-heading">
            <h2 className="services-heading" id="services-heading">
                Services
            </h2>
            <div className="services-grid" role="list">
                <Link
                    to="/services/custom-wax-formulation"
                    className="service-card"
                    role="listitem"
                    tabIndex="0"
                    aria-label="Customized Wax Formulation"
                >
                    <div className="service-icon" aria-hidden="true">
                        🔬
                    </div>
                    <h3>Customized Wax Formulation</h3>
                    <p>Optimize for variety and blending.</p>
                </Link>

                <Link
                    to="/services/blending-packaging"
                    className="service-card"
                    role="listitem"
                    tabIndex="0"
                    aria-label="Blending and Packaging"
                >
                    <div className="service-icon" aria-hidden="true">
                        📦
                    </div>
                    <h3>Blending &amp; Packaging</h3>
                    <p>Custom solutions provided.</p>
                </Link>
                <Link
                    to="/services/diesel-exhaust-fluid"
                    className="service-card"
                    role="listitem"
                    tabIndex="0"
                    aria-label="Diesel Exhaust Fluid"
                >
                    <div className="service-icon" aria-hidden="true">
                        💧
                    </div>
                    <h3>Diesel Exhaust Fluid (DEF)</h3>
                    <p>Meeting clean standards.</p>
                </Link>
            </div>
        </section>
    </div>
);

export default Home;