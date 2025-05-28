import React from "react";
import "../styles/CustomWaxFormulation.css";
import "../styles/OurStory.css";

function OurStory() {
    return (
        <div className="custom-wax-bg">
            {/* Hero / Lead */}
            <section className="about-hero">
                <h1>Our Story</h1>
                <p>
                    Starting blurb of where Dominion Chemical currently is.
                </p>
            </section>

            {/* 60+ Years of Wax Expertise Blurb */}
            <section className="about-blurb-section" aria-label="Dominion Chemical Experience and Capabilities">
                <div className="about-blurb-card">
                    <h2 className="sr-only">Dominion Chemical Experience and Capabilities</h2>
                    <p>
                        <strong>Attention grabbing sentence</strong> Talk about experience and history of company. Circle back to how experience & history set Dominion apart to meet current needs.
                    </p>
                </div>
            </section>

            {/* Main sections in cards */}
            <section className="about-main-section">
                <div className="about-content-card">
                    <h2>First Highlight</h2>
                    <ul>
                        <li>
                            <strong>First sub-section</strong> Some text here.
                        </li>
                        <li>
                            <strong>Second sub-section</strong> Some text here.
                        </li>
                        <li>
                            <strong>Third with continuation as needed</strong> Some text here.
                        </li>

                    </ul>
                </div>

                <div className="about-content-card">
                    <h2>Second Highlight</h2>
                    <p>
                        Blurb that is intended to be the center of attention
                    </p>
                </div>

                <div className="about-content-card">
                    <h2>Third Highlight</h2>
                    <ul>
                        <p>
                            Final blurb. Ideally a call to action to encourage customers to choose Dominion
                        </p>
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

export default OurStory;