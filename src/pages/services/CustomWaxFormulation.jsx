import React, { useState } from "react";
import "../../styles/CustomWaxFormulation.css";

const images = [
    {
        src: "/images/custom-formulation-tank.jpg",
        alt: "Plant Equipment – Stainless steel tank and structure in the wax formulation facility.",
        caption: null
    },
    {
        src: "/images/custom-wax-formulations-flowchart.jpg",
        alt: "Process Flow Diagram of customized wax formulation.",
        caption: "Process Flow – Click to Enlarge"
    }
];

function CustomWaxFormulation() {
    const [modalImage, setModalImage] = useState(null);

    // Esc closes modal (accessibility)
    React.useEffect(() => {
        if (!modalImage) return;
        const handler = (e) => {
            if (e.key === "Escape") setModalImage(null);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [modalImage]);

    return (
        <div className="custom-wax-bg">
            <section className="custom-wax-hero">
                <h1 tabIndex="-1">Customized Wax Formulations</h1>
                <p>
                    The cornerstone of our business is creating tailored wax solutions for your unique application and needs.
                </p>
            </section>

            <section className="custom-wax-main">
                {/* Image column 1 */}
                <div className="custom-wax-image-col">
                    <img
                        src={images[0].src}
                        alt={images[0].alt}
                        className="custom-wax-photo"
                        tabIndex={0}
                        onClick={() => setModalImage(images[0])}
                        onKeyDown={e => (e.key === "Enter" || e.key === " ") && setModalImage(images[0])}
                        aria-label="Enlarge Plant Equipment image"
                        role="button"
                    />
                </div>
                {/* Info card */}
                <div className="custom-wax-info-col">
                    <div className="custom-wax-info-card" tabIndex={0}>
                        <h2>Our Custom Approach</h2>
                        <p>
                            <strong>
                                We partner with you for the perfect blend.
                            </strong>
                            <br />
                            Whether you need a unique wax formula for a specialty process or consistent quality at scale,
                            Dominion Chemical’s decades of expertise and modern facilities ensure your goals are met with precision and flexibility.
                        </p>
                        <ul>
                            <li>• Wide selection of waxes and additives</li>
                            <li>• Small batch to full production runs</li>
                            <li>• In-house lab for R&D and QC</li>
                            <li>• Blending, packaging, and technical support</li>
                        </ul>
                    </div>
                </div>
                {/* Image column 2 */}
                <div className="custom-wax-image-col">
                    <img
                        src={images[1].src}
                        alt={images[1].alt}
                        className="custom-wax-diagram"
                        tabIndex={0}
                        onClick={() => setModalImage(images[1])}
                        onKeyDown={e => (e.key === "Enter" || e.key === " ") && setModalImage(images[1])}
                        aria-label="Enlarge Process Flow diagram"
                        role="button"
                    />
                    <div className="custom-wax-diagram-caption">
                        {images[1].caption}
                    </div>
                </div>
            </section>

            <section className="custom-wax-footer-note">
                <p>
                    Good communication is essential to a successful business. We welcome open discussions to help you meet your needs.<br />
                    <strong>Dominion Chemical Company would be proud to serve you.</strong>
                </p>
            </section>

            {/* Modal for enlarged images */}
            {modalImage && (
                <div
                    className="custom-wax-modal-bg"
                    tabIndex={-1}
                    aria-modal="true"
                    aria-label="Enlarged image"
                    onClick={() => setModalImage(null)}
                    onKeyDown={e => { if (e.key === "Escape") setModalImage(null); }}
                >
                    <button
                        className="custom-wax-modal-close"
                        aria-label="Close enlarged image"
                        autoFocus
                        onClick={e => { e.stopPropagation(); setModalImage(null); }}
                    >
                        ×
                    </button>
                    <img
                        src={modalImage.src}
                        alt={modalImage.alt}
                        className="custom-wax-modal-img"
                        tabIndex={0}
                        aria-label={modalImage.alt}
                        onClick={e => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}

export default CustomWaxFormulation;