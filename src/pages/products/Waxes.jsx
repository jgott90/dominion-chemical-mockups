import React from "react";
import { Link } from "react-router-dom";
import waxesData from "../../data/waxes.json";
import "../../styles/CustomWaxFormulation.css"; // For shared layout/styles
import "../../styles/Waxes.css";

export default function Waxes() {
    return (
        <>
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <main className="waxes-main" id="main-content">
                <nav aria-label="Breadcrumb" className="waxes-breadcrumbs">
                    <ol>
                        <li><Link to="/">Home</Link> <span aria-hidden="true"> &gt; </span></li>
                        <li><Link to="/products">Products</Link> <span aria-hidden="true"> &gt; </span></li>
                        <li aria-current="page">Waxes</li>
                    </ol>
                </nav>
                <h1 className="waxes-title" tabIndex="-1">Waxes</h1>
                <p className="waxes-desc">Discover our broad range of wax types and their applications, from industrial manufacturing to specialty uses.</p>

                <section className="waxes-types-section" aria-labelledby="wax-types-heading">
                    <h2 id="wax-types-heading" className="section-title">Wax Types</h2>
                    <div className="waxes-types-grid">
                        {waxesData.types.map(type => (
                            <div className="waxes-type-card" key={type.name} tabIndex="0" aria-label={type.name}>
                                <span className="waxes-type-name">{type.name}</span>
                                <span className="waxes-type-desc">{type.description}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="waxes-applications-section" aria-labelledby="wax-applications-heading">
                    <h2 id="wax-applications-heading" className="section-title">Applications</h2>
                    <div className="waxes-applications-grid">
                        {waxesData.applications.map(app => (
                            <div className="waxes-application-card" key={app}>{app}</div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}