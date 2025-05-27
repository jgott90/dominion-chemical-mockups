import React from "react";
import "../../styles/CustomWaxFormulation.css"; // Reuse style for consistency!

function BlendingPackaging() {
    return (
        <div className="custom-wax-bg">
            <section className="custom-wax-hero">
                <h1 tabIndex="-1">Blending & Packaging Services</h1>
                <p>
                    Flexible, precise, and quality-driven blending and packaging solutions for waxes and specialty formulations—delivered to your specifications.
                </p>
            </section>

            <section className="custom-wax-main" aria-label="Blending and Packaging Capabilities">
                <div className="custom-wax-image-col">
                    <img
                        src="/projects/dominion-chemical/images/greer-slabber.jpg"
                        alt="Blending and packaging equipment at Dominion Chemical Greer facility"
                        className="custom-wax-photo"
                        loading="lazy"
                    />
                </div>
                <div className="custom-wax-info-col">
                    <div className="custom-wax-info-card">
                        <h2>Capabilities to Fit Your Needs</h2>
                        <p>
                            <strong>
                                Our Greer facility offers high-capacity blending tanks, dedicated packaging lines, and advanced slabber technology to handle orders of any size.
                            </strong>
                        </p>
                        <p>
                            We package slab wax using chilled air to guarantee solidification and eliminate exposure to water. From 60 lb cartons to 2000 lb pallet boxes, our slabs are consistent and uniform.
                        </p>
                        <p>
                            <strong>Quality Control</strong> is built into every batch—before, during, and after production. Our team ensures your product meets all specifications for performance and packaging.
                        </p>
                        <p>
                            Whether you need small custom batches or full-scale production, Dominion Chemical is ready to blend, package, and ship to your requirements.
                        </p>
                    </div>
                </div>
                <div className="custom-wax-image-col">
                    <img
                        src="/projects/dominion-chemical/images/wax-slabs.jpg"
                        alt="Wax slabs produced by the slabber process"
                        className="custom-wax-photo"
                        loading="lazy"
                    />
                </div>
            </section>

            <section className="custom-wax-footer-note" aria-label="Contact for Blending and Packaging">
                <p>
                    <em>
                        Dominion Chemical is confident we can meet or exceed your needs. <br />
                        <strong>Contact us for more information or to discuss your next project.</strong>
                    </em>
                </p>
            </section>
        </div>
    );
}

export default BlendingPackaging;