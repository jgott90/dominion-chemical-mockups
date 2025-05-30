import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => (
    <div className="home">
        <main className="main-content" role="main">
            <section className="hero" aria-labelledby="hero-title">
                <div className="hero-bg" aria-hidden="true"></div>
                <div className="hero-content">
                    <h1 id="hero-title" tabIndex={-1}>
                        Your Trusted Partner in Chemical Solutions
                    </h1>
                    <p>Test Supplying quality industrial chemicals for all your needs.</p>
                    <Link
                        to=""
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
                        to="/industrial-chemicals"
                        className="product-card"
                        role="listitem"
                        tabIndex="0"
                        aria-label="Industrial Chemicals"
                    >
                        <img
                            src="/dominion-chemical-mockups/images/industrial-chemicals.jpg"
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
                        to=""
                        className="product-card"
                        role="listitem"
                        tabIndex="0"
                        aria-label="Waxes"
                    >
                        <img
                            src="/dominion-chemical-mockups/images/waxes.jpg"
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
                        to=""
                        className="product-card"
                        role="listitem"
                        tabIndex="0"
                        aria-label="Wax Emulsions"
                    >
                        <img
                            src="/dominion-chemical-mockups/images/wax-emulsions.jpg"
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

            {/* Services section and background wrapper */}
            <div className="services-bg">
                <section className="services-section" aria-labelledby="services-heading">
                    <h2 className="services-heading" id="services-heading">
                        Services
                    </h2>
                    <div className="services-grid" role="list">
                        <Link
                            to="/custom-wax-formulation"
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
                            to=""
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
                            to=""
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
                {/* Spacer fills remaining space with services-section background */}
                <div className="services-spacer" aria-hidden="true"></div>
            </div>
        </main>
    </div>
);

export default Home;