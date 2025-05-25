/*import React from 'react';
import '../styles/about.css';

export default function About() {
    return (
        <div className="about-page">

            <section className="hero-section">
                <div className="hero-overlay">
                    <h1>About Dominion Chemical</h1>
                    <p>Our success is measured by our customer's success</p>
                    <a href="/services" className="hero-button">Learn More About Our Services</a>
                </div>
            </section>


            <section className="content-section">
                <div className="our-story">
                    <div className="text">
                        <h2>Our Story</h2>
                        <p>
                            Wax nuances are our expertise. With over 60 years of experience in the wax business, Dominion Chemical's valuable historical expertise offers a rare working knowledge as well as trust and proven abilities to bring solutions, support and alternatives to provide the exact product you want.
                            With locations in Virginia and Georgia, Dominion Chemical Company s capacity to blend, package and create specialty wax formulations will meet your unique needs. Your product will be combined with our dedication and proven superior customer service. Your reputation is our reputation.
                            We offer an exceptional emulsification process, state of the art blending, compounding, packaging and experienced personnel as well as a full service wax lab dedicated to your needs for R&D, QC, and general product evaluation.
                        </p>
                    </div>
                </div>
            </section>


            <section className="values-section">
                <h2>Our Core Values</h2>
                <div className="values-grid">
                    <div className="value">
                        <h3>Integrity</h3>
                        <p>We uphold the highest standards–and do what we offer.</p>
                    </div>
                    <div className="value">
                        <h3>Quality</h3>
                        <p>We develop new ideas tailored to optimize care.</p>
                    </div>
                    <div className="value">
                        <h3>Customer Commitment</h3>
                        <p>We stand by our products and provide real-world solutions.</p>
                    </div>
                </div>
            </section>


            <section className="team-facility">
                <div className="team">
                    <h2>Meet Our Team</h2>
                    <div className="team-grid">
                        <div className="member">
                            <h4>Blake Myers</h4>
                            <p>Operator, Blending and Packaging</p>
                        </div>
                        <div className="member">
                            <h4>Dan Spureck</h4>
                            <p>Technical Sales, Emulsions Blending</p>
                        </div>
                    </div>
                </div>

                <div className="facility">
                    <h2>State-of-the-Art Facility</h2>
                    <ul>
                        <li>Manufacturing</li>
                        <li>Construction</li>
                        <li>Packaging</li>
                        <li>Automotive</li>
                        <li>Industrial Applications</li>
                    </ul>
                </div>
            </section>
        </div>
    );
} */
import React from "react";
import "../styles/CustomWaxFormulation.css";
import "../styles/AboutUs.css";

function AboutUs() {
    return (
        <div className="custom-wax-bg">
            {/* Hero / Lead */}
            <section className="about-hero">
                <h1>About Dominion Chemical</h1>
                <p>
                    Dominion Chemical is a trusted provider of specialty chemical solutions, serving industries across the Southern U.S. and beyond. With decades of experience, our company is committed to delivering reliable, high-quality products and services tailored to our customers’ unique needs.
                </p>
            </section>

            {/* 80+ Years of Wax Expertise Blurb */}
            <section className="about-blurb-section" aria-label="Dominion Chemical Experience and Capabilities">
                <div className="about-blurb-card">
                    <h2 className="sr-only">Dominion Chemical Experience and Capabilities</h2>
                    <p>
                        <strong>Wax nuances are our expertise.</strong> With over 80 years of experience in the wax business, Dominion Chemical’s valuable historical expertise offers a rare working knowledge as well as trust and proven abilities to bring solutions, support, and alternatives to provide the exact product you want.
                    </p>
                    <p>
                        With locations in Virginia and Georgia, Dominion Chemical Company’s capacity to blend, package, and create specialty wax formulations will meet your unique needs. Your product will be combined with our dedication and proven superior customer service. <strong>Your reputation is our reputation.</strong>
                    </p>
                    <p>
                        We offer an exceptional emulsification process, state-of-the-art blending, compounding, packaging, and experienced personnel as well as a full-service wax lab dedicated to your needs for R&amp;D, QC, and general product evaluation.
                    </p>
                </div>
            </section>

            {/* Main sections in cards */}
            <section className="about-main-section">
                <div className="about-content-card">
                    <h2>Our Services</h2>
                    <ul>
                        <li>
                            <strong>Custom Wax Formulations:</strong> Development and supply of wax blends for diverse industrial applications.
                        </li>
                        <li>
                            <strong>Blending & Packaging:</strong> Flexible solutions with advanced equipment and strict quality control—from small custom batches to full-scale production.
                        </li>
                        <li>
                            <strong>Diesel Exhaust Fluid (DEF) Distribution:</strong> Certified DEF in a wide range of packaging options, meeting all API and ISO22241 specs.
                        </li>
                        <li>
                            <strong>Industrial Chemicals & Emulsions:</strong> Comprehensive offerings for various industrial requirements.
                        </li>
                    </ul>
                </div>

                <div className="about-content-card">
                    <h2>Quality & Commitment</h2>
                    <p>
                        Our operations are built on a foundation of quality, safety, and customer service. We carefully monitor every production stage with thorough quality control—before, during, and after each batch. Dominion Chemical is dedicated to exceeding customer expectations and building long-term relationships through dependable products and responsive support.
                    </p>
                </div>

                <div className="about-content-card">
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li>Over 80 years of industry experience</li>
                        <li>Flexible, customer-focused service</li>
                        <li>Modern production and packaging facilities</li>
                        <li>Certified, safe, environmentally responsible products</li>
                        <li>Serving a wide range of industrial markets</li>
                    </ul>
                </div>
            </section>

            <section className="custom-wax-footer-note about-footer-note">
                <p>
                    <em>
                        Dominion Chemical—Ready to meet your specialty chemical, blending, and packaging needs.<br />
                        <strong>Contact us to learn more or discuss your next project.</strong>
                    </em>
                </p>
            </section>
        </div>
    );
}

export default AboutUs;