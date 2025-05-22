import React from 'react';
import '../styles/about.css';

export default function About() {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay">
                    <h1>About Dominion Chemical</h1>
                    <p>Our success is measured by our customer's success</p>
                    <a href="/services" className="hero-button">Learn More About Our Services</a>
                </div>
            </section>

            {/* Our Story */}
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

            {/* Core Values */}
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

            {/* Team and Facility */}
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
}
