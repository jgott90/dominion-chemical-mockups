import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import industrialChemicalsData from "../../data/industrialChemicals.json";
import "../../styles/IndustrialChemicals.css";

// Converts category name to URL slug (e.g., "Water Treatment Chemicals" -> "water-treatment-chemicals")
function slugify(str) {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
}

export default function IndustrialChemicals() {
    const [search, setSearch] = useState("");
    const mainHeadingRef = useRef(null);

    useEffect(() => {
        if (mainHeadingRef.current) {
            mainHeadingRef.current.focus();
        }
    }, []);

    // Skip to content link handler
    function handleSkipToContent(e) {
        e.preventDefault();
        if (mainHeadingRef.current) {
            mainHeadingRef.current.focus();
        }
    }

    // Filter categories by search
    const filteredCategories = industrialChemicalsData.filter(category =>
        category.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <a
                href="#main-content"
                className="skip-link"
                onClick={handleSkipToContent}
                tabIndex="0"
            >
                Skip to main content
            </a>
            <main className="chemicals-page-main" id="main-content">
                <nav aria-label="Breadcrumb" className="chemicals-breadcrumbs">
                    <ol>
                        <li>
                            <Link to="/">Home</Link>
                            <span aria-hidden="true"> &gt; </span>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                            <span aria-hidden="true"> &gt; </span>
                        </li>
                        <li aria-current="page">Industrial Chemicals</li>
                    </ol>
                </nav>
                <h1 className="chemicals-title" tabIndex="-1" ref={mainHeadingRef}>
                    Industrial Chemicals Categories
                </h1>
                <p className="chemicals-desc">
                    Explore our range of industrial chemical categories. Select a category to view available products and details.
                </p>
                <label className="sr-only" htmlFor="chemicals-search">
                    Search chemical categories
                </label>
                <input
                    id="chemicals-search"
                    className="chemicals-search"
                    type="search"
                    placeholder="Search chemical categories..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    aria-label="Search chemical categories"
                    autoComplete="off"
                />
                <nav
                    className="chemicals-categories"
                    aria-label="Chemical Categories"
                >
                    {filteredCategories.length > 0 ? (
                        filteredCategories.map((category, idx) => (
                            <Link
                                to={`/products/industrial-chemicals/${slugify(category.name)}`}
                                className="chemicals-category-link"
                                key={category.name}
                                aria-label={`View ${category.name} category`}
                                tabIndex="0"
                            >
                                <span className="chemicals-category-title">
                                    {category.name}
                                </span>
                                <span className="chemicals-category-count">
                                    {category.products?.length || 0} chemicals
                                </span>
                                {category.description && (
                                    <span className="chemicals-category-shortdesc">
                                        {category.description}
                                    </span>
                                )}
                            </Link>
                        ))
                    ) : (
                        <div className="chemicals-none" role="status">
                            No categories found.
                        </div>
                    )}
                </nav>
                <div className="chemicals-actions">
                    <button
                        className="chemicals-quote-btn"
                        type="button"
                        aria-label="Request a Quote"
                    >
                        Request a Quote
                    </button>
                    <button
                        className="chemicals-contact-btn"
                        type="button"
                        aria-label="Contact Us"
                    >
                        Contact Us
                    </button>
                </div>
                <footer className="chemicals-footer" aria-label="Site footer">
                    &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
                </footer>
            </main>
        </>
    );
}