import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import industrialChemicalsData from "../../data/industrialChemicals.json";
import "../../styles/CustomWaxFormulation.css"; // For shared layout/styles
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

    // No filtering/searching logic applied (search is inert)
    const categories = industrialChemicalsData;

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
                    Search chemical categories or chemicals
                </label>
                <input
                    id="chemicals-search"
                    className="chemicals-search"
                    type="search"
                    placeholder="Search chemical categories or chemicals..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    aria-label="Search chemical categories or chemicals"
                    autoComplete="off"
                // onChange updates local state, but does not filter anything
                />
                <nav
                    className="chemicals-categories"
                    aria-label="Chemical Categories"
                >
                    {categories.length > 0 ? (
                        categories.map((category) => (
                            <div className="chemicals-category-block" key={category.name}>
                                <Link
                                    to={`/products/industrial-chemicals/${slugify(category.name)}`}
                                    className="chemicals-category-link"
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
                            </div>
                        ))
                    ) : (
                        <div className="chemicals-none" role="status">
                            No categories available.
                        </div>
                    )}
                </nav>
            </main>
        </>
    );
}