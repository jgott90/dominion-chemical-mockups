import React, { useState, useEffect, useRef } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import "../../styles/CustomWaxFormulation.css";

function CustomWaxFormulation() {
    const [enlarge, setEnlarge] = useState(false);
    const modalRef = useRef(null);
    const closeBtnRef = useRef(null);

    // ESC closes modal
    useEffect(() => {
        if (!enlarge) return;
        const handler = (e) => {
            if (e.key === "Escape") setEnlarge(false);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [enlarge]);

    // Focus trap and accessibility
    useEffect(() => {
        if (enlarge && closeBtnRef.current) {
            closeBtnRef.current.focus();
        }
    }, [enlarge]);

    return (
        <div className="custom-wax-bg">
            <Breadcrumbs />
            <section className="custom-wax-hero">
                <h1>Customized Wax Formulations</h1>
                <p>
                    The cornerstone of our business is creating tailored wax solutions for your unique application and needs.
                </p>
            </section>

            <section className="custom-wax-main">
                <div className="custom-wax-image-col">
                    <img src="/dominion-chemical-mockups/images/custom-formulation-tank.jpg" alt="Plant Equipment" className="custom-wax-photo" />
                </div>
                <div className="custom-wax-info-col">
                    <div className="custom-wax-info-card">
                        <h2>Expert Guidance, Unique Solutions</h2>
                        <p>
                            <strong>
                                The most important business decision you must make is determining the products used in your production.
                            </strong><br />
                            We understand how difficult this decision can be and are available to help you.
                        </p>
                        <p>
                            Our staff and chemists provide individual, technical assistance and troubleshooting for your challenges. We assist in developing new and advanced systems designed for your process and products.
                        </p>
                        <p>
                            Every application is unique. By understanding your needs and your facility, we can guide you with precise product selection.
                        </p>
                    </div>
                </div>
                <div className="custom-wax-image-col">
                    <img
                        src="/dominion-chemical-mockups/images/custom-wax-formulations-flowchart.jpg"
                        alt="Process Flow Diagram"
                        className="custom-wax-diagram"
                        onClick={() => setEnlarge(true)}
                        style={{ cursor: "zoom-in" }}
                        tabIndex={0}
                        onKeyDown={e => {
                            if (e.key === "Enter" || e.key === " ") setEnlarge(true);
                        }}
                        aria-label="Enlarge process flow diagram"
                    />
                    <div className="custom-wax-diagram-caption">
                        Process Flow – Click to Enlarge
                    </div>
                </div>
            </section>

            <section className="custom-wax-footer-note">
                <p>
                    <em>
                        Good communication is essential to a successful business. We welcome open discussions to help you meet your needs.<br />
                        <strong>Dominion Chemical Company would be proud to serve you.</strong>
                    </em>
                </p>
            </section>

            {/* Modal */}
            {enlarge && (
                <div
                    className="custom-wax-modal-bg"
                    onClick={() => setEnlarge(false)}
                    tabIndex={-1}
                    aria-modal="true"
                    role="dialog"
                    ref={modalRef}
                >
                    <button
                        className="custom-wax-modal-close"
                        onClick={e => { e.stopPropagation(); setEnlarge(false); }}
                        ref={closeBtnRef}
                        aria-label="Close enlarged process flow diagram"
                    >&times;</button>
                    <img
                        src="/dominion-chemical-mockups/images/custom-wax-formulations-flowchart.jpg"
                        alt="Enlarged Process Flow Diagram"
                        className="custom-wax-modal-img"
                        onClick={e => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}

export default CustomWaxFormulation;