import React from "react";
import "../../styles/WaxEmulsions.css";

export default function WaxEmulsions() {
    return (
        <div className="wax-emulsions-page">
            <section className="emulsion-hero">
                <h1>Advanced Wax Emulsions for Industrial Applications</h1>
                <p>Durable, reliable, and engineered for performance.</p>
                <button className="cta-button">Request a Quote</button>
            </section>
            <section className="emulsion-types">
                <div className="emulsion-card">
                    <h3>Paraffin Emulsions</h3>
                    <p>Formulated for coatings, paper, and textiles.</p>
                </div>
                <div className="emulsion-card">
                    <h3>Microcrystalline Emulsions</h3>
                    <p>Ideal for flexibility and gloss in industrial use.</p>
                </div>
                <div className="emulsion-card">
                    <h3>Synthetic Emulsions</h3>
                    <p>Engineered alternatives for specialty applications.</p>
                </div>
            </section>
        </div>
    );
}
