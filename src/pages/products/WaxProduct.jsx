import React from "react";
import { useParams, Link } from "react-router-dom";
import waxesData from "../../data/waxes.json";
import "../../styles/CustomWaxFormulation.css";
import "../../styles/WaxProduct.css";

export default function WaxProduct() {
    const { id } = useParams();
    // Assume waxes.json is an array of "types" and "applications"
    // Product lookup: Find from types or build a flat product list if needed
    const allWaxes = Array.isArray(waxesData.types) ? waxesData.types : [];
    const wax = allWaxes.find((item) => item.id === id);

    if (!wax) {
        return (
            <main className="wax-product-page wax-product-notfound" tabIndex="-1">
                <div className="wax-product-breadcrumbs">
                    <Link to="/">Home</Link> &gt; <Link to="/products">Products</Link> &gt; <Link to="/products/waxes">Waxes</Link>
                </div>
                <h1>Wax Not Found</h1>
                <p>Sorry, the wax product you’re looking for does not exist.</p>
            </main>
        );
    }

    return (
        <>
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <main className="wax-product-page" id="main-content" tabIndex="-1">
                <nav className="wax-product-breadcrumbs" aria-label="Breadcrumb">
                    <ol>
                        <li>
                            <Link to="/">Home</Link> <span aria-hidden="true"> &gt; </span>
                        </li>
                        <li>
                            <Link to="/products">Products</Link> <span aria-hidden="true"> &gt; </span>
                        </li>
                        <li>
                            <Link to="/products/waxes">Waxes</Link> <span aria-hidden="true"> &gt; </span>
                        </li>
                        <li aria-current="page">{wax.name}</li>
                    </ol>
                </nav>
                <section className="product-hero">
                    <h1 className="wax-product-title">{wax.name}</h1>
                    <p className="wax-product-desc">{wax.description}</p>
                </section>
                <section className="product-details" aria-labelledby="wax-specs-heading">
                    <div className="specs">
                        <h2 id="wax-specs-heading">Specifications</h2>
                        {wax.meltingPoint && (
                            <p>
                                <strong>Melting Point:</strong> {wax.meltingPoint}
                            </p>
                        )}
                        {wax.oilContent && (
                            <p>
                                <strong>Oil Content:</strong> {wax.oilContent}
                            </p>
                        )}
                        {/* Add more specs as desired */}
                    </div>
                </section>
                {wax.applications && wax.applications.length > 0 && (
                    <section className="wax-product-applications" aria-labelledby="wax-apps-heading">
                        <h2 id="wax-apps-heading">Typical Applications</h2>
                        <ul>
                            {wax.applications.map((app) => (
                                <li key={app}>{app}</li>
                            ))}
                        </ul>
                    </section>
                )}
            </main>
        </>
    );
}